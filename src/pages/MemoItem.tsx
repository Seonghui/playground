import React, { ReactElement } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { MemoParamType } from '../types/router'
import useMemoItem from '../hooks/useMemoItem'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Button from '../components/Button'
import useDeleteMemo from '../hooks/useDeleteMemo'
import useMemoList from '../hooks/useMemoList'

function MemoItem(): ReactElement {
  const { id } = useParams<MemoParamType>()
  const { mutate } = useDeleteMemo()
  const history = useHistory()
  const { refetch } = useMemoList()
  if (!id) {
    return <Error />
  }
  const { data, isLoading, error } = useMemoItem(id)
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const handleClickDelete = async (): Promise<void> => {
    mutate(id)
    await refetch().then((result) => {
      if (result.status === 'success') {
        history.push('/memo')
      }
    })
  }

  const handleClickEdit = (): void => {
    history.push(`/memo/${id}/edit`)
  }

  return (
    <div>
      <div>{data?.title}</div>
      <div>{data?.body}</div>
      <div>{data?.tags.toString()}</div>
      <Button onClick={handleClickEdit}>수정</Button>
      <Button onClick={handleClickDelete}>삭제</Button>
    </div>
  )
}

export default MemoItem
