import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserInfo } from "./user-info";
import { UserUpdate } from "./user-update";
import { UserDelete } from "./user-deregister";
import { FavoriteMovies } from "./favorite-movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile-view.scss";

export const ProfileView = ({ movies, user }) => {
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const handleUpdateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  const handleDeleteUser = () => {
    setCurrentUser(null);
  };

  const handleToggleFavorite = async (movieId, add) => {
    const token = localStorage.getItem("token");
    const method = add ? "POST" : "DELETE";

    try {
      const response = await fetch(`https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users/${currentUser.Username}/movies/${movieId}`, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setCurrentUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } else {
        console.error("Failed to update favorite movies");
      }
    } catch (error) {
      console.error("Error updating favorite movies", error);
    }
  };

  if (!currentUser) {
    return <div>User data not available</div>;
  }

  return (
    <div className="profile-view-container">
      <div className="user-info">
        <UserInfo
          name={currentUser.Username}
          email={currentUser.Email}
          birthday={currentUser.Birthday}
        />
      </div>
      <div className="user-update">
        <UserUpdate user={currentUser} onUpdateUser={handleUpdateUser} />
      </div>
      <div className="user-delete">
        <UserDelete user={currentUser} onDeleteUser={handleDeleteUser} />
      </div>
      <div className="favorite-movies">
        <FavoriteMovies
          movies={movies}
          user={currentUser}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  );
};
