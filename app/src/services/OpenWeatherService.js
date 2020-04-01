import { daysToString } from "../constants/days";

export function getPrediction(data) {
  return fetch(
    `weather?q=${data.city}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`
  )
    .then(r => r.json())
    .then(response => parsePrediction(response));
}

export function getFuturePrediction(data) {
  return fetch(
    `forecast?q=${data.city}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`
  )
    .then(r => r.json())
    .then(({ list }) => parseFiveDaysPrediction(list));
}

export function parseFiveDaysPrediction(list) {
  return list.reduce((arrRet, current, index) => {
    if (index % 8 === 0) {
      const date = new Date(current.dt_txt);
      const prediction = {
        icon: current.weather[0].icon.replace(/n|d/, ""),
        day: daysToString[date.getDay()],
        temp: current.main.temp.toFixed(0)
      };
      arrRet.push(prediction);
    }
    return arrRet;
  }, []);
}

export function parsePrediction(response) {
  const prediction = {
    icon: response.weather[0].icon.replace(/n|d/, ""),
    city: response.name,
    temp: response.main.temp.toFixed(0)
  };
  return prediction;
}
