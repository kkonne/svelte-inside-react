import { useState } from "react";
import Header from "./components/Header.svelte";
import { SvelteWrapper } from "./helpers/SvelteWrap";
import "./App.css";

const HeaderComponent = SvelteWrapper(Header);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderComponent brandName="Dev Pub" brandLogo="🍻🍻🍻" />

      <div className="container my-5">
        <button
          type="button"
          tabIndex={0}
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
