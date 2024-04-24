'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import {useState} from 'react'

export default function FaqAccordion({question, children, value}: {question: string, children: React.ReactNode, value: string}) {
    const [isPressed, setIsPressed] = useState(false)
    const handleClick = () => {
        setIsPressed(!isPressed)
    }

    return(
        <Accordion type="single" collapsible>
          <AccordionItem value={value}>
            <AccordionTrigger aria-pressed={isPressed} onClick={() => handleClick()} className="bg-slate-950 text-white rounded-xl aria-pressed:rounded-bl-none aria-pressed:rounded-br-none px-5">{question}</AccordionTrigger>
            <AccordionContent className="bg-white p-5 rounded-bl-xl rounded-br-xl">
              {children}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    )
}