<template>
  <div class="dashboard-admin">
    <p>Dashboard Admin Page View</p>

    <button @click="clicado">Click aqui</button>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboardPage',
  metaInfo () {
    return {
      title: this.$t('pages.system.adm.dashboardPage.html.title')
    }
  },
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
  components: {},
  computed: {},
  methods: {
    clicado (value) {
      localStorage.setItem('clicado', value)

      alert('foi clicado')
    }
  },
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
</style>
