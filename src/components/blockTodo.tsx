import { Dispatch, SetStateAction, useEffect } from "react"
import { Root } from "../api"
import { EditModal } from "./editModal"
import FormatData from "./formatData"
import { DelIcon } from "./icon"
import toast from "react-hot-toast"

interface IBlockTodo {
    el: Root,
    compTodos: () => void,
    delTodos: () => void,
    setTodos: Dispatch<SetStateAction<never[]>>
}

function BlockTodo({ el, compTodos, delTodos, setTodos }: IBlockTodo) {

    const expiredData = (new Date() > new Date(el.finishDate)) && !el.comp

    if (expiredData) {
        useEffect(() => {
            toast.error(`Задача ${el.title.slice(0, 10) + '...'} просреченно`);
        }, [])
    }

    return (
        <div className={`border-[D6D6D6] border-2 ${expiredData && 'border-red-700'} text-white text-2xl flex p-2 sm:p-5 sm:gap-2 items-center rounded-[10px]`} key={el._id}>
            <label className='checkbox-container'>
                <input className='size-6' checked={el.comp} onChange={() => compTodos()} type='checkbox' />
                <span className="custom-checkbox"></span>
            </label>
            <div className='relative -mb-[8px] h-[100%]'>
                <span className='absolute text-[13px] sm:text-[15px] -top-[25px] sm:-top-[22px] left-0 flex gap-2'><FormatData data={el.createDate} /> до <FormatData expiredData={expiredData} data={el.finishDate} /></span>
                <div className="w-full h-[24px] sm:h-[30px] translate-y-1 overflow-hidden text-lg sm:text-2xl">
                    {el.comp ?
                        <span>{el.title}</span>
                        : <span>{el.title}</span>
                    }
                </div>
            </div>
            <div className='ml-auto flex flex-col sm:flex-row gap-4 items-center'>
                <button><EditModal el={el} setTodos={setTodos} /></button>
                <button onClick={() => delTodos()}><DelIcon /></button>
            </div>
        </div>
    )
}

export default BlockTodo
