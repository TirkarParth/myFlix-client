import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.scss'; // Import custom SCSS

const MyFlixApplication = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

ReactDOM.render(<MyFlixApplication />, document.getElementById('root'));
