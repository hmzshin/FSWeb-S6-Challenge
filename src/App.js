import axios from "axios";
import React, { useEffect, useState } from "react";
import Karakterler from "./components/Karakterler";

const App = () => {
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://swapi.dev/api/people/",
    })
      .then((response) => {
        console.log("data comes from api :", response.data);
        setData(response.data);
      })
      .catch((error) => window.alert("Sunucu Bulunamadı", error))
      .finally(() => console.log("site yüklendi"));
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler data={data} />
      <p></p>
    </div>
  ) : (
    <p>yükleiyor...</p>
  );
};

export default App;
