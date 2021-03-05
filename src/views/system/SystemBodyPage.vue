<template>
  <div class="syetem-body-page wrapper">
    <div>
      <TheNavbarDashboard />
    </div>

    <div class="conteudo">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemBodyPage',
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
  props: {},
  components: {
    TheNavbarDashboard: () => import('@components/layout/TheNavbarDashboard')
  },
  computed: {},
  methods: {
    logout () {
      this.logoutEvent()
    }
  },
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.conteudo {
  height: 100vh;
  background: cyan;
  margin-left: 0;
  margin-top: 50px;
  padding: 10px;

  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {}
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {
    top: 0;
    left: 0;
    right: initial;
    height: 100vh;
    margin-left: 70px;
    margin-top: 0;
    padding: 10px;
  }
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1600px) {}
}
</style>
