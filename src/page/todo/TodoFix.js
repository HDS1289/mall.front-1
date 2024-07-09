import {useParams} from 'react-router-dom'
import FixTodo from '../../action/todo/FixTodo'

const TodoFix = () => {
    const {todoNo} = useParams()

    return (
        <div className='w-full'>
            <FixTodo todoNo={todoNo}/>
        </div>
    )
}

export default TodoFix