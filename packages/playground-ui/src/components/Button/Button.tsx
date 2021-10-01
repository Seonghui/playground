/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { COLORS } from '../../styles/colors'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 안의 내용 */
  children: ReactNode
  variant?: 'primary' | 'default' | 'text' | 'link'
  icon?: ReactNode
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  block?: boolean
  shape?: 'default' | 'circle' | 'round'
}

const Styled = {
  button: styled.button<ButtonProps>`
    ${({ block }) =>
      block &&
      css`
        width: 100%;
      `}
  `,
  iconWrap: styled.div`
    display: inline-block;
    > svg {
      width: 1rem;
      padding-right: 0.5rem;
    }
  `,
}

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  background-color: transparent;
  border: none;
  outline: 0;
`

const variants = {
  primary: css`
    background-color: ${COLORS.blue_6};
    color: ${COLORS.white};
    &:hover,
    &:focus {
      background-color: ${COLORS.blue_5};
    }
    &:active {
      background-color: ${COLORS.blue_7};
    }
    &:disabled {
      cursor: not-allowed;
      border: 1px solid ${COLORS.gray_3};
      background-color: ${COLORS.white};
      color: ${COLORS.gray_6};
    }
  `,
  default: css`
    background-color: ${COLORS.white};
    border: 1px solid #d9d9d9;
    &:hover,
    &:focus {
      color: ${COLORS.blue_5};
      border-color: ${COLORS.blue_5};
    }
    &:active {
      color: ${COLORS.blue_7};
      border-color: ${COLORS.blue_7};
    }
    &:disabled {
      cursor: not-allowed;
      border: 1px solid ${COLORS.gray_3};
      background-color: ${COLORS.white};
      color: ${COLORS.gray_6};
    }
  `,
  text: css`
    color: ${COLORS.black};
    &:disabled {
      cursor: not-allowed;
      color: ${COLORS.gray_6};
    }
  `,
  link: css`
    color: ${COLORS.blue_6};
    &:hover,
    &:focus {
      color: ${COLORS.blue_5};
    }
    &:active {
      color: ${COLORS.blue_7};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${COLORS.gray_6};
    }
  `,
}

const sizes = {
  small: css`
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 2px;
  `,
  default: css`
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
  `,
  large: css`
    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
    border-radius: 2px;
  `,
}

const shapes = {
  default: css``,
  circle: css`
    border-radius: 50%;
  `,
  round: css`
    border-radius: 16px;
  `,
}

const iconOnlyStyle = css`
  padding: 0;
  svg {
    margin: 0;
    padding: 0;
  }
`

const iconOnlySizes = {
  small: css`
    width: 24px;
  `,
  default: css`
    width: 32px;
  `,
  large: css`
    width: 40px;
  `,
}

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({
  variant = 'primary',
  size = 'default',
  shape = 'default',
  icon,
  children,
  ...props
}: ButtonProps) => {
  const iconOnly = !children
  return (
    <Styled.button
      css={[
        style,
        variants[variant],
        sizes[size],
        shapes[shape],
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      {...props}
    >
      <Styled.iconWrap>{icon && icon}</Styled.iconWrap>
      {children}
    </Styled.button>
  )
}

export default Button
