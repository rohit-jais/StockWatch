import { CHECK_AUTH } from './action';

const initalState = {
    isLogin: false,
   
}

const reducer = (state = initalState, action) => {

    switch (action.type) {
        case CHECK_AUTH:
            if (action.payload.username === "admin" && action.payload.password === "admin") {
                return {
                    ...state,
                    isLogin: true
                }
            }
            break;
        
        default:
            return state
    }
}

export default reducer