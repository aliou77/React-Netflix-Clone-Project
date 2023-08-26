import React, { useState } from 'react';
import Background from '../components/Background';
import { styled } from 'styled-components';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

window.onclick = (event) => {
    if (document.querySelector('#form-home input')) {
        if (event.target.matches('#form-home input') != true) {
            document.querySelector('#form-home input').placeholder = 'Email address'
            document.querySelector('#form-home input').style.paddingTop = '0'
            document.querySelector('#form-home span').style.display = 'none'
        }
    }

}

export default function Home() {
    const [emailValue, setEmailValue] = useState({ email: "" })
    const navigate = useNavigate()
    const animePlaceholder = (e) => {
        e.target.placeholder = ''
        e.target.style.paddingTop = '7px'
        document.querySelector('#form-home span').style.display = 'block'
    }

    const handleSubmitEmail = (e) => {
        e.preventDefault()
        navigate('/signup/regform')
    }
    return (

        <Container>
            <Background />
            <div className='bg-home absolute top-0 w-full h-screen desktop-width'>
                <div className="w-full sm:mx-0 px-[20px]">
                    <Header />
                    <div className="flex flex-col items-center gap-4 text-white mt-[10.5rem] tracking-tighter">
                        <h1 className='text-center sm:text-5xl text-3xl font-extrabold'>Unlimited movies, TV shows, and more</h1>
                        <h2 className="text-center sm:text-2xl text-xl font-semibold">Watch anywhere. Cancel anytime.</h2>
                        <h4 className="text-center sm:text-2xl text-xl font-normal">Ready to watch? Enter your email to create or restart your membership.</h4>
                        <form onSubmit={handleSubmitEmail} action="#" id="form-home" method="post" className='flex sm:gap-2 gap-6 sm:flex-row flex-col items-center sm:max-w-[40rem] w-full mx-auto'>
                            <div className="item relative w-full">
                                <span className='hidden text-sm absolute left-[12px] top-0 text-[#ffffffb3] font-semibold'>Email address</span>
                                <input type="email" autoComplete='email' required className='text-white input-home' placeholder='Email address' value={emailValue.email}
                                    onChange={(e) => {
                                        setEmailValue({ ...emailValue, email: e.target.value })
                                    }
                                    } onFocus={animePlaceholder} />
                            </div>
                            <button className='bg-main_color sm:text-2xl text-xl h-[3.5rem] text-white font-semibold rounded-md min-w-[11.5rem]' type="submit">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>

    );
};

const Container = styled.div`
    .bg-home{
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
  }
  @media screen and (min-width: 1440px){
    .desktop-width{
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }
  }
`;
