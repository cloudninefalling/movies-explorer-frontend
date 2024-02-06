export default function MainApi() {
  const baseUrl = "https://api.movies.nomoredomainsmonster.ru";
  const headers = { "Content-Type": "application/json" };

  const getResponseData = (res) => {
    if (!res.ok) {
      return res.json().then((j) => Promise.reject(j));
    }
    const contentType = res.headers.get("content-type");
    if (!contentType || contentType.indexOf("application/json") === -1) {
      return res;
    }
    return res.json();
  };

  // movies interactions

  const getSavedMovies = () => {
    return fetch(`${baseUrl}/movies`, {
      method: "GET",
      credentials: "include",
      headers,
    }).then(getResponseData);
  };

  const saveMovie = (movie) => {
    return fetch(`${baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers,
      body: JSON.stringify({ ...movie }),
    }).then(getResponseData);
  };

  const deleteMovie = (movie) => {
    return fetch(`${baseUrl}/movies/${movie._id}`, {
      headers,
      credentials: "include",
      method: "DELETE",
    }).then(getResponseData);
  };

  // user interactions

  const getUser = () => {
    return fetch(`${baseUrl}/users/me`, {
      headers,
      credentials: "include",
    }).then(getResponseData);
  };

  const setUser = ({ email, name }) => {
    return fetch(`${baseUrl}/users/me`, {
      headers,
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify({ email, name }),
    }).then(getResponseData);
  };

  // auth interactions

  const signUp = ({ email, password, name }) => {
    return fetch(`${baseUrl}/signup`, {
      headers,
      method: "POST",
      body: JSON.stringify({ email, password, name }),
    }).then(getResponseData);
  };

  const signIn = ({ email, password }) => {
    return fetch(`${baseUrl}/signin`, {
      headers,
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }).then(getResponseData);
  };

  const signOut = () => {
    return fetch(`${baseUrl}/signout`, {
      headers,
      credentials: "include",
    }).then(getResponseData);
  };

  return {
    saveMovie,
    deleteMovie,
    getSavedMovies,
    signUp,
    signIn,
    signOut,
    getUser,
    setUser,
  };
}
