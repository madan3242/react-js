const REGISTER_USER = 'REGISTER_USER'

let registerUserAction = (user) => {
    return {
        type: REGISTER_USER, payload: user
    }
}

export { REGISTER_USER, registerUserAction }