import React from "react";
import { Route, Routes } from "react-router";

import "./App.css";

import { movies } from "../../utils/constants";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    if (isLoggedIn) {
      setCurrentUser({
        name: "testName",
        email: "test@test.ru",
      });
      return;
    }
    setCurrentUser({});
  }, [isLoggedIn]);

  const handleEditProfile = ({ name, email }) => {
    setCurrentUser({
      name,
      email,
    });
  };

  const handlelogOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handlelogIn = (values) => {
    setIsLoggedIn(true);
    setCurrentUser(values);
  };

  const handleSaveMovie = (movie) => {
    setSavedMovies((prev) => [...prev, movie]);
  };

  const handleRemoveMovie = (movie) => {
    setSavedMovies(
      savedMovies.filter((el) => {
        return el.name !== movie.name;
      })
    );
  };

  const handleMovieInteraction = (movie) => {
    if (movie.isLiked) {
      handleSaveMovie(movie);
      return;
    }
    handleRemoveMovie(movie);
  };

  return (
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
            <>
              <Header isLoggedIn={isLoggedIn} isBlue={false} />
              <Movies
                movies={movies}
                handleInteraction={handleMovieInteraction}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} isBlue={false} />
              <SavedMovies
                movies={savedMovies}
                handleInteraction={handleMovieInteraction}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} isBlue={false} />
              <Profile
                user={currentUser}
                handleEditProfile={handleEditProfile}
                logOut={handlelogOut}
              />
            </>
          }
        />
        <Route path="/signin" element={<Login handlelogIn={handlelogIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
