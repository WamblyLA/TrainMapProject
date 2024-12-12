import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import TrainModule from "../TrainModule/TrainModule.jsx";

const SearchBar = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const getStationCode = async (city) => {
    const apiUrl = ``;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const cityData = data.countries
        .flatMap((country) => country.regions)
        .flatMap((region) => region.settlements)
        .find((settlement) => settlement.title.toLowerCase() === city.toLowerCase());

      if (cityData) {
        return cityData.codes.yandex;
      } else {
        throw new Error(`Не удалось найти код для города: ${city}`);
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);
  
    try {
      const fromCode = await getStationCode(from);
      const toCode = await getStationCode(to);  
   
      const searchUrl = ``;
  
      const response = await fetch(searchUrl);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
      const data = await response.json();
  
      if (data.segments) {
        setResults(data.segments);
      } else {
        throw new Error("Рейсы не найдены.");
      }
    } catch (err) {
      setError(err.message || "Произошла ошибка при поиске.");
      console.error(err);
    }
  };
  
  
  
  

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["search-bar"]}>
        <form onSubmit={handleSearch}>
          <div className={styles["input-group"]}>
            <input
              type="text"
              placeholder="Откуда"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className={styles["input"]}
              required
            />
            <input
              type="text"
              placeholder="Куда"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className={styles["input"]}
              required
            />
          </div>
          <button type="submit" className={styles["search-btn"]}>
            Поиск
          </button>
        </form>
      </div>
      <ul>
        <div className={styles["top"]}></div>
        {results.length > 0 && (
          <ul>
            {results.map((segment, index) => (
              <TrainModule key = {index} train = {segment.thread.title} departure = {segment.departure} arrival = {segment.arrival}></TrainModule>
            ))}
          </ul>
        )}
        {/* <TrainModule train = "25123" departure = "Москва" arrive = "Санкт-Петербург"></TrainModule>
        <TrainModule train = "61341" departure = "Сочи" arrive = "Липецк"></TrainModule>
        <TrainModule train = "82741" departure = "Новороссийск" arrive = "Киров"></TrainModule> */}
      </ul>
    </div>
  );
};

export default SearchBar;
