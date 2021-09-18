import React, { InputHTMLAttributes, ReactElement } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
function Input({ ...props }: InputProps): ReactElement {
  return <input {...props} />
}

export default Input
