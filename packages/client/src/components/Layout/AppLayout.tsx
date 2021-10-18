import { PropsWithChildren, ReactElement } from 'react'
import { Layout } from 'antd'
import AppSider from './AppSider'
import AppFooter from './AppFooter'

const { Content } = Layout

function AppLayout({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, backgroundColor: 'white' }}
          >
            {children}
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  )
}

export default AppLayout
