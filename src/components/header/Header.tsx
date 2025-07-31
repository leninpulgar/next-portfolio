import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="w-full p-8">
        <nav className="flex justify-end space-x-8 text-lg">
          <Link href="/" className="hover:underline">home</Link>
          <Link href="/work" className="hover:underline">work</Link>
          {/* <Link href="/awards" className="hover:underline">awards</Link> */}
          <Link href="/contact" className="hover:underline">contact</Link>
        </nav>
    </header>
  )
}

export default Header
