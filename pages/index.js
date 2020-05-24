import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Calculator from '../components/Calculator';

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>React Calculator App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Calculator />
        </div>
    );
}
