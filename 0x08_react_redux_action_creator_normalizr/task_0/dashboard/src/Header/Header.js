import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className={css(styles.header)}>
                    <img className={css(styles.image)} src={logo} alt={"Holberton logo"} />
                    <h1 className={css(styles.title)}>School dashboard</h1>
                </div>
                {
                    this.context.user.isLoggedIn === true &&
                    <div id={'logoutSection'} className={css(styles.center)}>
                        <h3>Welcome <strong>{this.context.user.email}</strong> <span className={css(styles.logout)} onClick={this.context.logOut}>(logout)</span></h3>
                    </div>
                }
            </React.Fragment>
        );
    }
}
Header.contextType = AppContext;

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
export default Header;
