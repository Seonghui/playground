import { useMutation, UseMutationResult } from 'react-query'
import { memoApi } from '../../apis/memo'
import { Memo, MemoResponse } from '../../types/memo'

type UseUpdateMemo = UseMutationResult<Memo, Error>
function useUpdateMemo(): UseUpdateMemo {
  const mutationResult = useMutation<Memo, Error, any, any>(
    async (params: MemoResponse): Promise<MemoResponse> =>
      await memoApi.update(params),
  )
  return {
    ...mutationResult,
  }
}

export default useUpdateMemo
