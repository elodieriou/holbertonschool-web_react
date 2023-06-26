import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFullYear, getFooterCopy } from '../utils/utils';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                {
                    !user &&
                    <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                }
                {
                    user &&
                    <a href={'#'}>Contact us</a>
                }
            </div>
        );
    }
}

Footer.propTypes = {
    user: PropTypes.object
};

Footer.defaultProps = {
    user: null
}

const styles = StyleSheet.create({
});

export const mapStateToProps = (state) => {
    return {
        user: state.get('user')
    }
};

export default connect(mapStateToProps)(Footer);

export { Footer };
