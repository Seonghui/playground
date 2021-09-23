import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({
  children,
  ...props
}: PropsWithChildren<ButtonProps>): ReactElement {
  return <button {...props}>{children}</button>
}

export default Button
