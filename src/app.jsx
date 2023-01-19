import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.scss';
import Card from './components/Cards/Card';

function App() {
  const [cards, setCards] = useState([]);

  const [currentPage, setCarrentPage] = useState(1);
  const [sendRequest, setSendRequest] = useState(true);

  const scrollHandler = (event) => {
    if (
      event.target.documentElement.scrollHeight
        - (event.target.documentElement.scrollTop + window.innerWidth)
      < 120
    ) {
      setSendRequest(true);
    }
  };

  useEffect(() => {
    console.log('sendRequest: ', sendRequest);
    if (sendRequest) {
      axios
        .get(`https://randomuser.me/api/?page=${currentPage}&results=20`)
        .then((data) => {
          setCards((prev) => [...prev, ...data.data.results]);
          setCarrentPage((prev) => prev + 1);
        })
        .finally(() => setSendRequest(false));
    }
  }, [sendRequest]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={styles.content}>
      {cards.length
        && cards.map((el) => <Card key={el.login.uuid} props={el} />)}
    </div>
  );
}

export default App;
