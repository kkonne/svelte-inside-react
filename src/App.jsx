import Header from "./components/Header.svelte";
import Counter from "./components/Counter.svelte";
import { SvelteWrapper } from "./helpers/SvelteWrap";
import useStore from "./store/store";
import { login } from "./services/auth";
import "./App.css";

const HeaderComponent = SvelteWrapper(Header);
const CounterComponent = SvelteWrapper(Counter);

function App() {
  const { count, increment } = useStore();

  return (
    <>
      <HeaderComponent
        brandName="Dev Pub"
        brandLogo="🍻🍻🍻"
        handleLoginClick={login}
      />

      <div className="container my-5">
        <button
          type="button"
          tabIndex={0}
          onClick={increment}
          className="btn btn--default mb-4"
        >
          count is {count}
        </button>

        <CounterComponent />
      </div>
    </>
  );
}

export default App;
