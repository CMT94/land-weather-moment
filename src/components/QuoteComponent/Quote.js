import React from "react";

import axios from "axios";

import { QuoteContainer, Text, Author } from "./QuoteStyles";

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
    <QuoteContainer>
      <Text>{data.quotes[0].text}</Text>
      <Author>&#8212; {data.quotes[0].author}</Author>
    </QuoteContainer>
  );
};

export default Quote;
