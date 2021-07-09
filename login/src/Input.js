import React from 'react';
import './input.css'

const Input = ({label, placeholder}) => {
    return (
        <div class="signin">
            <label htmlfor="email">{label}</label><br/>
            <input type="text" placeholder={placeholder} id="email" name="email"/><br/>
        </div>
    )
}

export default Input