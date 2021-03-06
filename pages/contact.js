import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <div className="page-container">
            <Head>
                <title>React Calculator App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="title page-title">React Calculator App</h1>

            <div className="text-box">
                <p>
                    This project has been developed with React and NextJs by <a href="mailto:miguel.acosta1978@gmail.com">Miguel Acosta</a>. You can access the source code in <a href="https://github.com/Mik3Dev/react-calculator" target="blank">Github</a>.
                </p>
            </div>
            <div className="text-box">
                <p>
                The react calculator project has three components, the Calculator, Display and Button components. The function of the Display component is to render the inputs of the user and the results. The function of the Button component is to handle the input from the user.
The idea behind the app is to generate a algebraic expression in the showed in the Display component to be evaluated with the mathjs library.
                </p>
            </div>
            <div className="flex justify-around">
                <img src="/react.svg" alt="react logo" className="image"/>
                <img src="/nextjs.png" alt="next logo" className="image"/>
            </div>
            

            <div className="flex justify-center">
                <Link href="/">
                    <a className="rounded-btn center">Back</a>
                </Link>
            </div>
        </div>
    );
}