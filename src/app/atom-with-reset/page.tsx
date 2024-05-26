"use client";

import { useAtom } from "jotai";
import { resetCounter } from "../store";
import { useResetAtom } from "jotai/utils";

export default function AtomWithReset() {
    const [count, setCount] = useAtom(resetCounter);
    const reset = useResetAtom(resetCounter);

    const inc = () => setCount(c => c*2);

  return (
    <div className="counter">
      <p className="util">1. atomWithReset</p>
      <p>{count}</p>
      <div>
        <button onClick={inc}>Inc</button>
        <button onClick={reset}>Reset Count</button>
      </div>
    </div>
  )
}
