import './Input.css';

import {InputHTMLAttributes} from "react";

export interface CustomInputProps extends InputHTMLAttributes<HTMLElement> {
}

const Input = (props: CustomInputProps) => {
    return <input className='custom__input'
                  type='text'
                  {...props}/>;
}

export default Input;