const path = require('path');
const express = require('express');

// SQL controllers
// const userControllerSQL = require('./controllers/userControllerSQL');
// const bookControllerSQL = require('./controllers/bookControllerSQL');
// const reviewControllerSQL = require('./controllers/reviewControllerSQL');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));

// SQL ROUTES:
// BOOKS:
// app.post('/books', bookControllerSQL.addBook, (req, res) => {
//   return res.status(200).json(res.locals.newBook);
// });
// app.get('/books', bookControllerSQL.getBook, (req, res) => {
//   return res.status(200).json(res.locals.foundBook);
// });
// app.patch('/books', bookControllerSQL.updateBook, (req, res) => {
//   return res.status(200).json(res.locals.updatedBook);
// });
// app.delete('/books', bookControllerSQL.deleteBook, (req, res) => {
//   return res.status(200).json(res.locals.deletedBook);
// });
// // USERS:
// app.post('/signup', userControllerSQL.createUser, (req, res) => {
//   res.status(200).json(res.locals.newUser);
// });
// app.post('/login', userControllerSQL.userAuth, (req, res) => {
//   res.status(200).json({ user_id: res.locals.userID });
// });
// // REVIEWS
// app.post(
//   '/review',
//   reviewControllerSQL.addReview,
//   reviewControllerSQL.fleshOutReview,
//   (req, res) => {
//     res.status(200).json(res.locals.fleshedOutReview);
//   },
// );
// // app.post('/review', reviewControllerSQL.addReview, reviewControllerSQL.getAllUserReviews, (req, res) => {
// //   res.status(200).json(res.locals.userReviews);
// // });
// app.delete('/review', reviewControllerSQL.deleteReview, (req, res) => {
//   res.status(200).json(res.locals.deletedReview);
// });
// app.get('/review', reviewControllerSQL.getReview, (req, res) => {
//   res.status(200).json(res.locals.foundReview);
// });
// app.get('/library', reviewControllerSQL.getAllUserReviews, (req, res) => {
//   // this should be a get request, but prev group did post
//   res.status(200).json(res.locals.userReviews);
// });

// // catch all
// app.use('*', (req, res) => {
//   res.sendStatus(404).send('What the dog doin?');
// });

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred. RIP.' },
  };
  const errorObj = { ...defaultError, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const testapp = app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
module.exports = testapp;
