import { jwtDecode } from 'jwt-decode';

const handleToken = {
    getToken: () => {
        const token = localStorage.getItem("token") || null
        try {
            const decodedToken: { exp: number } = jwtDecode(token ?? '');
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem("token");
                return null;
            }
            return token;
        } catch (error) {
            console.error("Ошибка декодирования токена:", error);
            localStorage.removeItem("token");
        }
    },
    removeToken: () => {
        localStorage.removeItem("token")
        window.location.reload();
    },
    saveToken: (token: string) => localStorage.setItem("token", token)
}

export default handleToken

export function getTokenId() {
    try {
        const token = handleToken.getToken();
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