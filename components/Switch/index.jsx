import style from './Switch.module.css';


export function Switch(props) {
  const handleClick = () => {
    props.setDisplay(props.num)
  };

  return (
    <button className={style.btn} onClick={handleClick}>{props.num}</button>
  );
}