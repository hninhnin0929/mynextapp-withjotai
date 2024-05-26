"use client";

import { useAtom } from "jotai";
import { asyncAtom } from "../store";
import { Suspense } from "react";



export default function AsyncReadAtoms() {
    
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <AsyncComponent />
    </Suspense>
  )
}

function AsyncComponent() {
    const [asyncCount] = useAtom(asyncAtom);
    return (
        <div className="app">
            <h1>{asyncCount}</h1>
        </div>
    )
}