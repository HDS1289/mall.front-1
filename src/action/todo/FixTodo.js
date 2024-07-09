import {useEffect, useState} from 'react'
import {getTodo, fixTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'

const FixTodo = ({todoNo}) => {
    const [todo, setTodo] = useState({
        todoNo: 0,
        title: '',
        writer: '',
        dueDate: '',
        done: false
    })
    const {toGet} = useTo()
    
    useEffect(() => {
        getTodo(todoNo).then(todo => setTodo(todo))
    }, [todoNo])

    const onChange = e => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const onChangeDone = e => {
        const value = e.target.value
        todo.done = value === 'Y'
        setTodo({...todo})
    }

    const onClickSave = () => {
        fixTodo(todo)
        toGet(todoNo)
    }

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            {makeItem('no', todo.todoNo)}
            {makeItem('writer', todo.writer)}
            {makeField('title', todo.title, 'text', onChange)}
            {makeField('dueDate', todo.dueDate, 'date', onChange)}
            <div className='flex justify-center'>
                <div className='relative mb-4 w-full flex flex-wrap items-stretch'>
                    <div className='w-1/5 p-6 text-right font-bold'>done</div>
                    <select name='done'
                        className='border-solid border-2 rounded m-1 p-2'
                        onChange={onChangeDone}
                        value={todo.done ? 'Y' : 'N'}>
                        <option>Y</option>
                        <option>N</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-end p-4'>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-red-500'
                    onClick={() => toGet(todoNo)}>CANCEL</button>
                <button type='button'
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
                    onClick={onClickSave}>SAVE</button>
            </div>
        </div>
    )
}

function makeItem(title, value) {
    return (
        <div className='flex justify-center'>
            <div className='relative mb-4 w-full flex flex-wrap items-stretch'>
                <div className='w-1/5 p-6 text-right font-bold'>{title}</div>
                <div className='w-4/5 p-6 rounded-r border border-solid
                    shadow-md bg-gray-100'>{value}</div>
            </div>
        </div>
    )
}

function makeField(title, value, fieldType, onChange) {
    return (
        <div className='flex justify-center'>
            <div className='relative mb-4 flex flex-wrap w-full items-stretch'>
                <div className='w-1/5 p-6 text-right font-bold'>{title}</div>
                <input type={fieldType}
                    className='w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md'
                    name={title}
                    value={value}
                    onChange={onChange}/>
            </div>
        </div>
    )
}

export default FixTodo