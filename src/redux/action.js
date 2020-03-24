export const CHECK_AUTH = "CHECK_AUTH";


export const checkAuth = (data)=> ({
    type : CHECK_AUTH,
    payload: {
        username : data.username,
        password : data.password,
    }
});

