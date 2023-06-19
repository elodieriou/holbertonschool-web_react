import React, {useState} from 'react';
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';


const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const rowStyles = {
        backgroundColor: '#f5f5f5ab',
    }
    const headerStyles = {
        backgroundColor: '#deb5b545',
    }
    let tr;

    if (isHeader && textSecondCell === null) tr = <th className={css(styles.colspan)} colSpan={2}>{textFirstCell}</th>;
    else if (isHeader && textSecondCell) tr = (
        <React.Fragment>
            <th className={css(styles.headerRow)}>{textFirstCell}</th>
            <th className={css(styles.headerRow)}>{textSecondCell}</th>
        </React.Fragment>
    ); else tr = (
        <React.Fragment>
            <td className={css( isChecked ? [styles.rowChecked, styles.bodyRow] : styles.bodyRow)}>
                <input type={'checkbox'} onClick={handleCheckbox}></input>
                {textFirstCell}
            </td>
            <td className={css(isChecked ? [styles.rowChecked, styles.bodyRow] : styles.bodyRow)}>{textSecondCell}</td>
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

const styles = StyleSheet.create({
    headerRow: {
        borderTop: '1px solid lightgrey',
        borderBottom: '1px solid lightgrey',
        padding: '.5rem',
        textAlign: 'left',
    },
    colspan: {
        padding: '.5rem',
        textAlign: 'center',
    },
    bodyRow: {
        padding: '.2rem .5rem',
        textAlign: 'left',
    },
    rowChecked: {
        backgroundColor: '#e6e4e4',
    },
});

export default CourseListRow;
