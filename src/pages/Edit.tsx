import React, { ReactElement } from 'react'
import useInput from '../hooks/useInputs'
import useMemoList from '../hooks/useMemoList'
import { useHistory, useParams } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import { MemoParamType } from '../types/router'
import Error from '../components/Error'
import useMemoItem from '../hooks/useMemoItem'
import { MemoInput } from '../types/memo'
import useUpdateMemo from '../hooks/useUpdateMemo'

function Edit(): ReactElement {
  const { id } = useParams<MemoParamType>()
  if (!id) {
    return <Error />
  }
  const { data } = useMemoItem(id)
  if (!data) {
    return <Error />
  }
  const [{ title, body, tags }, onChange] = useInput<MemoInput>({
    title: data.title,
    body: data.body,
    tags: data.tags.toString(),
  })

  const { refetch } = useMemoList()
  const history = useHistory()
  const { mutate } = useUpdateMemo()

  const handleSubmit = async (): Promise<void> => {
    const tagArray = tags.split(',')
    mutate({ id, title, body, tags: tagArray })
    await refetch().then((result) => {
      if (result.status === 'success') {
        history.push(`/memo/${id}`)
      }
    })
  }

  const handleCancel = (): void => {
    history.goBack()
  }
  return (
    <div>
      <div>
        제목
        <Input value={title} onChange={onChange} name="title" />
      </div>
      <div>
        내용
        <Input value={body} onChange={onChange} name="body" />
      </div>
      <div>
        태그
        <Input value={tags} onChange={onChange} name="tags" />
      </div>
      <div>
        <Button onClick={handleSubmit}>확인</Button>
        <Button onClick={handleCancel}>취소</Button>
      </div>
    </div>
  )
}

export default Edit
