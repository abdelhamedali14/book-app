
import {
    Field,
    ErrorMessage,
} from 'formik'
import { TextError } from '../../TextError'
import "./inputs-style.scss"


export const Input = (props) => {
    const { label, name,type,pleaceholder, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name}  type={type} pleaceholder={pleaceholder} {...rest} />
            <ErrorMessage component={TextError} name ={name} />
        </div>
    )
}
