import axios from 'axios';
import { useEffect, useState } from 'react';
import { Root, compTodos, delTodos, getTodos } from '../api';
import Auth from '../components/Auth';
import Calendar from '../components/Calendar';
import BlockTodo from '../components/blockTodo';
import { SaveModal } from '../components/saveModal';
import Search from '../components/search';
import handleToken, { getTokenId } from '../utils/token';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [user, setUser] = useState<{ username: string, password: string }>();

    const token = handleToken.getToken();

    useEffect(() => {
        if (token) {
            const AuthStr = 'Bearer ' + token;
            const headers = { 'Authorization': AuthStr };
            axios.get('https://height-todos-api.onrender.com/users', { headers })
                .then(response => setUser(response.data.find((user: any) => user._id === getTokenId())));
        }
    }, [token])

    useEffect(() => {
        getTodos(setTodos, search)
    }, [search])

    const data = todos.filter((el: Root) => el.userId === getTokenId())

    return (
        <div className='max-w-[900px] m-auto px-3'>
            <Auth user={user?.username} />
            <Calendar />
            <div className='flex gap-3 mt-2 mb-5 sm:gap-4 sm:mt-5 sm:mb-8'>
                <Search setSearch={setSearch} />
                <SaveModal setTodos={setTodos} />
            </div>
            <div className='mb-2 -mt-2 text-xl text-white sm:text-2xl sm:mb-4'>Задачи, которые нужно сделать</div>
            <div className='flex flex-col gap-4'>
                {data.filter((el: Root) => el.comp === false).map((el: Root) =>
                    <BlockTodo
                        key={el._id}
                        el={el}
                        setTodos={setTodos}
                        compTodos={() => compTodos(el._id, setTodos)}
                        delTodos={() => delTodos(el._id, setTodos)}
                    />
                )}
            </div>
            <div className='mt-4 mb-2 text-xl text-white sm:text-2xl sm:mb-4 sm:mt-7'>Сделанный</div>
            <div className='flex flex-col gap-4'>
                {data.filter((el: Root) => el.comp === true).map((el: Root) =>
                    <BlockTodo
                        key={el._id}
                        el={el}
                        setTodos={setTodos}
                        compTodos={() => compTodos(el._id, setTodos)}
                        delTodos={() => delTodos(el._id, setTodos)}
                    />
                )}
            </div>
        </div>
    )
}

export default Todos
