import { useNavigate } from "react-router-dom";
import handleToken from "../utils/token";
import { AuthIcon } from "./icon";
import MyAvatar from "./MyAvatar";

function Auth({ user }: { user: string | undefined }) {
    const token = handleToken.getToken();
    const navigate = useNavigate()
    return (
        <div className="flex justify-between items-center sm:px-10 mt-3">
            <div className={`text-white font-bold text-3xl sm:text-4xl ${token && 'text-3xl sm:text-5xl'} flex gap-3 uppercase`}>
                <span className="text-[#4D4117]">To</span>
                <span className="text-[#DFBD43]">Do</span>
                <span>List</span>
            </div>
            {!token && <div onClick={() => navigate('/login')} className="flex cursor-pointer flex-col items-center text-white">
                <AuthIcon />
                <div className={`text-base sm:text-xl tracking-[0.7px]`}>
                    Войти
                </div>
            </div>}
            {token && <MyAvatar name={user} />}
        </div>
    )
}

export default Auth
