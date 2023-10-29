const Film = (props) => {
  const stil = {
    fontFamily: "'Prompt', sans-serif",
  };

  const { data } = props;

  return <p style={stil}>{data}</p>;
};

export default Film;
