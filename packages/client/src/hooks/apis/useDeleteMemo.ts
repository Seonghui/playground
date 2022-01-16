import { useMutation, UseMutationResult } from 'react-query'
import { memoApi } from '../../apis/memo'
import { MemoResponse } from '../../types/memo'

type UseDeleteMemo = UseMutationResult<MemoResponse, Error>
function useDeleteMemo(): UseDeleteMemo {
  const mutationResult = useMutation<MemoResponse, Error, any, any>(
    async (id: string): Promise<MemoResponse> => await memoApi.delete(id),
  )
  return {
    ...mutationResult,
  }
}

export default useDeleteMemo
