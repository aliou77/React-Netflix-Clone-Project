import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../assets/logo.svg'
import jQuery from 'jquery';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useReloadCode } from '../utils/functions';
const $ = jQuery;

const codeJq = () => {
    // ce code sera reexecuter, reselectionner les elements et appliquer le code jQuery
    $(document).ready(() => {

        $('#login-form .form-item').each((i, item) => {
            let input = $(item).find('input')
            if (input.val() !== '') {
                input.prev().addClass('active')
            }
            input.on('focusin', function () {
                $(this).prev().addClass('active')
            })
            input.on('focusout', function () {
                if ($(this).val() === '') {
                    $(this).prev().removeClass('active')
                }
            })
        });
    })
}



const Login = () => {
    const [stateValue, setStateValue] = useState({
        email: '',
        password: ''
    })

    async function handleFormLogin(e) {
        e.preventDefault()
        const { email, password } = stateValue
        // checking connexion to the firebase database
        await signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((resp) => {
                window.location.href = '/'
            })
            .catch((er) => {
                var message = '';
                if (er.toString().match('auth/user-not-found')) {
                    message = "Sorry, User not found. Please try again or create a new account."
                } else if (er.toString().match('wrong-password')) {
                    message = 'Invalid credentials, please try again !';
                } else if (er.toString().match('auth/too-many-requests')) {
                    message = "Too many attempts, your account has been temporarily disabled. Try again later !";
                }
                $('#error-login').text(message).fadeIn(0)
            })
    }

    // ce hook reexecutera la function a chaque changement d'etat d'un element de React
    useReloadCode(codeJq)

    return (
        <Container>
            <Background></Background>
            <div className="bg-gradient absolute top-0 w-full h-[110vh] desktop-width">
                <div className="flex justify-between items-center m-6">
                    <div>
                        <a href="/"><img className='w-[148px]' src={logo} alt="logo Netflix" /></a>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="form-login text-white max-w-[28rem] w-full sm:mx-auto mx-6 mb-16">
                    <h1 className='font-bold sm:text-[32px] text-2xl mb-5 leading-[2.5rem]'>Sign In</h1>
                    <div id="error-login" className="hidden mb-[10px] text-main_color text-center"></div>

                    <form action="#" onSubmit={handleFormLogin} id='login-form' method="post" className='text-[#333] w-full flex flex-col gap-3'>
                        <div className="form-item relative">
                            <label htmlFor="email" className='active absolute top-3 ps-4 text-lg cursor-text text-[#8c8c8c]'>Email or Phone numer</label>
                            <input type="email" aria-autocomplete='email' autoFocus required id='email' name='email' className='input-form bg-[#333] !text-[#8c8c8c]'
                                value={stateValue.email || ''}
                                onChange={(e) => {
                                    setStateValue({ ...stateValue.email, email: e.target.value })
                                }}
                            />
                        </div>
                        <div className="form-item relative">
                            <label htmlFor="password" className='absolute top-3 ps-4 text-lg cursor-text text-[#8c8c8c]'>Password</label>
                            <input type="password" required id='password' name='password' className='input-form bg-[#333] !text-[#8c8c8c]'
                                value={stateValue.password}
                                onChange={(e) => {
                                    setStateValue({ ...stateValue, password: e.target.value })
                                }} />
                        </div>
                        <button type='submit' className='px-[48px] py-[10px] mt-4 bg-main_color text-white font-semibold sm:text-[20px] text-xl rounded-[5px]'>Sign Up</button>
                        <div className="item flex items-center gap-[5px]">
                            <input type="checkbox" className='' id='check' />
                            <label htmlFor="check" className="font-semibold text-[#b3b3b3] text-sm">Remember me</label>
                        </div>
                    </form>
                    <div className="w-full text-[#8c8c8c] mt-4">
                        <p>New to Netflix? <a href="/signup" className='text-white hover:underline'>Sign up now.</a></p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    .form-login{
        background-color: #000000bf;
        padding: 2.5rem 4rem 4rem ;
        border-radius: 5px;
    }
`;