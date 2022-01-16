import { useQuery, UseQueryResult } from 'react-query'
import { TotalMemoResponse } from '../types/memo'
import { memoApi } from '../apis/memo'

type UseMemoList = UseQueryResult<TotalMemoResponse, Error>

function useMemoList(): UseMemoList {
  const queryResult = useQuery<TotalMemoResponse, Error>(
    ['memo', 'all'],
    async () => await memoApi.all(),
  )
  return { ...queryResult }
}

export default useMemoList
