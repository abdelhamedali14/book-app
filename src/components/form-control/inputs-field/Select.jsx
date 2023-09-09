import { Field, ErrorMessage } from "formik";
import { TextError } from "../../TextError";

export const Select = (props) => {
  const { pleaceholder, name, options, type, ...rest } = props;
  return (
    <div className="form-control">
      <Field
        as="select"
        id={name}
        className="select "
        name={name}
        {...rest}
        pleaceholder={pleaceholder}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
