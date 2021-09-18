import React, { PropsWithChildren, ReactElement } from 'react'

function ListItem({ children }: PropsWithChildren<{}>): ReactElement {
  return <div>{children}</div>
}

export default ListItem
