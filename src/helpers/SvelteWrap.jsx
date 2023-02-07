import { useRef, useLayoutEffect } from "react";

export const SvelteWrapper = (Component) => {
  return (props) => {
    const svelteRef = useRef();

    useLayoutEffect(() => {
      while (svelteRef.current?.firstChild)
        svelteRef.current?.firstChild.remove();

      new Component({
        target: svelteRef.current,
        props,
      });
    }, []);

    return <div ref={svelteRef}></div>;
  };
};
