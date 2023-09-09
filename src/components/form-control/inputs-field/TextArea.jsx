
import { Field, ErrorMessage } from 'formik'
import { TextError } from '../../TextError'
export const TextArea =(props)=> {
    const {pleaceholder,  name, ...rest } = props
    return (
      <div className='form-control text-area'>
        <Field as='textarea' id={name} name={name} {...rest} pleaceholder={pleaceholder} className=' text-area'/>
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
  }