import { useQuery, UseQueryResult } from 'react-query'
import { TotalMemoResponse } from '../types/memo'
import { memoApi } from '../apis/memo'

type UseMemoList = UseQueryResult<TotalMemoResponse, Error>

function useMemoList(page: number = 1): UseMemoList {
  const queryResult = useQuery<TotalMemoResponse, Error>(
    ['memos', page],
    async () => await memoApi.all(page),
    { keepPreviousData: true },
  )
  return { ...queryResult }
}

export default useMemoList
