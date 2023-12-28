import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='py-5 mb-2'>
        <div className='container flex justify-between px-10 mx-auto'>
            <Link href="/">
                <h1>Next Mongo</h1>
            </Link>

        <ul className='flex gap-x-4'>
            <li>
                <Link href="/tasks/new">New Task</Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default NavBar