'use client'
type Props = {}

const Logout = (props: Props) => {
  return (
    <div onClick={()=>console.log('Hello')} className='text-white bg-blue-400 hover:bg-blue-700 font-bold  px-2 py-4 rounded cursor-pointer'>Log Out</div>
  )
}

export default Logout