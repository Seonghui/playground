import React, { ReactElement } from 'react'
import useMemoList from '../hooks/useMemoList'
import Loading from '../components/Loading'
import { Link, useHistory } from 'react-router-dom'
import { List, Button } from 'antd'
import { MemoResponse } from '../types/memo'
import AppLayout from '../components/Layout/AppLayout'

function Memo(): ReactElement {
  const history = useHistory()
  const { data, isLoading } = useMemoList()

  if (isLoading) {
    return <Loading />
  }

  const handleClickAddMemo = (): void => {
    history.push('/memo/create')
  }

  const renderMemoList = (item: MemoResponse) => (
    <List.Item>
      <Link to={`/memo/${item.id}`}>
        <div>{item.title}</div>
        <div>{item.date}</div>
      </Link>
    </List.Item>
  )

  return (
    <AppLayout>
      <List
        header={
          <div>
            제목 <Button onClick={handleClickAddMemo}>메모 추가</Button>
          </div>
        }
        dataSource={data}
        renderItem={(item) => renderMemoList(item)}
      />
    </AppLayout>
  )
}

export default Memo
