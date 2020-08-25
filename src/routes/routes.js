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
        exact: true
    },
    {
        path: MY_BOOKS,
        component: UserBooksPage,
        exact: false
    },
    {
        path: LOGIN,
        component: LoginPage,
        exact: false
    }, {
        path: REGISTER,
        component: RegisterPage,
        exact: false
    }
];

export default routes;