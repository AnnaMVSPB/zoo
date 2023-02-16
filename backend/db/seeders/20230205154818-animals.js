/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const animalsData = [
      {
        type: 'Крыса',
        description: 'Сожрала купюру в 5000',
        price: 5100,
        img: 'https://cs12.pikabu.ru/images/big_size_comm/2022-02_5/1645552054118856218.jpg',
        user_id: 2,
      },
      {
        type: 'Псина',
        description: 'Облаял всех соседей, погрыз все тапки',
        price: 11000,
        img: 'https://kartinkin.net/pics/uploads/posts/2022-09/thumbs/1663081515_2-kartinkin-net-p-smeshnaya-sobaka-pinterest-2.jpg',
        user_id: 2,
      },
      {
        type: 'Котяра',
        description: 'Нассал даже туда, куда невозможно нассать',
        price: 1,
        img: 'https://99px.ru/sstorage/56/2015/09/image_561609151141231542931.jpg',
        user_id: 1,
      },
      {
        type: 'Попугай',
        description: 'Обматерил всех друзей и знакомых, дважды угрожал убить во сне',
        price: 1000,
        img: 'https://kartinkof.club/uploads/posts/2022-03/1648309821_2-kartinkof-club-p-krasnii-popugai-mem-2.jpg',
        user_id: 1,
      },
    ];
    const animals = animalsData.map((animal) => ({
      ...animal,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Animals', animals);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Animals');
  },
};
