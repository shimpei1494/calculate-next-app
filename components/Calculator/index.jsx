import { useState } from 'react';
import { Switch } from '../Switch';
import style from './Calculator.module.css';

const NUMBERS = [1,2,3,4,5,6,7,8,9,0];


export function Calculator() {
  const [display, setDisplay] = useState();
  return (
    <div>
      <h4>計算用コンポーネント</h4>
      <p>{display}</p>
      <div className={style.numGrid}>
        {NUMBERS.map((number) => {
          return (
            <Switch num={number} setDisplay={setDisplay} key={number}/>
          );
        })}
      </div>
    </div>
  );
}