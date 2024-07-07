import axios from 'axios';
import { getTokenId } from './utils/token';
import toast from 'react-hot-toast';

const API = 'https://height-todos-api.onrender.com/'

export interface Root {
    _id: string
    userId: string | undefined
    title: string
    comp: boolean
    __v: number
    createDate: string
    finishDate?: string
}

export const getTodos = async (setTodos: any, search?: string) => {
    try {
        const { data } = await axios.get(API + `search?q=${search ?? ''}`);
        setTodos(data);
    } catch (error) { }
}

export const delTodos = async (_id: string, setTodos: any) => {
    try {
        const { } = await axios.post(API + 'delete', { _id });
        getTodos(setTodos);
        toast.error('Задача успешно удалено');
    } catch (error) { }
}

export const compTodos = async (_id: string, setTodos: any) => {
    try {
        const { } = await axios.put(API + 'complate', { _id });
        getTodos(setTodos)
    } catch (error) { }
}

export const saveTodos = async (setTodos: any, title: string, date: string | undefined) => {
    try {
        const { } = await axios.post(API + 'add', {
            userId: getTokenId(),
            title,
            finishDate: date
        });
        toast.success('Задача успешно добовлено');
        getTodos(setTodos);
    } catch (error: any) {
        const { response } = await error
        toast.error(response.data.error);
    }
}

export const editTodos = async (setTodos: any, title: string, date: string | undefined, id?: string | null) => {
    try {
        const { } = await axios.put(API + 'edit', {
            _id: id,
            title,
            finishDate: date
        });
        getTodos(setTodos)
    } catch (error) { }
}

