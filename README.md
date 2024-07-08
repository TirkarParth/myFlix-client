# MyMovieFlix App

MyMovieFlix is a web application that allows users to browse movies, manage their profile, and keep track of their favorite movies. Users can sign up, log in, update their information, and delete their accounts. The application also features a responsive navigation bar and an interactive user interface for a seamless user experience.

## Features

- User Authentication: Sign up, log in, and log out.
- Profile Management: Update user information, delete user account.
- Browse Movies: View a list of movies, see detailed information.
- Favorite Movies: Add and remove movies from the favorites list.
- Responsive Design: Works well on various screen sizes.

## API Endpoints

The application interacts with a backend server for user and movie data. Below are the main API endpoints used:

- **User Registration:** `POST https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users`
- **User Login:** `POST https://radiant-lake-01596-6878ff7c62df.herokuapp.com/login`
- **Get Movies:** `GET https://radiant-lake-01596-6878ff7c62df.herokuapp.com/movies`
- **Update User:** `PUT https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users/:Username`
- **Delete User:** `DELETE https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users/:Username`
- **Add to Favorite Movies:** `POST https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users/:Username/movies/:MovieID`
- **Remove from Favorite Movies:** `DELETE https://radiant-lake-01596-6878ff7c62df.herokuapp.com/users/:Username/movies/:MovieID`

## Installation

Follow these steps to set up and run the MyMovieFlix app on your local machine:

1. **Clone the repository:**
   git clone https://github.com/TirkarParth/myFlix-client
   ```sh
   cd myFlix-client

3. **Install the dependencies:**
   Make sure you have Node.js and npm installed on your machine. Then, run: 
   ```sh
   npm install

4. **Run the development server:**
   The app should now be running on http://localhost:1234.
   ```sh
   npm start
   

## Project Structure

The project structure is as follows:

mymovieflix/
│
├── src/
│ ├── components/
│ │ ├── main-view/
│ │ │ ├── main-view.jsx
│ │ │ └── main-view.scss
│ │ ├── login-view/
│ │ │ ├── login-view.jsx
│ │ │ └── login-view.scss
│ │ ├── signup-view/
│ │ │ ├── signup-view.jsx
│ │ │ └── signup-view.scss
│ │ ├── profile-view/
│ │ │ ├── profile-view.jsx
│ │ │ └── profile-view.scss
│ │ ├── navigation-bar/
│ │ │ ├── navigation-bar.jsx
│ │ │ └── navigation-bar.scss
│ │ ├── user-info/
│ │ │ ├── user-info.jsx
│ │ │ └── user-info.scss
│ │ ├── user-update/
│ │ │ ├── user-update.jsx
│ │ │ └── user-update.scss
│ │ ├── user-deregister/
│ │ │ ├── user-deregister.jsx
│ │ │ └── user-deregister.scss
│ │ ├── favorite-movie/
│ │ │ ├── favorite-movie.jsx
│ │ │ └── favorite-movie.scss
│ │ └── movie-card/
│ │ ├── movie-card.jsx
│ │ └── movie-card.scss
│ ├── index.jsx
│ └── index.scss
│
├── .gitignore
├── package.json
└── README.md

## Contributing

If you would like to contribute to this project, please follow these steps:

1 - Fork the repository.
2 - Create a new branch: git checkout -b feature/your-feature-name.
3 - Make your changes and commit them: git commit -m 'Add some feature'.
4 - Push to the branch: git push origin feature/your-feature-name.
5 - Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.




-------------------------------------------------------------------------------------------------

Feel free to customize this README file as needed. It should provide a clear and concise overview of the MyMovieFlix app, including installation instructions, project structure, and contribution guidelines.
