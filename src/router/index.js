import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '@router/routes.js'
import { getLocalToken, tokenIsValid, getLocalRole } from '@helpers/functions'

Vue.use(Router)

// Funcao para remover a variavel de localstorage goBackAfterLogin
async function removeGoBackAfterLogin () {
  // Removendo o goBackAfterLogin caso ele exista e a tela de destino nao é a de Login
  localStorage.removeItem('goBackAfterLogin')
}

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}

    if (to.hash) {
      position.selector = to.hash

      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      if (document.querySelector(to.hash)) {
        return position
      }

      return false
    }

    return new Promise(resolve => {
      /*
        Para usar isso devemos passar um meta
        { path: '/', component: Home, meta: { scrollToTop: true }},
      */
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }

      /*
        Para usar isso devemos passar um meta

        <div id="apap">
          <h1>Scroll Behavior</h1>
          <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/foo">/foo</router-link></li>
            <li><router-link to="/bar">/bar</router-link></li>
            <li><router-link to="/bar#anchor">/bar#anchor</router-link></li>
            <li><router-link to="/bar#anchor2">/bar#anchor2</router-link></li>
          </ul>
          <transition name="fade" mode="out-in" @after-leave="afterLeave">
            <router-view class="view"></router-view>
          </transition>
        </div>

        methods: {
          afterLeave () {
            this.$root.$emit('triggerScroll')
          }
        }
      */
      // (Router. ou this.$)app.$root.$once('triggerScroll', () => {
      // (Router. ou this.$)app.$nextTick(() => resolve(position))
      // })
    })
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  scrollBehavior,
  routes
})

// Proteção das rotas (Auth)
router.beforeEach(async (to, from, next) => {
  // Obtendo usuadio/token salvo localmente
  const tokenLocalStorage = getLocalToken()
  const userRoleLocalStorage = getLocalRole()
  const hasGoBackAfterLogin = localStorage.getItem('goBackAfterLogin')

  // Meta da rota
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUserAdmin = to.matched.some(record => record.meta.userAdmin)
  const requiresUserClient = to.matched.some(record => record.meta.userClient)

  // Verifica se token é valido e refresh se for
  if (tokenLocalStorage) {
    const isValidToken = await tokenIsValid(tokenLocalStorage)

    if (!isValidToken && requiresAuth) next({ name: 'LoginPage' })
  }

  // Navegando
  if (requiresAuth && !tokenLocalStorage) {
    // Salvando a rota de destino para depois voltar o usuario para ela
    // Apagada apenas depois que efetuar o login ou se existir e a rota nao for de login e nem bloqueada
    localStorage.setItem('goBackAfterLogin', JSON.stringify(to.path))

    next({ name: 'LoginPage' })
  } else if (requiresAuth && tokenLocalStorage) {
    await removeGoBackAfterLogin()

    if (requiresUserAdmin && userRoleLocalStorage === 'admin') {
      next()
    } else if (requiresUserClient && userRoleLocalStorage === 'client') {
      next()
    } else {
      next({ name: 'HomePage' })
    }
  } else if (tokenLocalStorage && to.path === '/login') {
    await removeGoBackAfterLogin()

    next({ name: 'HomePage' })
  } else if (hasGoBackAfterLogin && to.path === '/login') {
    next()
  } else {
    await removeGoBackAfterLogin()

    next()
  }
})

export default router
