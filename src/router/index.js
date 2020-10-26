import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Video from '@/views/Video';
import Drehbuch from '@/views/Drehbuch';

Vue.use(Router);
export default new Router(
    {
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/video',
                name: 'Video',
                component: Video
            },
            {
                path: '/Drehbuch',
                name: 'Drehbuch',
                component: Drehbuch
            }
        ]
    }
)