import React, { useId } from 'react'

const Select = ({
    label,
    options,
    className = '',
    ...props
}, ref) => {
    const id = useId()
  return (
    <div className="w-full">
        {label && <label htmlFor={id} className='mb-1 inline-block '>{label}</label>}
        <select ref={ref} name={label} id={id} className={` border border-gray-200 ${className}`} {...props}>
            {options?.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Select)