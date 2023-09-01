import { createSlice } from "@reduxjs/toolkit";

// Define the user type
interface User {
    id: number;
    name: string;
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
}


// A helper function to set a cookie
function setCookie(name: string, value: string) {
    const date = new Date();
    date.setTime(date.getTime() + 5 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// A helper function to get a cookie value by name
function getCookie(name: string) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cname) === 0) {
            return cookie.substring(cname.length, cookie.length);
        }
    }
    return "";
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [{ id: 1, name: 'masoud', username: 'masoud_red64', phoneNumber: '09361290345', email: 'masoud@gmail.com', password: '123456' }],
        currentUser: null as User | null,  // This will hold the logged-in user's info
        isLogin: false
    },
    reducers: {
        login: (state, action) => {

            const { username, password } = action.payload;

            const user = state.users.find(user => user.username === username && user.password === password);
            if (user) {
                state.currentUser = user;
                state.isLogin = true;
                // Save user info to local storage
                localStorage.setItem('user', JSON.stringify(user));
                // Save user info to a cookie
                setCookie("user", JSON.stringify(user)); // Expires in 30 days
            }
        },
        logout: (state) => {
            state.currentUser = null;
            state.isLogin = false;
            // Clear user info from local storage
            localStorage.removeItem('user');
        }
    }
});

export const { login, logout } = authSlice.actions;
export { getCookie }
export default authSlice.reducer;
