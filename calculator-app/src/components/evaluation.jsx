import { useState } from "react";

function EvaluateExpression() {

  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(0);

  function handleButtonClick(value) {
    const newExpr = expression + value;
    setExpression(newExpr)

    const newResut = evaluateExpression(newExpr);
    if (newResut !== '') setResult(newResut)
  };

  function handleClear() {
    setExpression('')
    setResult(o)
  }
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="max-w-sm mx-auto p-4 bg-gray-950 rounded-3xl shadow-2xl flex items-center justify-center">

          <div className="bg-black text-white p-4 rounded-md mb-2 text-right text-xl font-mono">
            {expression}
          </div>

          <div className="bg-black p-4 rounded-full mb-3 text-right text-xl font-mono">
            {result}
          </div>



          {/* buttons */}
          <div className="grid grid-cols-4 gap-4">
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('4')}>4</button>

            {/* operations */}
            <button onClick={() => handleButtonClick('+')}>+</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
            <button onClick={() => handleButtonClick('*')}>*</button>
            <button onClick={() => handleButtonClick('/')}>/</button>

            {/* clear button  */}
            <button className="text-white rounded-full" onClick={handleClear}>C</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EvaluateExpression;