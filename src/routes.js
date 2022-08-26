import React from 'react'


//Main Dashboard
const Dashboard = React.lazy(() => import('./layout/DefaultLayout'))

//Admin
const Admins = React.lazy(() => import('./views/admin/Admins'))

//user
const Users = React.lazy(() => import('./views/user/Users'))
const userFollowing = React.lazy(() => import('./views/user/userFollowing'))
const userFollowers = React.lazy(() => import('./views/user/userFollowers'))


//Post
const Posts = React.lazy(() => import('./views/post/Posts'))
const PostsID = React.lazy(() => import('./views/post/PostsID'))
const postComments = React.lazy(() => import('./views/post/postComments'))
const postLikes = React.lazy(() => import('./views/post/postLikes'))


//Route
const Routes = React.lazy(() => import('./views/route/Routes'))
const routeRatings = React.lazy(() => import('./views/route/routeRatings'))
const routeComments = React.lazy(() => import('./views/route/routeComments'))



const routes = [
  {path: '/', exact: true, name: 'Home'},
  {path: '/dashboard', name: 'Dashboard', element: Dashboard},
  {path: '/admin/admins', name: 'Admins', element: Admins},
  {path: '/user/users', name: 'Users', element: Users},
  {path: '/user/userFollowing/:id', name: 'userFollowing', element: userFollowing},
  {path: '/user/userFollowers/:id', name: 'userFollowers', element: userFollowers},
  {path: '/post/posts', name: 'Posts', element: Posts},
  {path: '/post/posts/:id', name: 'PostsID', element: PostsID},
  {path: '/post/postComments/:id', name: 'postComments', element: postComments},
  {path: '/post/postLikes/:id', name: 'postLikes', element: postLikes},
  {path: '/route/routes', name: 'Routes', element: Routes},
  {path: '/route/routeRatings/:id', name: 'routeRatings', element: routeRatings},
  {path: '/route/routeComments/:id', name: 'routeComments', element: routeComments}
]

export default routes
