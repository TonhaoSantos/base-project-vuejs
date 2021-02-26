<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo () {
    const locale = this.$i18n.locale
    return {
      title: 'Default Title',
      titleTemplate: chunk => (
        locale === 'en' ? `${chunk} | ${process.env.VUE_APP_APP_NAME}` : `${chunk} | ${process.env.VUE_APP_APP_NAME}`
      ),
      htmlAttrs: {
        lang: 'pt-BR'
      }
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
    return {
    }
  },
  props: {},
  components: {},
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss">
</style>
