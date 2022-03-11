import React from 'react'

type Props = {
  label: string
}

const Text = ({ label }: Props) => {
  return (
    <p>{label}</p>
  )
}

export default Text