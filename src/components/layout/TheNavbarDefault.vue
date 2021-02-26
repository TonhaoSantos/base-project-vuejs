<template>
  <div id="nav">
    <router-link :to="{ name: 'HomePage' }">{{ $t('menu.website.home') }}</router-link> |
    <router-link :to="{ name: 'AboutPage' }">{{ $t('menu.website.about') }}</router-link> |

    <div v-if="!logged">
    <router-link :to="{ name: 'LoginPage' }">{{ $t('menu.website.login') }}</router-link> |
    </div>

    <div v-else>
      <div v-if="userRole === 'admin'">
        <router-link :to="{ name: 'AdminDashboardPage' }">Admin Dashboard</router-link> |
      </div>
      <div v-else-if="userRole === 'client'">
        <router-link :to="{ name: 'UserDashboardPage' }">User Dashboard</router-link> |
      </div>

      <button  @click.prevent="logout" >{{ $t('buttons.logOut') }}</button> |
    </div>

    <BaseSelectTranslation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavbarDefault',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {}
  },
  components: {
    BaseSelectTranslation: () => import('@components/fragments/BaseSelectTranslation')
  },
  computed: {
    ...mapGetters('ModuleLogin', [
      'logged'
    ]),
    ...mapGetters('ModuleUser', [
      'userRole'
    ])
  },
  methods: {
    logout () {
      this.logoutEvent()
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss">
</style>
