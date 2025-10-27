import React, { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  //   function to increment count
  const increment = () => setCount((prev) => prev + 1);
  //   function to decrement count
  const decrement = () => setCount((prev) => prev - 1);

  // The render prop receives a function to render the UI based on the count
  return render({ count, increment, decrement });
};

export default Counter;
