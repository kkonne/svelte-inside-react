import { useLayoutEffect, useRef, useState } from "react";
import Hello from "./components/Hello.svelte";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const svelteRef = useRef();

  useLayoutEffect(() => {
    while (svelteRef.current?.firstChild)
      svelteRef.current?.firstChild.remove();

    new Hello({
      target: svelteRef.current,
    });
  }, []);

  return (
    <>
      <div ref={svelteRef}></div>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
