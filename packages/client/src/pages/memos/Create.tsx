/** @jsxImportSource @emotion/react */
import React, { ReactElement, useState } from 'react'
import Button from '../../components/Button'
import useInput from '../../hooks/useInputs'
import useCreateMemo from '../../hooks/apis/useCreateMemo'
import { useHistory } from 'react-router-dom'
import useMemoList from '../../hooks/apis/useMemoList'
import AppLayout from '../../components/Layout/AppLayout'
import Editor from '../../components/Editor'
import { css } from '@emotion/react'
import { Col, Input, Row } from 'antd'

const styles = {
  row: css`
    margin-bottom: 12px;
  `,
  editorWrap: css`
    height: 343px;
  `,
}

function Create(): ReactElement {
  const [body, setBody] = useState<string>('')
  const [{ title, tags }, onChange] = useInput({
    title: '',
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
        history.push('/memos')
      }
    })
  }

  const handleCancel = (): void => {
    history.goBack()
  }

  const handleChangeEditor = (value: string) => {
    setBody(value)
  }

  return (
    <AppLayout>
      <Row align="middle" css={styles.row}>
        <Col span={2}>제목</Col>
        <Col span={22}>
          <Input value={title} onChange={onChange} name="title" />
        </Col>
      </Row>

      <Row css={styles.row}>
        <Col span={2}>내용</Col>
        <Col span={22}>
          <div css={styles.editorWrap}>
            <Editor onChange={handleChangeEditor} height="300px" />
          </div>
        </Col>
      </Row>

      <Row align="middle" css={styles.row}>
        <Col span={2}>태그</Col>
        <Col span={22}>
          <Input value={tags} onChange={onChange} name="tags" />
        </Col>
      </Row>

      <div>
        <Button onClick={handleSubmit}>확인</Button>
        <Button onClick={handleCancel}>취소</Button>
      </div>
    </AppLayout>
  )
}

export default Create
