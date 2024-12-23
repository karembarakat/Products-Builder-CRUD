import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({ ...rest}: IProps) => {
    return (

        <input 
        type="text" 
        name="" 
        id="" 
        className='border border-gray-300 shadow-md
        focus:border-indigo-500 focus:outline-none focus:ring-1
        focus:ring-indigo-500 rounded-md p-3 text-md
        ' {...rest}/>
    )
}

export default Input 