import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header.js'
import Sidebar from './components/sidebar/Sidebar.js'
import HomeScreen from './screens/homeScreen/HomeScreen'

function App() {
  return (
    <>
    <Header />
    <div className="app__container">
      <Sidebar />
      <Container fluid className="app__main">
        <HomeScreen />
      </Container>

    </div>
    </>
  );
}

export default App;
