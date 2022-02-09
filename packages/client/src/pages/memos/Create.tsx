/** @jsxImportSource @emotion/react */
import React, { ReactElement, useState } from 'react'
import useInput from '../../hooks/useInputs'
import useCreateMemo from '../../hooks/apis/useCreateMemo'
import { useHistory } from 'react-router-dom'
import useMemoList from '../../hooks/apis/useMemoList'
import AppLayout from '../../components/Layout/AppLayout'
import Editor from '../../components/Editor'
import { css } from '@emotion/react'
import { Button, Col, Input, Row, Space } from 'antd'
import EditableTagGroup from '../../components/EditableTagGroup'

const styles = {
  row: css`
    margin-bottom: 12px;
  `,
  editorWrap: css`
    height: 343px;
  `,
  buttonWrap: css`
    display: flex;
    justify-content: end;
  `,
}

function Create(): ReactElement {
  const [tags, setTags] = useState<string[]>([])
  const [body, setBody] = useState<string>('')
  const [{ title }, onChange] = useInput({
    title: '',
  })

  const { refetch } = useMemoList()
  const history = useHistory()
  const { mutate } = useCreateMemo()

  const handleSubmit = async (): Promise<void> => {
    mutate({ title, body, tags })
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
          <EditableTagGroup getTags={(tags) => setTags(tags)} />
        </Col>
      </Row>

      <div css={styles.buttonWrap}>
        <Space size={8}>
          <Button onClick={handleSubmit} type="primary">
            확인
          </Button>
          <Button onClick={handleCancel}>취소</Button>
        </Space>
      </div>
    </AppLayout>
  )
}

export default Create
