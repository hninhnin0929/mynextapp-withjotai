"use client";
import { useAtom } from "jotai";
import { dotsAtom, handleMouseDownAtom, handleMouseMoveAtom, handleMouseUpAtom } from "../store";

export default function page() {
  return (
    <div>
      <SvgRoot />
    </div>
  )
}

const SvgDots = () => {
    const [dots] = useAtom(dotsAtom);
    return (
        <g>
            {
                dots.map(([x,y], index) => (
                    <circle cx={x} cy={y} r="2" fill="#aaa" key={index} />
                ))
            }
        </g>
    );
}

const SvgRoot = () => {
    const [, handleMouseUp] = useAtom(
      handleMouseUpAtom
    );
    const [, handleMouseDown] = useAtom(
      handleMouseDownAtom
    );
    const [, handleMouseMove] = useAtom(
      handleMouseMoveAtom
    );
    return (
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 100vw 100vh"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={(e) => {
          handleMouseMove([e.clientX, e.clientY]);
        }}
      >
        <rect width="100vw" height="100vh" fill="#eee" />
        <SvgDots />
      </svg>
    );
  };
  