import AdminDashboard from '@/modules/admin/pages/AdminDashboard.vue' // Adjust the import path based on your project structure

export default [
  // Routes for user authentication (login, register, reset password)
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../pages/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../pages/Register.vue')
  },
  {
    path: '/reset-pass',
    name: 'ResetPass',
    component: () =>
      import(/* webpackChunkName: "reset-pass" */ '../pages/ResetPass.vue')
  },

  // Route for admin dashboard
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard, // Import and use the AdminDashboard component
    meta: { requiresAuth: true, role: 'admin' } // Ensure authentication and admin role
  }
]
