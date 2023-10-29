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
  const [input, setInput] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <input
        id="input"
        type="text"
        placeholder="Aramak istediğin karakteri yaz"
        onChange={(e) => setInput(e.target.value)}
      />
      <Karakterler data={data} input={input} />
      <p></p>
    </div>
  ) : (
    <p>yükleiyor...</p>
  );
};

export default App;
