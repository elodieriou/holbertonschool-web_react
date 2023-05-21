import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySection.css';

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={"bodySectionWithMargin"}>
                <BodySection {...this.props} />
            </div>
        );
    };
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default BodySectionWithMarginBottom;
