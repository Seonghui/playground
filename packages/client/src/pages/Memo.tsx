import React, { ReactElement, useEffect, useState } from 'react'
import useMemoList from '../hooks/apis/useMemoList'
import Loading from '../components/Loading'
import { Link, useHistory } from 'react-router-dom'
import { List, Button, Pagination } from 'antd'
import { MemoResponse } from '../types/memo'
import AppLayout from '../components/Layout/AppLayout'
import useQueryString from '../hooks/useQueryString'

function Memo(): ReactElement {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading } = useMemoList(currentPage)
  const queryString = useQueryString()

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

  const handleChangePagination = (page: number): void => {
    setCurrentPage(page)
    history.push(`${history.location.pathname}?page=${page}`)
  }

  useEffect(() => {
    if (!queryString.page) {
      setCurrentPage(1)
    } else {
      setCurrentPage(Number(queryString.page))
    }
  }, [queryString.page])

  if (isLoading) {
    return <Loading />
  }

  return (
    <AppLayout>
      <List
        header={
          <div>
            제목 <Button onClick={handleClickAddMemo}>메모 추가</Button>
          </div>
        }
        dataSource={data?.memos}
        renderItem={(item) => renderMemoList(item)}
      />
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={data?.total}
        defaultPageSize={5}
        onChange={handleChangePagination}
      />
    </AppLayout>
  )
}

export default Memo
