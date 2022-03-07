import './Colorizer.css';

import {useState} from 'react';
import userEvent from '@testing-library/user-event';

const Colorizer = () => {
  const [color, setColor] = useState('#6d0e0e');

  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  };

  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

  const changeColor = () => {
    const randomColor = getRandomColor();
    console.log(randomColor);
    setColor(randomColor);

    // setCounter(counter + 3) // use below code if previous is need use this
    setCounter((prev) => prev + 3);
  };

  const prevColor = () => {
    setCounter((prev) => prev - 3);
  };

  return (
    <div className="colorizer">
      <div className="box" style={{backgroundColor: color}}>
        {color}
        <div>{counter}</div>
      </div>
      <div>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={prevColor}>Deduct</button>
      </div>
    </div>
  );
};

export default Colorizer;
