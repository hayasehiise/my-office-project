'use client'
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@components/ui/accordion";
import {useState} from 'react'

export default function FaqAccordion({question, children, value}: {question: string, children: React.ReactNode, value: string}) {
    const [isPressed, setIsPressed] = useState(false)
    const handleClick = () => {
        setIsPressed(!isPressed)
    }

    return(
          <AccordionItem value={value} className="mb-3">
            <AccordionTrigger aria-pressed={isPressed} onClick={() => handleClick()} className="bg-slate-950 text-white text-left rounded-xl aria-pressed:rounded-bl-none aria-pressed:rounded-br-none px-5">{question}</AccordionTrigger>
            <AccordionContent className="bg-white p-5 rounded-bl-xl rounded-br-xl text-left">
              {children}
            </AccordionContent>
          </AccordionItem>
    )
}