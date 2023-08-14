const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
};

const errorStyles = { color: 'red' };

const TextField = ({ label, error, ...props }) => {
  return (
    <div style={containerStyles}>
      {label ? <label htmlFor={props.name}>{label}</label> : null}
      <input {...props} />
      {error ? <span style={errorStyles}>{error}</span> : null}
    </div>
  );
};

export { TextField };
