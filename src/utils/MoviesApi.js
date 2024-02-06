export default function MoviesApi() {
  const baseUrl = "https://api.nomoreparties.co/beatfilm-movies";
  const headers = {
    "Content-Type": "application/json",
  };

  const getMovies = () => {
    return fetch(baseUrl, {
      headers,
    }).then((res) => {
      if (!res.ok) return Promise.reject("Ошибка ", res.status);
      return res.json();
    });
  };

  return {
    getMovies,
  };
}
