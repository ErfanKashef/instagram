import React from 'react'

export default function input({type, nameItem, placeholder}) {
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
