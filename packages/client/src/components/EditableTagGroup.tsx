/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Input, Tag, Tooltip } from 'antd'

interface EditableTagGroupProps {
  tags?: string[]
  getTags: (tags: string[]) => void
}

const styles = {
  tagGroup: css`
    .site-tag-plus {
      background: #fff;
      border-style: dashed;
    }
    .edit-tag {
      user-select: none;
    }
    .tag-input {
      width: 78px;
      margin-right: 8px;
      vertical-align: top;
    }
  `,
}

function EditableTagGroup({
  getTags,
  tags = [],
}: EditableTagGroupProps): ReactElement {
  const [inputVisible, setInputVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [editInputIndex, setEditInputIndex] = useState<number>(-1)
  const [editInputValue, setEditInputValue] = useState<string>('')
  const [currentTags, setCurrentTags] = useState<string[]>(tags)
  const [inputRef, setInputRef] = useState<Input | null>(null)
  const [editInputRef, setEditInputRef] = useState<Input | null>(null)

  const handleClose = (removedTag: string) => {
    const newTags = currentTags.filter((tag) => tag !== removedTag)
    setCurrentTags(newTags)
  }

  const showInput = () => {
    setInputVisible(true)
    inputRef?.focus()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    if (inputValue && currentTags.indexOf(inputValue) === -1) {
      setCurrentTags([...currentTags, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value)
  }

  const handleEditInputConfirm = () => {
    const newTags = [...currentTags]
    newTags[editInputIndex] = editInputValue
    setCurrentTags(newTags)
    setEditInputIndex(-1)
    setEditInputValue('')
  }

  const saveInputRef = (input: Input) => {
    setInputRef(input)
  }

  const saveEditInputRef = (input: Input) => {
    setEditInputRef(input)
  }

  useEffect(() => {
    if (inputVisible) {
      inputRef?.focus()
    }
  }, [inputVisible, inputRef])

  useEffect(() => {
    if (inputVisible) {
      inputRef?.focus()
    }
  }, [inputVisible, inputRef])

  useEffect(() => {
    if (editInputIndex > 0) {
      editInputRef?.focus()
    }
  }, [editInputIndex, editInputRef])

  useEffect(() => {
    getTags(currentTags)
  }, [currentTags, getTags])

  return (
    <div css={styles.tagGroup}>
      {currentTags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={saveEditInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          )
        }

        const isLongTag = tag.length > 20

        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable={true}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                e.preventDefault()
                setEditInputIndex(index)
                setEditInputValue(tag)
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        )
      })}
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </div>
  )
}

export default EditableTagGroup
