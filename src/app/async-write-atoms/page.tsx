"use client";
import { useAtom } from "jotai";
import { asyncWriteAtom, counter1 } from "../store";
import { Suspense } from "react";

export default function AsyncWriteAtoms() {
  return (
    <div>
      <AsyncComponent />
      <Suspense />
    </div>
  )
}

function AsyncComponent() {
    const [count] = useAtom(counter1);
    const [, incCounter] = useAtom(asyncWriteAtom);
    return(
        <div className="app">
            <h1>{count}</h1>
            <button onClick={incCounter}>inc</button>
        </div>
    )
}