import {createBrowserRouter} from 'react-router-dom'
import {Suspense, lazy} from 'react'
import todoRouter from './todoRouter'

const Loading = <div>Loading...</div>
const Main = lazy(() => import('../page/Main'))
const About = lazy(() => import('../page/About'))
const TodoIndex = lazy(() => import('../page/todo/TodoIndex'))

const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: '/about',
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: '/todo',
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    }
])

export default rootRouter