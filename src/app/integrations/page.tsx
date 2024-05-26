"use client";

import { useAtom } from "jotai";
import { immerAtom } from "../store";

export default function Integrations() {
    const [todoAtom, setAtomTodo] = useAtom(immerAtom);
    const updateTodo = () => {
        setAtomTodo(state => {
            state.todo.person.title.goal = "new title";
            return state;
        });
    }
  return (
    <div>
      <h3>Name: {todoAtom.todo.person.name}</h3>
      <p>Todo: {todoAtom.todo.person.title.goal}</p>
      <button onClick={updateTodo}>Update Todo</button>
    </div>
  )
}
