"use client";

import { Provider, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { birthAtom, nameAtom, personAtom } from "../store";

export default function SelectAtom() {
  return (
    <div className="selectAtom">
      <p className="util">2. selectAtom</p>
      <Provider>
        <DisplayName />
        <DisplayBirthday />
        <div className="btn-grp">
            <SwapNames />
            <CopyPerson />
            <IncrementBirthYear />
        </div>
      </Provider>
    </div>
  )
}
const useCommitCount = () => {
    const rerenderCountRef = useRef(0);
    useEffect(() => {
        rerenderCountRef.current += 1;
    });
    return rerenderCountRef.current;
};
// Rerenders when nameAtom changes.
const DisplayName = () => {
    const [name] = useAtom(nameAtom);
    const n = useCommitCount();
    return (
        <div>
            Name: {name.first} {name.last}: re-rendered {n} times
        </div>
    );
}
// Re-renders when birthAtom changes
const DisplayBirthday = () => {
    const [birth] = useAtom(birthAtom);
    const n = useCommitCount();
    return (
        <div>
            Birthday:
            {birth.month}/{birth.day}/{birth.year}: (re-rendered {n} times)
        </div>
    );
}
// Swap first and last names, triggering a change in nameAtom, but
// not in birthAtom.
const SwapNames = () => {
    const [person, setPerson] = useAtom(personAtom);
    const handleChange = () => {
        setPerson({
            ...person,
            name: {first: person.name.last, last: person.name.first}
        });
    };
    return <button onClick={handleChange}>Swap names</button>
};
// Replace person with a deep copy, triggering a change in nameAtom, but
// not in birthAtom.
const CopyPerson = () => {
    const [person, setPerson] = useAtom(personAtom);
    const handleClick = () => {
        setPerson({
            name: {first: person.name.first, last: person.name.last},
            birth: {
                year: person.birth.year,
                month: person.birth.month,
                day: person.birth.day,
                time: {
                    hour: person.birth.time.hour,
                    minute: person.birth.time.minute
                }
            }
        });
    };
    return <button onClick={handleClick}>Replace person with a deep copy</button>
}
// Changes birth year, triggering a change to birthAtom, but not nameAtom.
const IncrementBirthYear = () => {
    const [person, setPerson] = useAtom(personAtom);
    const handleClick = () => {
        setPerson({
            name: person.name,
            birth: {...person.birth, year: person.birth.year + 1}
        })
    };
    return <button onClick={handleClick}>Increment birth year</button>
};