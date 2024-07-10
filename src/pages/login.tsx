import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Input,
    Typography
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import handleToken from "../utils/token";
import { ChevronIcon } from "../components/icon";
import toast from "react-hot-toast";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/')
        }
    }, [])

    const userRegistr = async () => {
        try {
            const { data } = await axios.post('https://height-todos-api.onrender.com/' + 'login',
                {
                    username,
                    password
                }
            );
            handleToken.saveToken(data.token);
            navigate("/");
            toast.success('Успешно авторизовано');

        } catch ({ response }: any) {
            toast.error(response.data.message)
        }
    }

    return (
        <div className="flex min-h-screen items-center px-2">
            <div className="text-white absolute top-4 left-4 flex text-xl items-center">
                <span onClick={() => navigate("/")} className="text-[#d0caca] cursor-pointer">Главная</span>
                <ChevronIcon />
                <span>Вход</span>
            </div>
            <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                        Форма Входа
                    </Typography>
                    <Typography
                        className="mb-3 font-normal"
                        variant="paragraph"
                        color="gray"
                    >
                        Введите имя и пароль для входа
                    </Typography>
                    <Typography className="-mb-2" variant="h6">
                        Имя
                    </Typography>
                    <Input label="User Name" size="lg" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                    <Typography className="-mb-2" variant="h6">
                        Пароль
                    </Typography>
                    <Input label="Password" size="lg" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button className="w-full" variant="gradient"
                        onClick={userRegistr}                       >
                        Войти
                    </Button>
                    <div className="mt-4 flex justify-center">
                        <Typography variant="small">
                            У вас нет учетной записи?
                        </Typography>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold cursor-pointer"
                            onClick={() => navigate('/register')}
                        >
                            Зарегистрироваться
                        </Typography>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
