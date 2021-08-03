import { exact } from 'prop-types';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ActorListPage from './pages/ActorListPage'
import ActorActionPage from './pages/ActorActionPage';
import UserInfoPage from './pages/UserInfoPage';
import LoginPage from './pages/LoginPage';

const routes = [
    {
        path:'/',
        exact: true,
        main:()=><HomePage />
    },
    {
        path: '/actor-list',
        exact: true,
        main:() => <ActorListPage />
    }, 
    {
        path: '/actor/add',
        exact: true,
        main:({history}) => <ActorActionPage history={history} />
    },
    {
        path: '/actor/edit/:id',
        exact: true,
        main:( {match, history} ) => <ActorActionPage match={match} history={history}/>
    },
    {
        path: '/user-info',
        exact: true,
        main: () => <UserInfoPage />
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path:'',
        exact: false,
        main:()=><NotFound />
    },
];
export default routes;