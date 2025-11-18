import React, { forwardRef, useId } from 'react'

const Input = forwardRef(({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) => {
    const id = useId()
  return (
    <div className='w-full'>
       {label &&  <label htmlFor={id} className='inline-block mb-1 pl-1'></label>
       }
<input ref={ref} type={type} className={`border border-gray-200 rounded-md outline-none ${className}`} {...props}/>
    </div>
  )
})

export default Input