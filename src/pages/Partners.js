import React from 'react'
import { Header } from '../components/Header'
import { useEffect } from 'react';
export const Partners = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <h1>Partners</h1>
            <div id='about'>
                <h1>Not Work!!!</h1>
            </div>
        </div>
    )
}
