import style from './Switch.module.css';

export function Equal(props) {
  // クリックでdisplayの文字列を計算して出力
  const handleClick = () => {
    try {
      props.setAnswer(eval(props.display).toLocaleString())
    } catch (e){
      alert(`計算式が正しいか確認してください。\n${e}`);
    }
  };

  return (
    <button className={`${style.btn} ${style.equal}`} onClick={handleClick}>=</button>
  );
}