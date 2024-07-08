import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export const UserDelete = ({ user, onDeleteUser }) => {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      console.log("Token not found in localStorage");
      return;
    }

    try {
      const response = await fetch(
        `https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users/${user.Username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      if (response.ok) {
        setMessage("User deleted successfully");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        onDeleteUser(); // Notify parent component of user deletion
      } else {
        setMessage("Error deleting user");
      }
    } catch (error) {
      console.error("Error deleting user", error);
      setMessage("Error deleting user");
    }
  };

  return (
    <div>
      <h1>Delete Account</h1>
      <p>{message}</p>
      <Button onClick={handleDelete}>Delete Account</Button>
    </div>
  );
};
