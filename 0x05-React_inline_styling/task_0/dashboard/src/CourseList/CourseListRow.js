import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    const rowStyles = {
        backgroundColor: '#f5f5f5ab',
    }
    const headerStyles = {
        backgroundColor: '#deb5b545',
    }
    let tr;

    if (isHeader && textSecondCell === null) tr = <th colSpan={2}>{textFirstCell}</th>;
    else if (isHeader && textSecondCell) tr = (
        <React.Fragment>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
        </React.Fragment>
    ); else tr = (
        <React.Fragment>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </React.Fragment>
    );

    const applyStyle = isHeader ? headerStyles : textFirstCell === 'Webpack' ? rowStyles : null;

    return <tr style={applyStyle}>{tr}</tr>;
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;
