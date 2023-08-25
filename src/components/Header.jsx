import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between items-center m-6">
                <div>
                    <img className='w-[148px]' src={logo} alt="logo Netflix" />
                </div>
                <div>
                    <span onClick={() => navigate(props.login ? "/login" : "/signup")} className="cursor-pointer font-bold text-white text-sm px-4 py-2 bg-main_color rounded-md">
                        {props.login ? "Log In" : "Sign In"}
                    </span>
                </div>
            </div>
        </div>
    )
}
