import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'

const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" }
]
export default function Navbar({ isScrolled }) {
    const [showSearch, setShowSearch] = useState(false)
    const handleClick = (e) => {
        setShowSearch(true)
        // focus on the input when icon search clicked
        document.getElementById('input-search').focus();
    }
    return (
        <Container>
            <nav className='w-full'>
                <div className={`${isScrolled ? "bg-black" : ""} fixed top-0 w-full content-nav flex text-white p-[25px] z-50`}>
                    <div className="left flex gap-12 items-center w-full">
                        <div className="img">
                            <a href="/"><img src={logo} className='w-[140px]' alt="logo netflix" /></a>
                        </div>
                        <ul className="flex gap-4 font-semibold text-lg">
                            {
                                links.map(({ name, link }) => {
                                    return (<li key={name} title={name}><Link to={link}>{name}</Link></li>);
                                })
                            }
                        </ul>
                    </div>
                    <div className="right flex gap-4 justify-end items-center w-full">

                        <div className='flex items-center gap-3 '>
                            <span onClick={handleClick} title='Search'>
                                <FaSearch className='text-[20px] cursor-pointer' />
                            </span>
                            <input
                                id="input-search"
                                type="text" placeholder='Search'
                                className={`${showSearch ? 'block' : 'hidden'} ps-[5px] outline-none rounded-md h-[35px] bg-[#4f4e4ede]`}
                                onBlur={() => setShowSearch(false)}
                            />
                        </div>
                        <div>
                            <span onClick={() => signOut(firebaseAuth)} title='Sign Out'>
                                <FaSignOutAlt className='text-[20px] cursor-pointer' />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

const Container = styled.div`

`;