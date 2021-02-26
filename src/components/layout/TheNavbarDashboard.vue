<template>
  <div>
    <h1>Menu Dashboard</h1>
    <router-link :to="{ name: 'HomePage' }">{{ $t('menu.website.home') }}</router-link>
    <button  @click.prevent="logout" >{{ $t('buttons.logOut') }}</button>
    <BaseSelectTranslation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavbarDashboard',
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
