/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { MemoParamType } from '../../types/router'
import useMemoItem from '../../hooks/apis/useMemoItem'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import useDeleteMemo from '../../hooks/apis/useDeleteMemo'
import useMemoList from '../../hooks/apis/useMemoList'
import AppLayout from '../../components/Layout/AppLayout'
import { Button, Divider, Space, Tag, Typography } from 'antd'
import { css } from '@emotion/react'

const styles = {
  tagWrap: css`
    display: flex;
    justify-content: start;
    align-items: center;
    padding-top: 12px;
  `,
  tagList: css`
    padding-left: 8px;
  `,
  buttonWrap: css`
    display: flex;
    justify-content: end;
  `,
}

function MemoItem(): ReactElement {
  const { id } = useParams<MemoParamType>()
  const { mutate } = useDeleteMemo()
  const history = useHistory()
  const { refetch } = useMemoList()
  const { Title, Text } = Typography

  const { data, isLoading, error } = useMemoItem(id ?? '')

  const handleClickDelete = async (): Promise<void> => {
    mutate(id)
    await refetch().then((result) => {
      if (result.status === 'success') {
        history.push('/memos')
      }
    })
  }

  const handleClickEdit = (): void => {
    history.push(`/memos/${id}/edit`)
  }

  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  if (!id) {
    return <Error />
  }

  return (
    <AppLayout>
      <Title level={2}>{data?.title}</Title>
      <Divider />
      <div>{data?.body}</div>
      <div css={styles.tagWrap}>
        <Text type="secondary">태그</Text>
        <div css={styles.tagList}>
          {data?.tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>
          })}
        </div>
      </div>
      <div css={styles.buttonWrap}>
        <Space size={8}>
          <Button onClick={handleClickEdit}>수정</Button>
          <Button onClick={handleClickDelete}>삭제</Button>
        </Space>
      </div>
    </AppLayout>
  )
}

export default MemoItem
