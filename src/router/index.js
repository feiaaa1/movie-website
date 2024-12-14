import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView/SubViews/MoviePushView/MoviePushView.vue'),
        },
        {
          path: 'movies/:id',
          name: 'movieDetail',
          component: () => import('@/views/HomeView/SubViews/MovieDetailView/MovieDetailView.vue'),
        },
        {
          path: 'movies/:id/player',
          name: 'moviePlayer',
          component: () => import('@/views/HomeView/SubViews/MoviePlayerView/MoviePlayerView.vue'),
        },
        {
          path: 'tags',
          name: 'tags',
          component: () => import('@/views/HomeView/SubViews/TagDisplayView/TagDisplayView.vue'),
        },
        {
          path: 'tags/:tagName',
          name: 'tagCorrelation',
          component: () => import('@/views/HomeView/SubViews/TagCorrelation/TagCorrelation.vue'),
        },
        {
          path: 'userProfile',
          name: 'userProfile',
          component: () => import('@/views/HomeView/SubViews/UserProfileView/UserProfileView.vue'),
        },
        {
          path: 'actors/:id',
          name: 'actors',
          component: () =>
            import('@/views/HomeView/SubViews/ActorProfileView/ActorProfileView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView/LoginView.vue'),
    },
    {
      path: '/*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView/NotFoundView.vue'),
    },
  ],
})

export default router
