
import { Field, ErrorMessage } from 'formik'
import DateView from 'react-datepicker'
import { TextError } from '../../TextError'
import 'react-datepicker/dist/react-datepicker.css'



export const DatePicker = (props) => {
    const {pleaceholder,  name, ...rest } = props
return (
    <div className='form-control'>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              pleaceholder={pleaceholder}
              selected={value}
              onChange={val => setFieldValue(name, val)}
              maxDate={new Date()}
            />
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

