import { ReactElement } from 'react'
import { Layout, Menu } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'

const { Sider } = Layout

function AppSider(): ReactElement {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
          Memo
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default AppSider
