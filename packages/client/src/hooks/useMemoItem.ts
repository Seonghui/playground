import { useQuery, UseQueryResult } from 'react-query'
import { MemoResponse } from '../types/memo'
import { memoApi } from '../apis/memo'

type UseMemoItem = UseQueryResult<MemoResponse, Error>

function useMemoItem(id: string): UseMemoItem {
  const queryResult = useQuery<MemoResponse, Error>(
    ['memo', 'item'],
    async () => await memoApi.memo(id),
  )
  return { ...queryResult }
}

export default useMemoItem
