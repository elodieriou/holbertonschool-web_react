import React from 'react';
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';


const CourseList = ({listCourses}) => {
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
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit} />
                ))}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}

const styles = StyleSheet.create({
    courseList: {
        width: '1170px',
        border: '1px solid lightgrey',
        borderCollapse: 'collapse',
        marginTop: '2rem',
    },
});

export default CourseList;
