import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import Navbar from './Navbar.jsx'


function Landing() {
  const [displayans, setDisplayans] = useState([]);
  const [result, setResult] = useState([]);
  function handelclike(e){
    const val = e.target.innerText;
    if (val == "AC"){
      setDisplayans('');
      setResult([]);
      return;
    } else if (val == "="){
        let l=[]
        let count = "";
        for(let i=0;i<displayans.length;i++){
            if("1234567890".includes(displayans[i])){
                count += displayans[i];
            }else{
                l.push(Number(count));
                count="";
                l.push(displayans[i])
            }
        }
        l.push(Number(count));
        let finalresult = l[0];
        for(let i=1;i<l.length-1;i+=2){
            if(l[i]=="+"){
                finalresult += l[i+1]
            }else if(l[i]=="-"){
                finalresult -= l[i+1]
            }else if(l[i]=="*"){
                finalresult *= l[i+1]
            }else if(l[i]=="/"){
                if (l[i+1]==0){
                    setDisplayans("Error: Division by zero");
                    setResult("Error: Division by zero");
                    return;
                }
                finalresult /= l[i+1]
            }
            setDisplayans(finalresult)
            setResult(finalresult)
        }
    }
    else if (val == "⌫" || val == "Cross"){
        setDisplayans(displayans.toString().slice(0, -1));
        setResult(pri=> pri.toString().slice(0, -1))
    }
    else {
        let actualChar = val;
        if (val == "×") actualChar = "*";
        if (val == "÷") actualChar = "/";
        setDisplayans(displayans + actualChar);
        setResult(pri=> pri + actualChar)
    }
  }
  const detectkey = (e)=>{
    if (e.key=="Enter"){
        e.preventDefault();
        handelclike({ target: { innerText: "=" } });
    }
    else if(e.key=="Backspace"){
        setDisplayans(displayans.toString().slice(0, -1));
        setResult(pri=> pri.toString().slice(0, -1))
    }
    else if("1234567890+-*/".includes(e.key)){
        setDisplayans(displayans + e.key);
        setResult(pri=> pri + e.key)
    }

  }
  useEffect(()=>{
    document.addEventListener('keydown', detectkey);
    return () => {
      document.removeEventListener('keydown', detectkey);
    };
  }, [displayans]);



  return (
    <div>
      <Navbar />
      <style>{`
        * {
          box-sizing: border-box;
          outline: none;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background-color: #dcdcdc; /* Apple gray canvas background */
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Center container wrapper on the screen */
        .calculator-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 2.5rem 1rem;
        }

        /* High fidelity iPhone container */
        .iphone-container {
          position: relative;
          width: 380px;
          height: 780px;
          background-color: #000000; /* Pure black iphone face */
          border: 12px solid #1c1c1e; /* Space gray physical bezel */
          border-radius: 48px;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(0, 0, 0, 0.05),
            inset 0 0 3px rgba(255, 255, 255, 0.15);
          padding: 40px 18px 24px 18px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          user-select: none;
        }

        /* Physical projecting side buttons */
        .iphone-container::before {
          /* Silent switch */
          content: '';
          position: absolute;
          left: -15px;
          top: 80px;
          width: 3px;
          height: 26px;
          background-color: #a1a1a6;
          border-radius: 3px 0 0 3px;
        }

        /* Volume Projecting buttons */
        .volume-up {
          position: absolute;
          left: -15px;
          top: 130px;
          width: 3px;
          height: 52px;
          background-color: #a1a1a6;
          border-radius: 3px 0 0 3px;
        }

        .volume-down {
          position: absolute;
          left: -15px;
          top: 196px;
          width: 3px;
          height: 52px;
          background-color: #a1a1a6;
          border-radius: 3px 0 0 3px;
        }

        /* Power Projecting button */
        .power-btn {
          position: absolute;
          right: -15px;
          top: 160px;
          width: 3px;
          height: 76px;
          background-color: #a1a1a6;
          border-radius: 0 3px 3px 0;
        }

        /* Large flush display at top-right */
        .box {
          width: 100%;
          background-color: transparent;
          color: #ffffff;
          border: none;
          padding: 0 12px 14px 12px;
          font-size: 4.2rem;
          font-weight: 200;
          text-align: right;
          word-wrap: break-word;
          word-break: break-all;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          min-height: 160px;
          margin-bottom: 8px;
          font-family: 'Inter', sans-serif;
          cursor: default;
          letter-spacing: -0.03em;
        }

        /* Button Grid Layout */
        .borrder {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          width: 100%;
          padding: 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        /* General Apple circular button style */
        .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
        .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          font-size: 1.8rem;
          font-weight: 400;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.15s ease, transform 0.08s ease;
          border: none;
          user-select: none;
          font-family: 'Inter', sans-serif;
          box-shadow: none;
        }

        /* Button press animation scale */
        .one:active, .two:active, .three:active, .four:active, .five:active, 
        .six:active, .seven:active, .eight:active, .nine:active, .Zero:active,
        .plus:active, .sub:active, .multi:active, .divide:active, .cross:active, .AC:active, .ten:active {
          transform: scale(0.92);
        }

        /* Numbers - Dark Gray background */
        .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .Zero {
          background-color: #333333;
          color: #ffffff;
        }

        .one:hover, .two:hover, .three:hover, .four:hover, .five:hover, 
        .six:hover, .seven:hover, .eight:hover, .nine:hover, .Zero:hover {
          background-color: #4a4a4a;
        }

        /* Operators - Vibrant Orange */
        .plus, .sub, .multi, .divide, .ten {
          background-color: #ff9f0a;
          color: #ffffff;
        }

        .plus:hover, .sub:hover, .multi:hover, .divide:hover, .ten:hover {
          background-color: #ffb03a;
        }

        /* Operators active highlight action */
        .plus:active, .sub:active, .multi:active, .divide:active, .ten:active {
          background-color: #ffffff;
          color: #ff9f0a;
        }

        /* Top Action buttons - Light Gray background / Black text */
        .cross, .AC {
          background-color: #a5a5a5;
          color: #000000;
          font-weight: 500;
        }

        .cross:hover, .AC:hover {
          background-color: #c7c7c7;
        }

        /* Pill-shaped 0 button spans 2 columns */
        .Zero {
          grid-column: span 2;
          width: 100%;
          height: 72px;
          border-radius: 36px;
          padding-left: 28px;
          justify-content: flex-start;
        }

        /* Center-aligned responsive scale for smaller desktop heights */
        @media (max-height: 850px) and (min-width: 480px) {
          .iphone-container {
            transform: scale(0.9);
            transform-origin: center;
          }
        }

        @media (max-height: 750px) and (min-width: 480px) {
          .iphone-container {
            transform: scale(0.8);
            transform-origin: center;
          }
        }

        /* Mobile full-viewport styling */
        @media (max-width: 480px) {
          body {
            background-color: #000000;
          }
          .calculator-wrapper {
            padding: 0;
          }
          .iphone-container {
            width: 100vw;
            height: 100vh;
            border: none;
            border-radius: 0;
            box-shadow: none;
            padding: 48px 16px 32px 16px;
          }
          .volume-up, .volume-down, .power-btn, .iphone-container::before {
            display: none; /* Hide switches on pure mobile */
          }
          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .plus, .sub, .multi, .divide, .cross, .AC {
            width: 78px;
            height: 78px;
            font-size: 1.9rem;
          }
          .Zero {
            height: 78px;
            border-radius: 39px;
            padding-left: 30px;
          }
          .box {
            font-size: 4.8rem;
          }
        }

        /* Micro Mobile Devices */
        @media (max-width: 360px) {
          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .plus, .sub, .multi, .divide, .cross, .AC {
            width: 66px;
            height: 66px;
            font-size: 1.6rem;
          }
          .Zero {
            height: 66px;
            border-radius: 33px;
            padding-left: 24px;
          }
          .box {
            font-size: 4.2rem;
            min-height: 130px;
          }
          .borrder {
            gap: 10px;
          }
        }
      `}</style>

      <div className="calculator-wrapper">
        <div className="iphone-container">
          <div className="volume-up"></div>
          <div className="volume-down"></div>
          <div className="power-btn"></div>
          
          <div className="box">
            {displayans.toString().replaceAll('*', '×').replaceAll('/', '÷')}
          </div>
          
          <div className="borrder">
            <button className="AC" onClick={handelclike}>AC</button>
            <button className="cross" onClick={handelclike}>⌫</button>
            <button className="divide" onClick={handelclike}>÷</button>
            <button className="multi" onClick={handelclike}>×</button>

            <button className="seven" onClick={handelclike}>7</button>
            <button className="eight" onClick={handelclike}>8</button>
            <button className="nine" onClick={handelclike}>9</button>
            <button className="sub" onClick={handelclike}>-</button>

            <button className="four" onClick={handelclike}>4</button>
            <button className="five" onClick={handelclike}>5</button>
            <button className="six" onClick={handelclike}>6</button>
            <button className="plus" onClick={handelclike}>+</button>

            <button className="one" onClick={handelclike}>1</button>
            <button className="two" onClick={handelclike}>2</button>
            <button className="three" onClick={handelclike}>3</button>
            <button className="ten" onClick={handelclike}>=</button>

            <button className="Zero" onClick={handelclike}>0</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

