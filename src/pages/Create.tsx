import React, { ReactElement } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import useInput from '../hooks/useInputs'
import useCreateMemo from '../hooks/useCreateMemo'
import { useHistory } from 'react-router-dom'
import useMemoList from '../hooks/useMemoList'

function Create(): ReactElement {
  const [{ title, body, tags }, onChange] = useInput({
    title: '',
    body: '',
    tags: '',
  })
  const { refetch } = useMemoList()
  const history = useHistory()
  const { mutate } = useCreateMemo()

  const handleSubmit = async (): Promise<void> => {
    const tagArray = tags.split(',')
    mutate({ title, body, tags: tagArray })
    await refetch().then((result) => {
      if (result.status === 'success') {
        history.push('/memo')
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

export default Create
