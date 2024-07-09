import {useState, useCallback} from 'react'
import {addTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'

const AddTodo = () => {
    const [todo, setTodo] = useState({
        title: '',
        writer: '',
        dueDate: ''
    })
    const {toList} = useTo()

    const onChange = e => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const onClickAdd = useCallback(() => addTodo(todo).then(toList), [todo])

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            {makeItem('title', todo.title, 'text', onChange)}
            {makeItem('writer', todo.writer, 'text', onChange)}
            {makeItem('dueDate', todo.dueDate, 'date', onChange)}
            <div className='flex justify-end mt-3'>
                <div className='relative mb-4 p-4 flex flex-wrap items-stretch'>
                    <button type='button'
                        className='rounded p-4 w-24 bg-blue-500 text-xl text-white'
                        onClick={onClickAdd}>SAVE</button>
                </div>
            </div>
        </div>
    )
}

function makeItem(title, value, fieldType, onChange) {
    return (
        <div className='flex justyfy-center'>
            <div className='relative mt-4 flex flex-wrap w-full items-stretch'>
                <div className='w-1/5 p-6 text-right font-bold'>{title}</div>
                <input type={fieldType}
                    className='w-4/5 p-6 rounded border border-solid border-neutral-500 shadow-md'
                    name={title}
                    value={value}
                    onChange={onChange}/>
            </div>
        </div>
    )
}

export default AddTodo