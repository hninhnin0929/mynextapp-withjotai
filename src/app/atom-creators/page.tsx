"use client";

import { useAtom } from "jotai";
import { barAtom, barIncAtom, fooAtom, fooIncAtom } from "../store";

export default function AtomCreators() {
    const [fooCount] = useAtom(fooAtom);
    const [, incFoo] = useAtom(fooIncAtom);
    const [barCount] = useAtom(barAtom);
    const [, incBar] = useAtom(barIncAtom);
    

    const onClick1 = () => {
        incFoo();
      };
      
      const onClick2 = () => {
        incBar()
      }
    

      return (
        <div>
          <h1>Atom Creators</h1>
          <div>
            <h2>Foo Count: {fooCount}</h2>
            <button onClick={onClick1}>Increment Foo</button>
          </div>
          <div>
            <h2>Bar Count: {barCount}</h2>
            <button onClick={onClick2}>Increment Bar</button>
          </div>
        </div>
      );
      
}
