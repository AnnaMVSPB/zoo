import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Animal } from './Types/types';
import * as api from '../../App/api';
import styles from './Animals.module.scss';
import UpdateForm from './UpdateForm';

function AnimalCard({ animal }: { animal: Animal }): JSX.Element {
  const [state, setState] = useState(true);
  // const { dispatch } = useContext(stateContext);
  const dispatch = useDispatch();

  const nav = useNavigate();
  const delCard = (): void => {
    api.delAnimal(animal.id).then(() => dispatch({ type: 'DEL_ANIMAL', payload: animal.id }));
  };

  const handleDelete = (event: any): void => {
    if (!event.target.classList.contains('delete') && !event.target.classList.contains('update')
    && !event.target.classList.contains('input')
    ) {
      nav(`/animals/${animal.id}`);
    }
  };

  return (
    <div onClick={handleDelete} className={styles.main__item}>
      <h3>{animal.type}</h3>
      {state ? (
<><img src={animal.img} alt="" />
      <p>{animal.description}</p>
      <p className={styles['main__item-price']}>{animal.price}р</p>
      <div className={styles['main__buttons-container']}>
        <button className="update" type="button" onClick={() => setState(false)}>
          Update
        </button>
        <button className="delete" type="button" onClick={delCard}>
          Delete
        </button>
      </div>
</>
)
      :
      <UpdateForm animal={animal} setState={setState} />}

    </div>
  );
}

export default AnimalCard;
