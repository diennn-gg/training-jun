function InputGroup(props) {
  const { name, type, values, errors, touched, handleChange} = props;
  return (
    <div className="form-group">
      <span>{name}</span>
      <input
        className={`form-input ${errors && touched ? "input-error": ""}`}
        type={type}
        name={name}
        value={values}
        onChange={handleChange}
      />
      {errors && touched && (
        <p className="form-error text-xs-bold">{errors}</p>
      )}
    </div>
  );
}

export default InputGroup;
