import axios from "axios";
import { useEffect, useState } from "react";
export default function Child({ setParentData }) {
  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setParentData(data));
  };
  return (
    <>
      <button onClick={getData}>Button click</button>
    </>
  );
}
