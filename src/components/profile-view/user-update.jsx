import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./user-update.scss";

export const UserUpdate = ({ user, onUpdateUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.Username);
      setPassword(user.Password);
      setEmail(user.Email);
      setBirthday(new Date(user.Birthday).toISOString().split("T")[0]);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      console.log("Token not found in localStorage");
      return;
    }

    const updatedUserData = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    try {
      const response = await fetch(
        `https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users/${user.Username}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedUserData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      if (response.ok) {
        alert("User info updated successfully!");
        const updatedUser = await response.json();
        onUpdateUser(updatedUser); // Pass updated user data back to parent component
      } else {
        alert("Update failed!");
      }
    } catch (error) {
      console.error("Error updating user", error);
      alert("Update failed");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="update-form">
      <h1>Update User Information</h1>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
};
