import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Display from '../components/Display';
import {evaluate} from 'mathjs';

export default function Home() {
    const [displayValue, setDisplayValue] = useState('');
    const numPadClickFn = (value) => {
        if(displayValue !== 'Error')
        setDisplayValue(displayValue.concat(value));
    }
    const clearClickFn = (value) => setDisplayValue('');
    const operClickFn = (value) => {
        if(displayValue.length > 0 && displayValue !== 'Error') {
            let str = displayValue;
            if(['+', '-', '*', '/'].includes(str[str.length-1])) {
                str = str.slice(0, str.length-1);
            }
            setDisplayValue(str.concat(value));
        }
    }
    const backClickFn = (value) => {
        if(displayValue === 'Error') {
            setDisplayValue('');
        } else if(displayValue.length > 0) {
            let str = displayValue;
            str = str.slice(0, str.length-1);
            setDisplayValue(str);
        }
    };
    const openParClickFn = (value) => {
            let str = displayValue;
            if((displayValue.length === 0 || ['+', '-', '*', '/'].includes(str[str.length-1])) && displayValue !== 'Error') {
                setDisplayValue(str.concat(value));
            }
    }
    const closeParClickFn = (value) => {
        let str = displayValue;
        if((displayValue.length !== 0 || ['+', '-', '*', '/'].includes(str[str.length-1])) && displayValue !== 'Error') {
            setDisplayValue(str.concat(value));
        }
    }
    const decClickFn = (value) => {
        let str = displayValue;
        if(str.length>0){
            if(['+', '-', '*', '/'].includes(str[str.length-1])){
                setDisplayValue(displayValue.concat('0.'));
            } else {
                setDisplayValue(displayValue.concat(value));
            }
        } else {
            setDisplayValue('0.');
        }
    }
    const getResults = (value) => {
        try {
            setDisplayValue(evaluate(displayValue).toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    }

    return (
        <div className="container">
            <Head>
                <title>React Calculator App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="calc">
                <Display
                    value={displayValue}
                />
                <div className="row">
                    <Button value="back" className="btn btn-secondary" clickFunction={backClickFn}/>
                    <Button value="(" className="btn btn-secondary" clickFunction={openParClickFn}/>
                    <Button value=")" className="btn btn-secondary" clickFunction={closeParClickFn}/>
                    <Button value="+" className="btn btn-secondary" clickFunction={operClickFn}/>
                </div>
                <div className="row">
                    <Button value="7" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="8" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="9" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="-" className="btn btn-secondary" clickFunction={operClickFn}/>
                </div>
                <div className="row">
                    <Button value="4" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="5" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="6" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="*" className="btn btn-secondary" clickFunction={operClickFn}/>
                </div>
                <div className="row">
                    <Button value="1" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="2" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="3" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="/" className="btn btn-secondary" clickFunction={operClickFn}/>
                </div>
                <div className="row">
                    <Button value="." className="btn" clickFunction={decClickFn}/>
                    <Button value="0" className="btn" clickFunction={numPadClickFn}/>
                    <Button value="C" className="btn btn-danger" clickFunction={clearClickFn}/>
                    <Button value="=" className="btn btn-primary" clickFunction={getResults}/>
                </div>
            </div>

        </div>
    );
}
