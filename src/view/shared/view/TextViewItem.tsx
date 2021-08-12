import PropTypes from "prop-types";
function TextViewItem(props) {
  if (!props.value && props.value !== 0 && props.value !== false) {
    return null;
  }
  const { value } = props;
  return (
    <div className='from-group'>
      <label>{props.label}</label>
      <input
        type='text'
        className='form-control-plaintext'
        readOnly
        value={value}
      />
    </div>
  );
}

TextViewItem.prototype = {
  value: PropTypes.string,
  label: PropTypes.string,
};
export default TextViewItem;
