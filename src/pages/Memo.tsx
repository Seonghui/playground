import React, { ReactElement } from 'react'
import useMemoList from '../hooks/useMemoList'
import ListItem from '../components/ListItem'
import List from '../components/List'
import Loading from '../components/Loading'
import generateKey from '../utils/generateKey'
import { Link, useHistory } from 'react-router-dom'
import Button from '../components/Button'

function Memo(): ReactElement {
  const history = useHistory()
  const { data, isLoading } = useMemoList()

  if (isLoading) {
    return <Loading />
  }

  const handleClickAddMemo = (): void => {
    history.push('/memo/create')
  }

  const renderMemoList = data?.map((item, index) => (
    <ListItem key={generateKey(item.title, index)}>
      <Link to={`/memo/${item.id}`}>{item.title}</Link>
    </ListItem>
  ))
  return (
    <div>
      <List>{renderMemoList}</List>
      <Button onClick={handleClickAddMemo}>메모 추가</Button>
    </div>
  )
}

export default Memo
