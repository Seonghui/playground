/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Icon, { iconTypes } from './Icon'

export default {
  component: Icon,
  title: 'components/Icon',
  args: {},
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: iconTypes,
      },
    },
  },
}

export const defaultIcon = (args) => <Icon icon="close" {...args} />
defaultIcon.args = {
  icon: 'close',
  color: '#000000',
  size: '24px',
}

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`

export const listOfIcons = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  )
}
