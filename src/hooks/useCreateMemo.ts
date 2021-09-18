import { useMutation, UseMutationResult } from 'react-query'
import { memoApi } from '../apis/memo'
import { Memo, MemoInput } from '../types/memo'

type UseCreateMemo = UseMutationResult<Memo, Error>
function useCreateMemo(): UseCreateMemo {
  const mutationResult = useMutation<Memo, Error, any, any>(
    async (params: MemoInput): Promise<Memo> => await memoApi.create(params),
  )
  return {
    ...mutationResult,
  }
}

export default useCreateMemo
