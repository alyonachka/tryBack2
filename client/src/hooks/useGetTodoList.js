import { useCallback } from "react"

export const useGetTodoList = () => {
    const memoized = useCallback(() =>
        fetch('http://localhost:3002/api/todos/list').then(resp => resp.json()
        ), [])
    return memoized
}