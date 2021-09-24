/** @jsxImportSource @emotion/react */
import React from 'react'
import Button from './Button'

export default {
  title: 'components/Button',
  component: Button,
  args: {
    block: false,
    disabled: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    block: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const primaryButton = (args) => {
  return (
    <Button variant="primary" {...args}>
      Primary Button
    </Button>
  )
}

primaryButton.args = {
  size: 'default',
  variant: 'primary',
}

export const defaultButton = (args) => {
  return (
    <Button variant="default" {...args}>
      Default button
    </Button>
  )
}

defaultButton.args = { size: 'default', variant: 'default' }

export const textButton = (args) => {
  return (
    <Button variant="text" {...args}>
      Default button
    </Button>
  )
}

textButton.args = { size: 'default', variant: 'text' }

export const linkButton = (args) => {
  return (
    <Button variant="link" {...args}>
      Default button
    </Button>
  )
}

linkButton.args = { size: 'default', variant: 'link' }
