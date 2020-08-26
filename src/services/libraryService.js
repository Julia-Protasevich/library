import axios from 'axios';

export default class LibraryService {

  constructor(){
    this.instance = axios.create({
      baseURL: 'http://localhost:1234/',
      responseType: 'json'
    });
  }

    
/**   axios.interceptors.request.use(config => {
      // perform a task before the request is sent
      console.log('Request was sent');
    
      return config;
    }, error => {
      // handle the error
      return Promise.reject(error);
    }); 
    */
  

  getAllBooks = () => {
      return this.instance.get('books')
  };

  deleteBook = (bookId) => {
    return this.instance.delete(`books/${bookId}`)
  };

  bookBook = (bookId, userId) => {
    return this.instance.put(`books/${bookId}`, {'userId': userId});
  };

  getUsersBooks = (userId) => {
    return this.instance.get(`books/userid/${userId}`);
  };

  releaseBook = (bookId) => {
    return this.instance.put(`books/${bookId}`);
  };

  isAdmin = false;//hardcode before role check is implemented
}