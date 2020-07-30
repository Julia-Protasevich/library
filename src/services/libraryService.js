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
}