import React, { useCallback } from "react";
import { Route, Routes } from "react-router";

import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ReverseProtectedRoute from "../ReverseProtectedRoute/ReverseProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = React.useState(false);

  const { getMovies } = MoviesApi();
  const {
    saveMovie,
    deleteMovie,
    getSavedMovies,
    getUser,
    setUser,
    signIn,
    signOut,
  } = MainApi();

  React.useEffect(() => {
    Promise.all([getUser(), getSavedMovies()])
      .then((res) => {
        const userInfo = res[0];
        const savedMovies = res[1];

        setIsLoggedIn(true);
        const { name, email } = userInfo;
        setCurrentUser({ name, email });

        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoggedIn]);

  const handleEditProfile = ({ name, email }) => {
    return setUser({ name, email })
      .then((res) => {
        const { name, email } = res;
        setCurrentUser({ name, email });
      })
      .catch((err) => {
        if (err.statusCode === 409) {
          return Promise.reject("Пользователь с таким email уже существует.");
        }
        return Promise.reject("При обновлении профиля произошла ошибка.");
      });
  };

  const handleSignOut = () => {
    return signOut().then(() => {
      localStorage.clear();
      setCurrentUser({});
      setIsLoggedIn(false);
    });
  };

  const handleLogIn = (values) => {
    return signIn(values).then(() => {
      setIsLoggedIn(true);
    });
  };

  const convertMovie = (movie) => {
    movie.image = `https://api.nomoreparties.co/${movie.image.url}`;
    movie.thumbnail = movie.image;
    movie.movieId = movie.id;
    delete movie.id;
    delete movie.created_at;
    delete movie.updated_at;

    return movie;
  };

  const handleSaveMovie = (movie) => {
    saveMovie(movie).then((res) => {
      setSavedMovies((prev) => [...prev, res]);
    });
  };

  const handleRemoveMovie = (movie) => {
    //only movies from saved tab have _id => check & substitute if necessary
    const isMovieFromSavedTab = movie._id;
    if (!isMovieFromSavedTab) {
      movie = savedMovies.find((savedMovie) => {
        return savedMovie.movieId === movie.movieId;
      });
    }
    deleteMovie(movie).then(() => {
      setSavedMovies(
        savedMovies.filter((savedMovie) => {
          return savedMovie.movieId !== movie.movieId;
        })
      );
    });
  };

  const handleMovieInteraction = (movie, isLiked) => {
    if (isLiked) {
      handleSaveMovie(movie);
      return;
    }
    handleRemoveMovie(movie);
  };

  const handleSearch = () => {
    setIsFetching(true);
    getMovies()
      .then((json) => {
        const movies = Array.from(json);
        movies.forEach((movie) => {
          movie = convertMovie(movie);
        });
        setMovies(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
        setMovies(-1);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  if (isLoading) return <Preloader />;
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} isBlue={true} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} isBlue={false} />
                    <Movies
                      movies={movies}
                      savedMovies={savedMovies}
                      handleInteraction={handleMovieInteraction}
                      handleSearch={handleSearch}
                      isFetching={isFetching}
                    />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            path="/saved"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} isBlue={false} />
                    <SavedMovies
                      movies={savedMovies}
                      handleInteraction={handleMovieInteraction}
                      handleSearch={handleSearch}
                      isLoading={isLoading}
                    />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} isBlue={false} />
                    <Profile
                      handleEditProfile={handleEditProfile}
                      handleSignOut={handleSignOut}
                    />
                  </>
                }
              />
            }
          />
          <Route
            path="/signin"
            element={
              <ReverseProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<Login handleLogIn={handleLogIn} />}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ReverseProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<Register handleLogIn={handleLogIn} />}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
