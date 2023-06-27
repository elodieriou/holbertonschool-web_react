import React from 'react';
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CourseListRow from './CourseListRow';
import { getListCourses } from '../selectors/courseSelector';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

class CourseList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.onChangeRow = this.onChangeRow.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    onChangeRow(id, checked) {
        if (checked) this.props.selectCourse(id);
        else this.props.unSelectCourse(id);
    }

    render() {
        const { listCourses } = this.props;
        return (
            <table className={css(styles.courseList)}>
                <thead>
                <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
                <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
                </thead>
                <tbody>
                {listCourses.length === 0 && (
                    <CourseListRow textFirstCell={"No course available yet"} />
                )}
                {listCourses.map((course) => (
                    <CourseListRow
                        id={course.id}
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit}
                        isHeader={false}
                        isChecked={course.isSelected}
                        onChangeRow={this.onChangeRow}
                    />
                ))}
                </tbody>
            </table>
        );
    }
}

CourseList.propTypes = {
    listCourses: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    fetchCourses: PropTypes.func,
    selectCourse: PropTypes.func,
    unSelectCourse: PropTypes.func
};

CourseList.defaultProps = {
    listCourses: [],
    fetchCourses: () => {},
    selectCourse: () => {},
    unSelectCourse: () => {}
}

const styles = StyleSheet.create({
    courseList: {
        width: '1170px',
        border: '1px solid lightgrey',
        borderCollapse: 'collapse',
        marginTop: '2rem',
    },
});

export const mapStateToProps = (state) => {
    return {
        listCourses: getListCourses(state)
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourses: () => dispatch(fetchCourses()),
        selectCourse: (index) => dispatch(selectCourse(index)),
        unSelectCourse: (index) => dispatch(unSelectCourse(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

export { CourseList };
