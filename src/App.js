import React, { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card/Card';
import LoadingModal from './components/LoadingModal/LoadingModal';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import axios from 'axios';
import Header from './components/Header/Header';
import ErrorModal from './components/ErrorModal/ErrorModal';


const App = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_GIT_URL + `${pageNumber}`)
      .then(repsonse => setUsers(repsonse.data))
      .then(() => setIsLoaded(true))
      .catch(err => {
        console.log(err.message);
        setError(err.message)
      })
  }, [pageNumber]);

  const scrollToTopHandler = () => {
    if (isLoaded) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  const changeCurrentPage = numPage => {
    setIsLoaded(false);
    if (pageNumber === numPage) {
      return
    } else {
      setPageNumber(numPage);
      scrollToTopHandler();
    }
  };

  return (
    error ? <ErrorModal message={error} /> : (
      <div className="App">
        <Header title="Gists" />
        {isLoaded ?
          <Card
            data={users}
          /> : <LoadingModal />}
        <Pagination
          currentPage={pageNumber}
          totalPages={100}
          changeCurrentPage={changeCurrentPage}
          theme="bottom-border"
        />
      </div>
    )

  );
}

export default App;