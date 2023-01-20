import './Button.css'
import {ButtonHTMLAttributes} from "react";
import {PlusCircle} from "phosphor-react";

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    description: string
}

const Button = (props: CustomButtonProps) => {
    return <button
        className='custom__button'
        {...props}>
        <span>{props.description}</span>
        <PlusCircle></PlusCircle>
    </button>
}

export default Button;