import { jwtDecode } from 'jwt-decode';

const handleToken = {
    getToken: () => localStorage.getItem("token") || null,
    removeToken: () => {
        localStorage.removeItem("token")
        window.location.reload();
    },
    saveToken: (token: string) => localStorage.setItem("token", token)
}

export default handleToken

export function getTokenId() {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            let user: {
                id: number
            } = jwtDecode(token);
            return user.id;
        }
    } catch (error) {
        console.log(error);
    }
}