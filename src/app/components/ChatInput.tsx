'use client'

import { FormEvent, useState } from "react"

type Props = {}

const ChatInput = (props: Props) => {
  const [input , setInput] = useState('')
  const formSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
e.preventDefault()
if(!input) return;
const chatMessage = input;
setInput('')
console.log(chatMessage)  
console.log(input)

}
  return (
<form onSubmit={formSubmitHandler} className='sticky bottom-0 z-50 flex w-full px-7 py-5 space-x-2 border-t border-gray-100'>
  <input value={input} onChange={e=>setInput(e.target.value)} type='text' className='flex-1  rounded border border-gray-300 focus:ring-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500 focus:border-transparent'/>
  <button disabled={!input} type='submit' className='text-white bg-blue-500 hover:bg-blue-700 font-bold  p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed' >Send</button>
</form>
  )
}

export default ChatInput