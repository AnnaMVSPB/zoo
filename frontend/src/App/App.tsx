import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AnimalsList from '../features/animals/AnimalsList';
import './App.scss';
import styles from '../features/animals/Animals.module.scss';
import * as api from './api';
// import stateContext from '../reducer/context/context';
import Header from '../features/Header/Header';
// import { init, reducer } from '../reducer/reducer';
import AnimalPage from '../features/animals/AnimalPage';
import MainPage from '../features/Main/MainPage';
import Registration from '../features/auth/Registration';
import Authorization from '../features/auth/Authorization';
import Form from '../features/Form/Form';

function App(): JSX.Element {
  // const [state, dispatch] = useReducer(reducer, init);
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadAnimals().then((data) => dispatch({ type: 'INIT_ANIMALS', payload: data }));
  }, []);

  // const memoizedContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    // <stateContext.Provider value={memoizedContext}>
      <div className={styles.app__container}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path="/add-form" element={<Form />} />
            <Route path="/animals" element={<AnimalsList />} />
            <Route path="/animals/:animalId" element={<AnimalPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/authorization" element={<Authorization />} />
          </Route>
        </Routes>
      </div>
    // </stateContext.Provider>
  );
}

export default App;
