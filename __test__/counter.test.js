import { starCounts, commentCounter } from '../src/modules/counter.js';

test('Should output the total number items displayed on homepage', () => {
  const stars = [{
    id: 0,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    fullName: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    family: 'House Targaryen',
    image: 'daenerys.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
  }, {
    id: 1,
    firstName: 'Samwell',
    lastName: 'Tarly',
    fullName: 'Samwell Tarly',
    title: 'Maester',
    family: 'House Tarly',
    image: 'sam.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/sam.jpg',
  }, {
    id: 2,
    firstName: 'Jon',
    lastName: 'Snow',
    fullName: 'Jon Snow',
    title: 'King of the North',
    family: 'House Stark',
    image: 'jon-snow.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/jon-snow.jpg',
  }, {
    id: 3,
    firstName: 'Sansa',
    lastName: 'Stark',
    fullName: 'Sansa Stark',
    title: 'Lady of Winterfell',
    family: 'House Stark',
    image: 'sansa-stark.jpeg',
    imageUrl: 'https://thronesapi.com/assets/images/sansa-stark.jpeg',
  }];

  expect(starCounts(stars)).toBe(4);
});

test('To test comment counter', () => {
  const commentsFromApi = [
    { creation_date: '2022-06-29', comment: 'Nice', username: 'James' },
    { creation_date: '2022-06-29', comment: 'lovely', username: 'Dan' },
    { creation_date: '2022-06-30', username: 'Killy', comment: 'Fine' },

  ];

  const numberOfComment = commentCounter(commentsFromApi);

  document.body.innerHTML = `<h2>Comments(${numberOfComment})</h2>`;

  expect(document.querySelector('h2').textContent).toBe('Comments(3)');
});
