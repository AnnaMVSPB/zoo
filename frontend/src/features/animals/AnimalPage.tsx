import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import stateContext from '../../reducer/context/context';
import styles from './Animals.module.scss';

function AnimalPage(): JSX.Element {
  const { animalId } = useParams();
  const navigation = useNavigate();
  const { state } = useContext(stateContext);
  const anim = state.animals.find((animal) => animal.id === Number(animalId));

  return (
    <div>
      {anim && (
        <div style={{ backgroundColor: '#ffb5ca', width: '100%' }} className={styles.main__item}>
          <h3>{anim.type}</h3>
          <img src={anim.img} alt="" />
          <p>{anim.description}</p>
          <p className={styles['main__item-price']}>{anim.price}</p>
          <div className={styles['main__buttons-container']}>
            <button type="button">Update</button>
            <button type="button">Delete</button>
          </div>
          <button onClick={() => navigation(-2)} type="button">
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default AnimalPage;
