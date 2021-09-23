/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ButtonHTMLAttributes } from 'react'
import { colors } from '../../styles/colors'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 안의 내용 */
  children: React.ReactNode
  theme?: 'primary' | 'default' | 'text' | 'link'
}

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({ children, theme = 'primary', ...props }: ButtonProps) => {
  return (
    <button css={[style, themes[theme]]} {...props}>
      {children}
    </button>
  )
}

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`

const themes = {
  primary: css`
    background-color: ${colors.primary};
  `,
  default: css``,
  text: css``,
  link: css``,
}

export default Button
