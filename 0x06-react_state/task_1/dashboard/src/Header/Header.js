import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';


const Header = () => {
    return (
        <div className={css(styles.header)}>
            <img className={css(styles.image)} src={logo} alt={"Holberton logo"} />
            <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
    );
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
});
export default Header;
