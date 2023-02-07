import { useLayoutEffect, useRef, useState } from "react";
import Header from "./components/Header.svelte";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const svelteRef = useRef();

  useLayoutEffect(() => {
    while (svelteRef.current?.firstChild)
      svelteRef.current?.firstChild.remove();

    new Header({
      target: svelteRef.current,
      props: {
        brandName: "Dev Pub",
        brandLogo: "🍻🍻🍻",
        handleLoginClick: () => alert("Got click from Svelte header!")
      }
    });
  }, []);

  return (
    <>
      <div ref={svelteRef}></div>

      <div className="container my-5">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn btn--default"
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
