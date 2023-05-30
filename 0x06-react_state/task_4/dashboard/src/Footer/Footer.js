import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';


const Footer = () => {
    return (
        <AppContext.Consumer>
            {
                (context) => {
                    return (
                        <div>
                            {
                                context.user.isLoggedIn === false &&
                                <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                            }
                            {
                                context.user.isLoggedIn === true &&
                                <a href={'#'}>Contact us</a>
                            }
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    );
};

const styles = StyleSheet.create({
});

export default Footer;
