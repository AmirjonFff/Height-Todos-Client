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
            axios.get('http://localhost:5000/users', { headers })
                .then(response => setUser(response.data.find((user: any) => user._id === getTokenId())));
        }
    }, [token])

    useEffect(() => {
        getTodos(setTodos, search)
    }, [search])

    const data = token ? todos.filter((el: Root) => el.userId === getTokenId()) : todos

    return (
        <div className='w-[900px] m-auto'>
            <Auth user={user?.username} />
            <Calendar />
            <div className='flex gap-4 mt-5 mb-8'>
                <Search setSearch={setSearch} />
                <SaveModal setTodos={setTodos} />
            </div>
            <div className='text-white text-2xl mb-4 -mt-2'>Задачи, которые нужно сделать</div>
            <div className='flex flex-col gap-4'>
                {data.filter((el: Root) => el.comp === false).map((el: Root) =>
                    <BlockTodo el={el}
                        key={el._id}
                        setTodos={setTodos}
                        compTodos={() => compTodos(el._id, setTodos)}
                        delTodos={() => delTodos(el._id, setTodos)}
                    />
                )}
            </div>
            <div className='text-white text-2xl my-4 mt-7'>Сделанный</div>
            <div className='flex flex-col gap-4'>
                {data.filter((el: Root) => el.comp === true).map((el: Root) =>
                    <BlockTodo el={el}
                        key={el._id}
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
