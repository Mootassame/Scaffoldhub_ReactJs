import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import FormErrors from "src/view/shared/form/formErrors";

function InputFormItem(props) {
  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();
  const {
    label,
    name,
    hint,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    disabled,
    endAdornment,
    externalErrorMessage,
  } = props;

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage
  );
  return (
    <div className='form-group'>
      <div className='mb-3'>
        {Boolean(label) && (
          <label className={`col-form-label ${required ? "required" : null}`}>
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          ref={register}
          id={name}
          onChange={(event) => {
            props.onChange && props.onChange(event.target.value);
          }}
          placeholder={placeholder || undefined}
          autoComplete={autoComplete || undefined}
          disabled={disabled}
          className={`form-control ${errorMessage ? "is-invalid" : ""}
            `}
        />
        <div className='invalid-feedback'>{errorMessage}</div>
      </div>
    </div>
  );
}

InputFormItem.defaultProps = {
  type: "text",
  required: false,
};
InputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.any,
  autoFocus: PropTypes.any,
  externalErrorMessage: PropTypes.string,
};
export default InputFormItem;
