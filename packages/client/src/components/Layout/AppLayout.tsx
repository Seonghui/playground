import { PropsWithChildren, ReactElement } from 'react'
import { Layout } from 'antd'
import AppSider from './AppSider'
import AppFooter from './AppFooter'

const { Header, Content } = Layout

function AppLayout({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: 'white' }}
        />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 240, backgroundColor: 'white' }}
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
