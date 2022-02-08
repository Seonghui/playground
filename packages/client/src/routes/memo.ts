import { RouteProps } from 'react-router-dom'
import Memo from '../pages/memos/Memo'
import Create from '../pages/memos/Create'
import Edit from '../pages/memos/Edit'
import MemoItem from '../pages/memos/MemoItem'

interface CustomRouteProps extends RouteProps {
  path: string
}

export const pageMemoMain: CustomRouteProps = {
  path: '/memos' as string,
  exact: true,
  component: Memo,
}

export const pageMemoCreate: CustomRouteProps = {
  path: '/memos/create' as string,
  exact: true,
  component: Create,
}

export const pageMemoEdit: CustomRouteProps = {
  path: '/memos/:id/edit' as string,
  exact: true,
  component: Edit,
}
export const pageMemoItem: CustomRouteProps = {
  path: '/memos/:id' as string,
  exact: true,
  component: MemoItem,
}
export const memoRouteMap = [
  pageMemoMain,
  pageMemoCreate,
  pageMemoEdit,
  pageMemoItem,
]
