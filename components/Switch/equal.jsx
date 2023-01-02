import style from './Switch.module.css';

export function Equal(props) {
  // クリックでdisplayの文字列を計算して出力
  const handleClick = () => {
    console.log(eval(props.display));
    props.setAnswer(eval(props.display))
  };

  return (
    <button className={`${style.btn} ${style.equal}`} onClick={handleClick}>=</button>
  );
}