import React,{useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount(previousCount => previousCount + 2);
  const decrement2 = () => setCount(previousCount => previousCount - 2);
  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const treple = () => setCount(count % 3 === 0 ? count / 3 : count)

  return (
    <>
      <div>count:{count}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={increment2}>++</button>
        <button onClick={decrement2}>--</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>*2</button>
        <button onClick={treple}>3の倍数の時だけ3で割る</button>
      </div>
      
    </>
  );
}

export default App;
