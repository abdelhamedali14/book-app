
import { Field, ErrorMessage } from "formik";
import { TextError } from '../../TextError'

export const FileUpload = ({ name, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>Upload Book Cover</label>{" "}
      <Field name={name}>
        {({ field, form }) => (
          <input
            multiple={true}
            type="file"
            onChange={(event) => {
              form.setFieldValue(name, event.currentTarget.files);
            }}
            {...props}
          />
        )}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};