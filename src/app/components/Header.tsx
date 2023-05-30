import Image from 'next/image';
import Link from 'next/link'
import {BsMeta} from 'react-icons/bs'
import Logout from './Logout';

type Props = {}

const Header = (props: Props) => {
    const session = false;

    if( session){
        return(
            <header className='sticky top-0 z-50 bg-white shadow-sm flex justify-between items-center p-6 '>
              <div className='flex items-center justify-center space-x-3'>

                <div>
                <Image src='https://pbs.twimg.com/profile_images/1634229831000027136/SGHVSziK_400x400.jpg' className='rounded-full w-14 h-14' width={300} height={300} alt='User Image'/> 
                </div>
                <div>
                    <h1 className='text-blue-400'>Logged in as:</h1>
                    <p className="font-bold text-3xl">Abhishek</p>
                </div>
              </div>
               <Logout />

                </header>
        )
    }
    
  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm flex justify-center items-center p-6 '>

    <div className='flex flex-col items-center space-y-5'>

    <div className='flex items-center space-x-2 '>
        <BsMeta className='text-blue-400' size={30} />
        <p className='uppercase text-blue-400'>Welcome to Meta Messanger</p>
    </div>
    <Link href='/auth/signin' className='text-white bg-blue-400 hover:bg-blue-700 font-bold  px-2 py-4 rounded'>Sign In</Link>
    </div>
    </header>
  )
}

export default Header