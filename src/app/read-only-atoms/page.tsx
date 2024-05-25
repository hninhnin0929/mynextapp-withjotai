"use client";
import { useAtom } from 'jotai'
import { textAtom, uppercase } from '../store'

export default function ReadOnlyAtoms() {
    const [lowercaseText, setLowercaseText] = useAtom(textAtom);
    const [uppercaseText] = useAtom(uppercase);
    const handleChange = (e: { target: { value: string | ((prev: string) => string); }; }) => setLowercaseText(e.target.value);
  return (
    <div className='app'>
      <input value={lowercaseText} onChange={handleChange} />
      <h1>{uppercaseText}</h1>
    </div>

  )
}
