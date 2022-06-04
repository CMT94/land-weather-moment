import React from "react";
import axios from "axios";

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

const Quote = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div>
      <p>{data.quotes[0].text}</p>
      <p>{data.quotes[0].author}</p>
    </div>
  );
};

export default Quote;
