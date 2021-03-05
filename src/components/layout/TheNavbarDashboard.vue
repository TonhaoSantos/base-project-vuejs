<template>
  <div class="menu">
    <h1>Menu Dashboard</h1>
    <router-link :to="{ name: 'HomePage' }">{{ $t('menu.website.home') }}</router-link>
    <button  @click.prevent="logout" >{{ $t('buttons.signOut') }}</button>
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
.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 100vw;
  z-index: 8;
  overflow: hidden;
  background: tomato;

  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {}
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {
    top: 0;
    left: 0;
    right: initial;
    height: 100vh;
  width: 70px;
  }
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1600px) {}
}
</style>
