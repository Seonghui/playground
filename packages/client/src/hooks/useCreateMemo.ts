import { useMutation, UseMutationResult } from 'react-query'
import { memoApi } from '../apis/memo'
import { MemoResponse } from '../types/memo'

type UseCreateMemo = UseMutationResult<MemoResponse, Error>
function useCreateMemo(): UseCreateMemo {
  const mutationResult = useMutation<MemoResponse, Error, any, any>(
    async (params: MemoResponse): Promise<MemoResponse> =>
      await memoApi.create(params),
  )
  return {
    ...mutationResult,
  }
}

export default useCreateMemo
