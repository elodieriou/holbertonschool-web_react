import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from "./uiActionTypes";

export const login = (email, password) => {
    return {
        type: LOGIN,
        user: { email, password }
    };
};

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    };
};

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    };
};

export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));

        return fetch('http://localhost:8564/login-success.json')
            .then((response) => {
                if (response.status <= 301) dispatch(loginSuccess());
                else dispatch(loginFailure());
            })
            .catch((error) => dispatch(loginFailure()));
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
};

export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
};
