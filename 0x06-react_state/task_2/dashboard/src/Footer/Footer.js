import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';


const Footer = () => {
    return (
        <div className={css(styles.footer)}>
            <p className={css(styles.paragraphe)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        borderTop: '3px solid #e1484c',
        width: '100%',
    },
    paragraphe: {
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

export default Footer;
