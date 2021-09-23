import React, { PropsWithChildren, ReactElement } from 'react'

function List({ children }: PropsWithChildren<{}>): ReactElement {
  return <div>{children}</div>
}

export default List
