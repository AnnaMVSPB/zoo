/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './Form.scss';

function Form(): JSX.Element {
  const [type, setType] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        img,
        description,
        price,
      }),
    });
    const data = await res.json();
  };

  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="type">Type</label>
        <input
          placeholder="Тип животного"
          id="type"
          name="type"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="img">Img</label>
        <input
          placeholder="Фото"
          id="img"
          name="img"
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          placeholder="Описание"
          id="description"
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          placeholder="Цена"
          id="price"
          name="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default Form;
