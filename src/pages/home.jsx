import React, { useState } from 'react';
import Background from '../components/Background';
import { styled } from 'styled-components';
import Header from '../components/Header';


export default function Home() {
    const [emailValue, setEmailValue] = useState({ email: "" })
    return (

        <Container>
            <Background />
            <div className='bg-home absolute top-0 w-full h-screen'>
                <div className="w-full">
                    <Header />
                    <div className="flex flex-col items-center gap-4 text-white mt-[10.5rem]">
                        <h1 className='sm:text-5xl text-3xl font-bold'>Unlimited movies, TV shows, and more</h1>
                        <h2 className="text-2xl font-normal">Watch anywhere. Cancel anytime.</h2>
                        <h4 className="text-2xl font-normal">Ready to watch? Enter your email to create or restart your membership.</h4>
                        <form action="#" method="post">
                            <input type="email" className='text-white bg-transparent' placeholder='Email address' value={emailValue.email}
                                onChange={(e) => {
                                    setEmailValue({ ...emailValue, email: e.target.value })
                                }
                                } />
                            <button type="button">Get Started</button>
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
`;
