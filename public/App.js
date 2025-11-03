import React, { useEffect } from "react";
import API from "./api/axios";

const App = () => {
  useEffect(() => {
    API.get("/")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <h1>Welcome to Etablissement El Farsi</h1>;
};

export default App;
