import { useState } from 'react';
import { Switch } from '../Switch';
import { Equal } from '../Switch/equal';
import style from './Calculator.module.css';

// ただ文字列を追加するだけのボタンはまとめる
const NUMBERS = ["(",")","%","1","2","3","4","5","6","7","8","9","0","."];
const SIGNS = ["+","×","-","÷"]


export function Calculator() {
  // 計算式表示state
  const [display, setDisplay] = useState("");
  // 答え出力state
  const [answer, setAnswer] = useState();


  return (
    <div className={style.container}>
      <p>計算式</p>
      <div className={style.calcWrapper}>
        {display}
      </div>
      <p>答え</p>
      <div className={style.calcWrapper}>
        {answer}
      </div>
      <div className={style.btnDisplayWrapper}>
        <div className={style.numGrid}>
          {NUMBERS.map((number) => {
            return (
              <Switch num={number} display={display} setDisplay={setDisplay} key={number}/>
            );
          })}
          <Equal display={display} setAnswer={setAnswer}/>
        </div>
        <div className={style.signGrid}>
          {SIGNS.map((sign) => {
            return (
              <Switch num={sign} display={display} setDisplay={setDisplay} key={sign} type="sign"/>
            );
          })}
        </div>
      </div>
    </div>
  );
}