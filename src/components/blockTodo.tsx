import { EditModal } from "./editModal"
import FormatData from "./formatData"
import { DelIcon } from "./icon"

function BlockTodo({ el, compTodos, handleTodos, delTodos, setTodos }: any) {
    return (
        <div className='border-[D6D6D6] border-2 text-white text-2xl flex p-5 gap-2 items-center rounded-[10px]' key={el._id}>
            <label className='checkbox-container'>
                <input className='size-6' checked={el.comp} onChange={() => compTodos()} type='checkbox' />
                <span className="custom-checkbox"></span>
            </label>
            <div className='relative -mb-[8px]'>
                <span className='absolute text-[15px] -top-[22px] left-0 flex gap-2'><FormatData data={el.createDate} /> до <FormatData data={el.finishDate} /></span>
                <div className="w-full">
                    {el.comp ?
                        <span className="line-through">{el.title}</span>
                        : <span>{el.title}</span>
                    }
                </div>
            </div>
            <div className='ml-auto flex gap-4 items-center'>
                <button onClick={() => handleTodos(el)}><EditModal el={el} setTodos={setTodos} /> </button> <button onClick={() => delTodos()}><DelIcon /></button>
            </div>
        </div>
    )
}

export default BlockTodo
