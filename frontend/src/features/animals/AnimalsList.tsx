import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import AnimalCard from './AnimalCard';
import styles from './Animals.module.scss';
// import stateContext from '../../reducer/context/context';

function AnimalsList(): JSX.Element {
  // const { state } = useContext(stateContext);
  const { animals } = useSelector((store:RootState) => store.animalState);

  return (
    <div className={styles.main__container}>
      <div className={styles.main__items}>
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default AnimalsList;
