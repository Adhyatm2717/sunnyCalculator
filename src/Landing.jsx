import { useState } from 'react';
import React from 'react'
import Navbar from './Navbar.jsx'


function Landing() {
  const [displayans, setDisplayans] = useState([]);
  const [result, setResult] = useState([]);
  function handelclike(e){
    if (e.target.innerText=="AC"){
      setDisplayans('');
      setResult([]);
      return;
    }else if(e.target.innerText=="="){
        
    }
    
    else if(e.target.innerText=="Cross"){
        let x = [];
        for(let i=0;i<displayans.length-1;i++){
            x.push(displayans[i])
            console.log(displayans[i])
        }
        setDisplayans(x)
        console.log(x)

    }
    else {

        setDisplayans([displayans ]+[ e.target.innerText]);
        setResult(pri=>[pri]+[ e.target.innerText])
        console.log(result)
        console.log(typeof(e.target.innerText),typeof(Number(e.target.innerText)) , Number(e.target.innerText));
        console.log(Number(e.target.innerText)===NaN)
    }
  }





  return (
    <div>
      <Navbar />
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
        }

        /* Main container - Perfect Grid Layout */
        .borrder {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(80px, auto);
          gap: 15px;
          padding: 25px;
          max-width: 600px;
          width: 100%;
          margin: 30px auto;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        /* Display box spans full width */
        .box {
          grid-column: 1 / -1;
          background-color: #1a1a1a;
          color: #fff;
          padding: 25px;
          border-radius: 12px;
          font-size: 36px;
          text-align: right;
          word-wrap: break-word;
          word-break: break-all;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          font-weight: 300;
          letter-spacing: 1px;
          box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
          min-height: 100px;
        }

        /* Base button styles */
        .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
        .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
          border: none;
          border-radius: 12px;
          font-size: 24px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 0;
        }

        /* Number buttons */
        .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .Zero {
          background-color: #ffffff;
          color: #333;
        }

        .one:hover, .two:hover, .three:hover, .four:hover, .five:hover, 
        .six:hover, .seven:hover, .eight:hover, .nine:hover, .Zero:hover {
          background-color: #f0f0f0;
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .one:active, .two:active, .three:active, .four:active, .five:active, 
        .six:active, .seven:active, .eight:active, .nine:active, .Zero:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Operator buttons */
        .plus, .sub, .multi, .divide {
          background-color: #FF9500;
          color: #fff;
          grid-column: span 1;
        }

        .plus:hover, .sub:hover, .multi:hover, .divide:hover {
          background-color: #FF7C00;
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .plus:active, .sub:active, .multi:active, .divide:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Special buttons */
        .cross, .AC {
          background-color: #FF3B30;
          color: #fff;
        }

        .cross:hover, .AC:hover {
          background-color: #FF1744;
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .cross:active, .AC:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Zero button spans 2 columns */
        .Zero {
          grid-column: span 2;
        }

        /* Desktop View (default) */
        @media (min-width: 769px) {
          .borrder {
            max-width: 600px;
            gap: 15px;
            padding: 25px;
            grid-auto-rows: minmax(80px, auto);
          }
        }

        /* Tablet View (769px down to 600px) */
        @media (max-width: 768px) {
          .borrder {
            max-width: 100%;
            gap: 12px;
            padding: 20px;
            margin: 20px auto;
            grid-auto-rows: minmax(75px, auto);
          }

          .box {
            font-size: 30px;
            padding: 20px;
            min-height: 80px;
          }

          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
            font-size: 22px;
          }
        }

        /* Mobile View (600px down to 480px) */
        @media (max-width: 600px) {
          .borrder {
            max-width: 100%;
            gap: 10px;
            padding: 15px;
            margin: 15px auto;
            grid-auto-rows: minmax(70px, auto);
          }

          .box {
            font-size: 28px;
            padding: 15px;
            min-height: 75px;
          }

          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
            font-size: 20px;
          }
        }

        /* Small Mobile View (480px and below) */
        @media (max-width: 480px) {
          .borrder {
            max-width: calc(100% - 16px);
            gap: 8px;
            padding: 12px;
            margin: 10px auto;
            grid-auto-rows: minmax(60px, auto);
          }

          .box {
            font-size: 24px;
            padding: 12px;
            min-height: 65px;
          }

          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
            font-size: 18px;
          }
        }

        /* Extra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .borrder {
            gap: 6px;
            padding: 10px;
            margin: 8px auto;
            grid-auto-rows: minmax(50px, auto);
          }

          .box {
            font-size: 20px;
            padding: 10px;
            min-height: 55px;
          }

          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
            font-size: 14px;
            border-radius: 8px;
          }
        }
      `}</style>
      <div className='borrder'>
        <button className='box'>{displayans}</button>
        <button className='one'
        onClick={(e)=>{
            handelclike(e)
            console.log(e)
        }}
        >1</button>
        <button className='two'
        onClick={(e)=>{
            handelclike(e)
        }}
        >2</button>
        <button className='three'
        onClick={(e)=>{
            handelclike(e)
        }}
        >3</button>
        <button className='four'
        onClick={(e)=>{
            handelclike(e)
        }}
        >4</button>
        <button className='five'
        onClick={(e)=>{
            handelclike(e)
        }}
        >5</button>
        <button className='six'
        onClick={(e)=>{
            handelclike(e)
        }}
        >6</button>
        <button className='seven'
        onClick={(e)=>{
            handelclike(e)
        }}
        >7</button>
        <button className='eight'
        onClick={(e)=>{
            handelclike(e)
        }}
        >8</button>
        <button className='nine'
        onClick={(e)=>{
            handelclike(e)
        }}
        >9</button>
        <button className='ten'
        onClick={(e)=>{
            handelclike(e)
        }}
        >=</button>
        <button className='plus'
        onClick={(e)=>{
            handelclike(e)
        }}
        >+</button>
        <button className='sub'
        onClick={(e)=>{
            handelclike(e)
        }}
        >-</button>
        <button className='multi'
        onClick={(e)=>{
            handelclike(e)
        }}
        >*</button>
        <button className='divide'
        onClick={(e)=>{
            handelclike(e)
        }}
        >/</button>
        <button className='cross'
        onClick={(e)=>{
            handelclike(e)
        }}
        >Cross</button>
        <button className='AC'
        onClick={(e)=>{
            handelclike(e)
        }}
        >AC</button>
        <button className='Zero'
        onClick={(e)=>{
            handelclike(e)
        }}
        >0</button>
      </div>
    </div>
  );
}

export default Landing;

