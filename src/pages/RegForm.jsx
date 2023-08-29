import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import logo from '../assets/logo.svg'
import jQuery from "jquery";

const $ = jQuery;

$('#regform .form-item').each((i, item) => {
    $(item).find('input').on('focusin', function () {
        $(this).prev().addClass('active')
    })
    $(item).find('input').on('focusout', function () {
        if ($(this).val() === '') {
            $(this).prev().removeClass('active')
        }
    })
})

// 
const checkFrom = () => {


    return true;
}



export default function RegForm(props) {
    const navigate = useNavigate()
    const [stateValue, setStateValue] = useState({
        email: "",
        password: ""
    })

    function handleSubmitForm(e) {
        e.preventDefault()
        // verify if inputs are correctelly filled up before sedding data to the firebase api.
        checkFrom()
        console.log(stateValue);
    }

    return (
        <Container>
            <div className="header">
                <div>
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
                        <div>
                            <a href="/"><img className='w-[165px]' src={logo} alt="logo Netflix" /></a>
                        </div>
                        <div>
                            <span onClick={() => navigate(props.login ? "/login" : "/signup")} className="cursor-pointer font-bold text-lg text-[#333] hover:border-b border-[#333]">
                                {props.login ? "Log In" : "Sign In"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form text-[#333] max-w-[440px] w-full sm:mx-auto mx-6">
                <h1 className='font-bold sm:text-[32px] text-2xl mt-12 mb-4 leading-[2.5rem]'>Create a password to start your membership</h1>
                <p className='text-lg mt-[10px] leading-[20px] mb-4'>Just one more step and you're done!
                    We hate paperwork, too.</p>
                <form action="#" onSubmit={handleSubmitForm} id='regform' method="post" className='w-full flex flex-col gap-3'>
                    <div className="form-item relative">
                        <label htmlFor="email" className='absolute top-3 ps-4 text-lg cursor-text'>Email</label>
                        <input type="email" aria-autocomplete='true' required id='email' name='email' className='input-form'
                            onChange={(e) => {
                                setStateValue({ ...stateValue.email, email: e.target.value })
                            }}
                            value={stateValue.email} />
                    </div>
                    <div className="form-item relative">
                        <label htmlFor="password" className='absolute top-3 ps-4 text-lg cursor-text'>Add a Password</label>
                        <input type="password" required id='password' name='password' className='input-form' onChange={(e) => {
                            setStateValue({ ...stateValue, password: e.target.value })
                        }} value={stateValue.password} />
                    </div>
                    <div className="item">
                        <input type="checkbox" className='me-3' id='check' />
                        <label htmlFor="check" className="font-semibold">Please do not email me Netflix special offers.</label>
                    </div>
                    <button type='submit' className='px-[48px] py-[20px] mt-4 bg-main_color text-white font-semibold sm:text-[22px] text-xl rounded-[5px]'>Sign Up</button>
                </form>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
`;