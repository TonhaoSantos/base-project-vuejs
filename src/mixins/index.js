
import { mapActions } from 'vuex'
import { removeLocalToken, setLocalRole, removeLocalRole } from '@helpers/functions'

export const myMixins = {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'setBlockUi'
    ]),
    ...mapActions('ModuleLogin', [
      'changeLogged'
    ]),
    ...mapActions('ModuleUser', [
      'changeUserRole'
    ]),
    changeBlockUi (value) {
      if (value) {
        this.setBlockUi(value)
      } else {
        const timer = 200

        setTimeout(() => {
          this.setBlockUi(value)
        }, timer)
      }
    },
    // Funcao que direciona o usuario apos login de sucesso para a pagina que ele estava querendo ir ou a de dashboard caso nao estava querendo id para nenhum lugar antes de fazer o login
    async hasGoBackAfterLogin (role) {
      const hasGoBackAfterLogin = localStorage.getItem('goBackAfterLogin')

      if (hasGoBackAfterLogin) {
        const goBackAfterLogin = JSON.parse(hasGoBackAfterLogin)

        localStorage.removeItem('goBackAfterLogin')

        this.$router.push(goBackAfterLogin)
      } else {
        if (role === 'client') {
          this.$router.push({ name: 'UserDashboardPage' })
        } else {
          this.$router.push({ name: 'AdminDashboardPage' })
        }
      }
    },
    logoutEvent () {
      // Altera a role local
      this.changeLogedRole(false, '')

      // Remove o token local
      removeLocalToken()

      this.$router.push({ name: 'LoginPage' })
    },
    changeLogedRole (loged, role) {
      // Altera a role local
      if (!loged) {
        removeLocalRole()
      } else {
        setLocalRole(role)
      }

      // Seta que esta logado e a role do usuario
      this.changeLogged(loged)
      this.changeUserRole(role)
    }
  },
  filters: {
    textUpperCase (string) {
      return string.toUpperCase()
    },
    textCapitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  watch: {}
}
