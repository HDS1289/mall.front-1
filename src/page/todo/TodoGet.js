import {useParams} from 'react-router-dom'
import GetTodo from '../../action/todo/GetTodo'

const TodoGet = () => {
    const {todoNo} = useParams()

    return (
        <GetTodo todoNo={todoNo}/>
    )
}

export default TodoGet