import { useQuery, UseQueryResult } from 'react-query'
import { Memo } from '../types/memo'
import { memoApi } from '../apis/memo'

type UseMemoList = UseQueryResult<Memo[], Error>

function useMemoList(): UseMemoList {
  const queryResult = useQuery<Memo[], Error>(
    ['memo', 'all'],
    async () => await memoApi.all(),
  )
  return { ...queryResult }
}

export default useMemoList
