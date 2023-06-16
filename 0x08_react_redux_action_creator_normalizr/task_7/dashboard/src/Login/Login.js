import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enableSubmit: false
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email ||
            prevState.password !== this.state.password) {
            const displayButton = this.state.email.length > 0 && this.state.password.length > 0;
            this.setState({
                enableSubmit: displayButton,
            });
        }
    }

    handleLoginSubmit = (event) => {
        event.preventDefault();
        this.props.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    render() {

        return (
            <React.Fragment>
                <p className={css(styles.text)}>Login to access the full dashboard</p>
                <form onSubmit={(event) => {this.handleLoginSubmit(event)}}
                      className={css(styles.form, styles.formMobile)}>
                    <div>
                        <label className={css(styles.labelAndInput, styles.labelAndInputMobile)} htmlFor={"email"}>Email:</label>
                        <input className={css(styles.labelAndInput, styles.labelAndInputMobile)}
                               type={"email"} id={"email"} name={"email"} value={this.state.email}
                               onChange={(event) => {this.handleChangeEmail(event)}}></input>
                    </div>
                    <div>
                        <label className={css(styles.labelAndInput, styles.labelAndInputMobile)} htmlFor={"password"}>Password:</label>
                        <input className={css(styles.labelAndInput, styles.labelAndInputMobile)}
                               type={"password"} id={"password"} name={"password"} value={this.state.password}
                               onChange={(event) => {this.handleChangePassword(event)}}></input>
                    </div>
                    <input className={css(styles.buttonMobile)} type={"submit"} value={'ok'} disabled={!this.state.enableSubmit}></input>
                </form>
            </React.Fragment>
        );
    };
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
