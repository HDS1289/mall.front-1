import {createSearchParams, useSearchParams, useNavigate} from 'react-router-dom'

function getNum(num, defaultNum) {
    let result
    if(num) result = parseInt(num)
    else result = defaultNum
    return result
}

const useTo = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const page = getNum(query.get('page'), 1)
    const size = getNum(query.get('size'), 5)
    const queryDefault = createSearchParams({page, size}).toString()

    const toList = param => {
        let query = ''
        if(param) {
            const page = getNum(param.page, 1)
            const size = getNum(param.size, 5)
            query = createSearchParams({page, size}).toString()
        } else query = queryDefault

        navigate({
            pathname: '../list',
            search: query
        })
    }

    const toGet = num => navigate({
        pathname: `../${num}`,
        search: queryDefault
    })

    const toFix = num => navigate({
        pathname: `../fix/${num}`,
        search: queryDefault
    })

    return {toList, toGet, toFix, page, size}
}

export default useTo