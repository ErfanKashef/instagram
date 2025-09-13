import React from 'react'

export default function Input({type, nameItem, placeholder, classname}) {
    return (
    <div>
        <input
            type={type}
            name={nameItem}
            placeholder={placeholder}
            className={classname}
            required
        />
    </div>
)
}
