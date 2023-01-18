import './Button.css'
import {ButtonHTMLAttributes} from "react";
import {PlusCircle} from "phosphor-react";

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = (props: CustomButtonProps) => {
    return <button
        className='custom__button'
        {...props}>
        <PlusCircle size={24}></PlusCircle>
    </button>
}

export default Button;