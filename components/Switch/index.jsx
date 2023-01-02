import style from './Switch.module.css';

export function Switch(props) {
  // クリックで数や演算子を文字列に追加
  const handleClick = () => {
    props.setDisplay(props.display + props.num)
  };

  return (
    <button className={style.btn} onClick={handleClick}>{props.num}</button>
  );
}