/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../App/api';

import { Animal } from './Types/types';

function UpdateForm({ animal, setState }: { animal: Animal;setState:(el:boolean)=> void }): JSX.Element {
  const [type, setType] = useState(animal.type);
  const [img, setImg] = useState(animal.img);
  const [description, setDescription] = useState(animal.description);
  const [price, setPrice] = useState(animal.price);
  const dispatch = useDispatch();
// const {dispatch} = useContext(stateContext);

  const update = (e:React.FormEvent): void => {
    e.preventDefault();
    const newanimal = { id: animal.id, type, img, description, price };
    api.updateAnimal(newanimal).then(() => dispatch({ type: 'UPDATE_ANIMAL', payload: newanimal }));
    setState(true);
  };
  return (
    <div className="form__container input">
      <form
        className="form__body input"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={update}
      >
        <label htmlFor="type">Type</label>
        <input
          className="input"
          placeholder="Тип животного"
          id="type"
          name="type"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="img">Img</label>
        <input
          className="input"
          placeholder="Фото"
          id="img"
          name="img"
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          className="input"
          placeholder="Описание"
          id="description"
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          className="input"
          placeholder="Цена"
          id="price"
          name="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <button className="input" type="submit">Изменить</button>
      </form>
    </div>
  );
}

export default UpdateForm;
