import {useEffect, useState} from 'react'
import {getTodos} from '../../api/todoApi' // 그냥 export한 것
import useTo from '../../page/useTo' // export default한 것 ==> 이름을 다르게 바꿀 수 있다.
import Paging from '../Paging'

const ListTodo = () => {
    const {toGet, toList, page, size} = useTo()
    const [response, setResponse] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getTodos({page, size}).then(response => {
            setResponse(response)
            setRefresh(true)
    })}, [page, refresh])

    return (
        <div className='border-2 border-blue-100 mr-2 ml-2'>
            <div className='flex flex-wrap mx-auto justify-center p-6'>
                {response ? response.items.map(todo => 
                    <div key={todo.todoNo}
                        className='w-full p-2 m-2 rounded shadow-md text-xl'
                        onClick={() => toGet(todo.todoNo)}>
                        <div className='flex'>
                            <div className='p-2 w-2/12'>
                                {todo.todoNo}
                            </div>
                            <div className='m-1 p-2 w-3/12'>
                                {todo.writer}
                            </div>
                            <div className='m-1 p-2 w-7/12 text-end'>
                                {todo.dueDate}
                            </div>
                        </div>
                    </div>
                ) : <></>}
            </div>
            {response ? <Paging response={response} toList={toList}/> : <></>}
        </div>
    )
}

export default ListTodo