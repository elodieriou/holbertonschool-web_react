import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';


const Footer = () => {
    return (
        <p className={css(styles.paragraphe)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    );
};

const styles = StyleSheet.create({
    paragraphe: {
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

export default Footer;
