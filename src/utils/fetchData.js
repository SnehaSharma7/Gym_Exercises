export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "6ea44c1977mshea29caaf5fd7aa2p1e4206jsn0e470e38b71c",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const fetchData = async (url, options) => {
  console.log("API KEY", process.env.REACT_APP_RAPID_API_KEY);
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
