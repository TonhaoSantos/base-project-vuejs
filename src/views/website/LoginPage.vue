<template>
  <div>
    <h1>Login Page View</h1>
    <p>{{ $t('pages.website.loginPage.title') }}</p>

    <input v-model="loginData.username" type="text" :placeholder="$t('inputs.username.placeholder')" :disabled="blockUi"><br>
    <input v-model="loginData.password" type="password" :placeholder="$t('inputs.password.placeholder')" :disabled="blockUi"><br><br>

    <button @click="loginUser($event)" :disabled="blockUi">{{ $t('buttons.signIn') }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { authUser } from '@helpers/queries'
import { removeSpaceInString, setLocalToken, removeLocalToken } from '@helpers/functions'

export default {
  name: 'LoginPage',
  metaInfo () {
    return {
      title: this.$t('pages.website.loginPage.html.title'),
      link: [
        { rel: 'canonical', href: `${process.env.VUE_APP_BASE}/login` }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.changeBlockUi(false)
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      hasError: false,
      loginData: {
        username: '',
        password: ''
      },
      usernameIsValid: false,
      passwordIsValid: false
    }
  },
  props: {},
  components: {},
  computed: {
    ...mapGetters('ModuleUser', [
      'userRole'
    ]),
    ...mapGetters([
      'blockUi'
    ]),
    disableLoginButton () {
      if (!this.blockUi && this.loginData.username && this.usernameIsValid && this.loginData.password && this.passwordIsValid) return false

      return true
    }
  },
  methods: {
    ...mapActions('ModuleLogin', [
      'changeLogged'
    ]),
    ...mapActions('ModuleUser', [
      'changeUserRole'
    ]),
    async loginUser (event) {
      const username = this.loginData.username
      const password = this.loginData.password

      if (!event || !username || !password) return

      this.changeBlockUi(true)

      // Login com a api
      const resultAuth = await authUser(removeSpaceInString(username), removeSpaceInString(password))

      if (!resultAuth) {
        // Removendo no localStore o token e a role do usuario
        removeLocalToken()
        this.changeLogedRole(false, '')
        this.changeBlockUi(false)
      } else {
        const userRole = 'client'
        const userToken = 'tokenqualquer'

        // Salvando no localStore o token e a role do usuario
        setLocalToken(userToken)
        this.changeLogedRole(true, userRole)

        if (userRole === 'admin' || userRole === 'client') {
          await this.hasGoBackAfterLogin(userRole)
        } else {
          this.$router.push({ name: 'HomePage' })
        }
      }
    }
  },
  filters: {},
  watch: {
    loginData: {
      deep: true,
      immediate: true,
      handler (value) {
        if (value.username) {
          this.usernameIsValid = true
        } else {
          this.usernameIsValid = false
        }

        if (value.password) {
          this.passwordIsValid = true
        } else {
          this.passwordIsValid = false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
