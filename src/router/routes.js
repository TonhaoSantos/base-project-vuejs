// Website pages
const StartPage = () => import('@views/website/StartPage')
const HomePage = () => import('@views/website/HomePage')
const AboutPage = () => import('@views/website/AboutPage')
const LoginPage = () => import('@views/website/LoginPage')

// Errors Pages
const Error404Page = () => import('@views/errors/Error404Page')

// Modules Pages
const SystemBodyPage = () => import('@views/system/SystemBodyPage')
// Admim
const AdminDashboardPage = () => import('@views/system/admin/DashboardPage')
// User
const UserDashboardPage = () => import('@views/system/user/DashboardPage')

export const routes = [
  {
    path: '/',
    component: StartPage,
    props: false,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
      },
      {
        path: '/404',
        name: 'Error404Page',
        component: Error404Page,
        props: false
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/dashboard',
    component: SystemBodyPage,
    props: false,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'admin',
        name: 'AdminDashboardPage',
        component: AdminDashboardPage,
        meta: {
          requiresAuth: true,
          userAdmin: true,
          userClient: false
        }
      },
      {
        path: 'user',
        name: 'UserDashboardPage',
        component: UserDashboardPage,
        meta: {
          requiresAuth: true,
          userAdmin: false,
          userClient: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
