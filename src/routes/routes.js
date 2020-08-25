import {
    LibraryPage,
    LoginPage,
    UserBooksPage, 
    RegisterPage
} from '../components/pages';

import {
    HOME, 
    MY_BOOKS, 
    LOGIN, 
    REGISTER
} from './paths';

const routes = [
    {
        path: HOME,
        component: LibraryPage,
    },
    {
        path: MY_BOOKS,
        component: UserBooksPage,
    },
    {
        path: LOGIN,
        component: LoginPage,
    }, {
        path: REGISTER,
        component: RegisterPage
    }
];

export default routes;