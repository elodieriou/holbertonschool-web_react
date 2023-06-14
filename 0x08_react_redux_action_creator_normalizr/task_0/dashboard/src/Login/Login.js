import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => {
    return (
        <React.Fragment>
            <p className={css(styles.text)}>Login to access the full dashboard</p>
            <div className={css(styles.form, styles.formMobile)}>
                <div>
                    <label className={css(styles.labelAndInput, styles.labelAndInputMobile)} htmlFor={"email"}>Email:</label>
                    <input className={css(styles.labelAndInput, styles.labelAndInputMobile)} type={"email"} id={"email"} name={"email"}></input>
                </div>
                <div>
                    <label className={css(styles.labelAndInput, styles.labelAndInputMobile)} htmlFor={"password"}>Password:</label>
                    <input className={css(styles.labelAndInput, styles.labelAndInputMobile)} type={"password"} id={"password"} name={"password"}></input>
                </div>
                <button className={css(styles.buttonMobile)} type={"submit"}>OK</button>
            </div>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    text: {
        margin: '3rem 0 0 2rem',
    },
    form: {
        display: 'flex',
        margin: '1rem 0 0 2rem',
    },
    labelAndInput: {
        margin: '0 1rem 0 0',
    },
    formMobile: {
        '@media (max-width: 900px)': {
            flexDirection: 'column',
        },
    },
    labelAndInputMobile: {
        '@media (max-width: 900px)': {
            marginBottom: '.5rem',
        },
    },
    buttonMobile: {
        '@media (max-width: 900px)': {
            marginTop: '1rem',
            width: 'min-content',
        },
    },
});

export default Login;
