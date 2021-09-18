import { useQuery, UseQueryResult } from 'react-query'
import { Memo } from '../types/memo'
import { memoApi } from '../apis/memo'

type UseMemoItem = UseQueryResult<Memo, Error>

function useMemoItem(id: string): UseMemoItem {
  const queryResult = useQuery<Memo, Error>(
    ['memo', 'item'],
    async () => await memoApi.memo(id),
  )
  return { ...queryResult }
}

export default useMemoItem
