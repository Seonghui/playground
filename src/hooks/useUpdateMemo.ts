import { useMutation, UseMutationResult } from 'react-query'
import { memoApi } from '../apis/memo'
import { Memo } from '../types/memo'

type UseUpdateMemo = UseMutationResult<Memo, Error>
function useUpdateMemo(): UseUpdateMemo {
  const mutationResult = useMutation<Memo, Error, any, any>(
    async (params: Memo): Promise<Memo> => await memoApi.update(params),
  )
  return {
    ...mutationResult,
  }
}

export default useUpdateMemo
