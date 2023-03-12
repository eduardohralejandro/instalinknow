import React from 'react'

interface ILinkElementProps {
  data: {
    id: number
    title: string
    body: string
    image: string
    link: string
  }
}

const LinkElement: React.FC<ILinkElementProps> = (data) => {
  return (
    <div>
      <h1>{data.data.title}</h1>
      <p>{data.data.link}</p>
      <img src={data.data.image} alt={data.data.title} />
    </div>
  )
}

export default LinkElement
