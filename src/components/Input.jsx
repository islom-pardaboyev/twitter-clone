import React from 'react'

function Input({placeholder, type, name, extraStyle, isRuquired}) {
  return (
    <input required={isRuquired} placeholder={placeholder} type={type} name={name} className={`w-full py-[23px] focus:shadow-md duration-300 px-[20px] border border-slate-500 text-[18px] outline-none rounded-md ${extraStyle}`}/>
  )
}

export default Input