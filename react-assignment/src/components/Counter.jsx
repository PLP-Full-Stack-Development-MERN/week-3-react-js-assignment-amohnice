import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
      <p className="text-3xl text-gray-900 mb-4">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-200"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
