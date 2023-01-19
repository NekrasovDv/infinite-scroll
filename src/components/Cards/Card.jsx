import React from 'react';
import styles from './Card.module.scss';

function Card({ props }) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.title}>
          <span>{props.name.title}</span>
          <span>{props.name.first}</span>
          <span>{props.name.last}</span>
        </div>
        <div>
          Город:
          {props.location.city}
        </div>
        <div className={styles.info}>
          <p>
            Возраст:
            {' '}
            {props.dob.age}
          </p>
          <p>
            Пол:
            {' '}
            {props.gender}
          </p>
        </div>
        <div className={styles.contacts}>
          <p>Контакты:</p>
          <div className={styles.contact}>
            <p>
              Почта:
              {' '}
              {props.email}
            </p>
            <p>
              Телефон:
              {' '}
              {props.phone}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={props.picture.large} alt={props.name.first} />
      </div>
    </div>
  );
}

export default Card;
