<template>
  <div class="syetem-body-page wrapper">
    <div>
      <TheNavbarDashboard />
    </div>

    <div>
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
</style>
