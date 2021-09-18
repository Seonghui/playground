import { useMutation, UseMutationResult } from 'react-query'
import { memoApi } from '../apis/memo'
import { Memo } from '../types/memo'

type UseDeleteMemo = UseMutationResult<Memo, Error>
function useDeleteMemo(): UseDeleteMemo {
  const mutationResult = useMutation<Memo, Error, any, any>(
    async (id: string): Promise<Memo> => await memoApi.delete(id),
  )
  return {
    ...mutationResult,
  }
}

export default useDeleteMemo
