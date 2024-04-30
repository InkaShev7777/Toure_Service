import React from 'react'
import { Header } from '../components/Header'
import { useEffect } from 'react';

export const CareerGuidance = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <h1>CareerGuidance</h1>
        </div>
    )
}
