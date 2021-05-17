import React from 'react';
import Header from './components/Header';
import JobSearch from './pages/JobSearch';
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <JobSearch />
      <GlobalStyle />
    </>
  );
}

export default App;
