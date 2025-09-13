import React from 'react'

export default function Input({type, nameItem, placeholder, classname, onChange, value}) {
    return (
    <div>
        <input
            type={type}
            name={nameItem}
            placeholder={placeholder}
            className={classname}
            onChange={onChange}
            value={value}
            required
        />
    </div>
)
}
