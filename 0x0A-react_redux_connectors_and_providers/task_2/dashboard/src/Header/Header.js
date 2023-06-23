import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from '../assets/holberton-logo.jpg';
import { logout } from '../actions/uiActionCreators';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, logout } = this.props;
        return (
            <React.Fragment>
                <div className={css(styles.header)}>
                    <img className={css(styles.image)} src={logo} alt={"Holberton logo"}/>
                    <h1 className={css(styles.title)}>School dashboard</h1>
                </div>
                {
                    user &&
                    <div id={'logoutSection'} className={css(styles.center)}>
                        <h3>Welcome <strong>{`${user.email}`}</strong> <span className={css(styles.logout)}
                                                                             onClick={logout}>(logout)</span></h3>
                    </div>
                }
            </React.Fragment>
        );
    }
}

Header.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
};

Header.defaultProps = {
    user: null,
    logout: () => {}
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
    },
    image: {
        width: '200px',
        height: '200px',
    },
    title: {
        color: '#e1484c',
        margin: 'auto auto auto 0',
    },
    logout: {
        fontStyle: 'italic',
        cursor: 'pointer'
    },
    center: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const mapStateToProps = (state) => {
    console.log(state.toJS())
    return {
        user: state.get('user')
    };
};

export const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
