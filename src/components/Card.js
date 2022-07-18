import './Card.css';

function Card({className}) {
  const classes = 'card ' + className;
  
  return <div className={classes}></div>;
}

export default Card;