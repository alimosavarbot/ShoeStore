// In the name of ALLAH!
// Mahdi Salehi

import { ErrorMessage, Field } from "formik"


interface Props {
  name: string
  labelText: string
  className?: string
}

function InputText({ name, labelText, className = "w-fit" } : Props) {
  return (
    <div className={`flex flex-col relative my-14 ${className}`}>
      <Field
        name={name}
        type="text"
        className={`outline-none border-b-2 border-black border-opacity-60 px-2 pb-1 pt-2 text-lg
          peer z-10 bg-transparent
          `}
        placeholder=""
      />
      <label
        htmlFor={name}
        className="text-xl opacity-60 float-label"
      >{labelText}</label>
      <ErrorMessage
        name={name}
        component="span"
        className="text-sm text-rose-600 my-2"
      />
    </div>
  )
}

export default InputText