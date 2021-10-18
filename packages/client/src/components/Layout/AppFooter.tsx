import { ReactElement } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

function AppFooter(): ReactElement {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  )
}

export default AppFooter
