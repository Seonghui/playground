/** @jsxImportSource @emotion/react */
import React, { ReactElement, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { css } from '@emotion/react'

interface EditorProps {
  onChange: (value: string) => void
  height?: string
}

const styles = {
  editor: (height: string) => css`
    height: ${height};
  `,
}

function Editor({ onChange, height = 'auto' }: EditorProps): ReactElement {
  const [value, setValue] = useState<string>('')

  const handleChange = (value: string) => {
    setValue(value)
  }

  useEffect(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      css={styles.editor(height)}
    />
  )
}

export default Editor
