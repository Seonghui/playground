/** @jsxImportSource @emotion/react */
import React, { ReactElement, useEffect, useState } from 'react'
import useMemoList from '../../hooks/apis/useMemoList'
import Loading from '../../components/Loading'
import { Link, useHistory } from 'react-router-dom'
import { Button, Table } from 'antd'
import { MemoResponse } from '../../types/memo'
import AppLayout from '../../components/Layout/AppLayout'
import useQueryString from '../../hooks/useQueryString'
import { pageMemoCreate } from '../../routes/memo'
import { css } from '@emotion/react'
import { format } from 'date-fns'

const styles = {
  bottom: css`
    position: relative;
  `,
  addButton: css`
    position: absolute;
    bottom: 16px;
    right: 0;
  `,
}

function Memo(): ReactElement {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading } = useMemoList(currentPage)
  const queryString = useQueryString()

  const columns = [
    {
      title: '번호',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record: MemoResponse) => (
        <Link to={`/memos/${record.id}`}>{title}</Link>
      ),
    },
    {
      title: '작성일',
      dataIndex: 'date',
      key: 'date',
      width: 200,
      render: (title: string) => {
        return title && <span>{format(new Date(title), 'yyyy.MM.dd')}</span>
      },
    },
  ]

  const handleClickAddMemo = (): void => {
    history.push(pageMemoCreate.path)
  }

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
      <div css={styles.bottom}>
        <Table
          columns={columns}
          dataSource={data?.memos}
          rowKey="id"
          pagination={{
            defaultCurrent: 1,
            current: currentPage,
            total: data?.total,
            defaultPageSize: 5,
            onChange: handleChangePagination,
            position: ['bottomCenter'],
          }}
        />
        <Button onClick={handleClickAddMemo} css={styles.addButton}>
          메모 추가
        </Button>
      </div>
    </AppLayout>
  )
}

export default Memo
