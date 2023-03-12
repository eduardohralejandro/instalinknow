import { useState } from 'react'

import { useAddLinkMutation } from '../../services/docs'

const InputAddLink = () => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [link, setLink] = useState<string>('')
  const [addLink] = useAddLinkMutation()

  const handleLink = async (e: any) => {
    const data = {
      title,
      body,
      link,
      image: '',
    }

    await addLink(data)
  }
  return (
    <div>
      <input
        onChange={(e: any) => setLink(e.target.value)}
        type="text"
        placeholder="add link"
      />
      <input
        onChange={(e: any) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
      />
      <textarea
        onChange={(e: any) => setBody(e.target.value)}
        placeholder="Optional description"
      ></textarea>
      <button onClick={handleLink}>add link</button>
    </div>
  )
}

export default InputAddLink
