// In the name of ALLAH!
// Mahdi Salehi

import { useState } from "react"
import { FAQTYPE } from "./FAQ"

interface Props {
  FAQObj: FAQTYPE
  index: number
}

function Accordion({ FAQObj, index } : Props) {

  const [isOpen, setIsOpen] = useState(false)

  const { question, answer } = FAQObj

  return (
    <div className="accordion border rounded-[30px] border-black my-3 py-10 px-14">
      <input type="checkbox" id={`accordion-${index}`} className="accordion-toggle" />
      <label
        htmlFor={`accordion-${index}`}
        onClick={() => setTimeout(() => setIsOpen(!isOpen), 100)}
        className="accordion-title bg-transparent border-b-0 p-0 text-[32px] text-black font-normal flex flex-row"
      >
        <span>{question}</span>
        <span className="ms-auto text-[#001A72] text-[50px] font-thin">{(isOpen)? "-" : "+"}</span>
      </label>
      <div className={`accordion-content pe-24 flex-row ${isOpen? "flex" : ""}`} style={{ borderBottom: 0 }}>
        <div className="min-h-0 relative">
          <span className="border-[#6361CFD9] rounded-full border-[5px] absolute h-full" />
          <p className="text-justify text-[24px] text-[#000000B0] font-medium ms-6">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion