export const isAuthenticated = (token: string) => {
    if(token){
        // verify token jwt
        return true;
    }
    return false;
}