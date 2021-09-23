import { useQuery, UseQueryResult } from 'react-query'
import { MemoResponse } from '../types/memo'
import { memoApi } from '../apis/memo'

type UseMemoList = UseQueryResult<MemoResponse[], Error>

function useMemoList(): UseMemoList {
  const queryResult = useQuery<MemoResponse[], Error>(
    ['memo', 'all'],
    async () => await memoApi.all(),
  )
  return { ...queryResult }
}

export default useMemoList
