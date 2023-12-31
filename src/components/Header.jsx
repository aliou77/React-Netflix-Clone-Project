import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between items-center m-6">
                <div>
                    <a href="/"><img className='w-[148px]' src={logo} alt="logo Netflix" /></a>
                </div>
                <div>
                    <span onClick={() => navigate("/login")} className="cursor-pointer font-bold text-white text-sm px-4 py-2 bg-main_color rounded-md">
                        Sign In
                    </span>
                </div>
            </div>
        </div>
    )
}
