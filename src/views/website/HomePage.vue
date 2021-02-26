<template>
  <div>
    <p>{{ $t('pages.website.homePage.title') }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo () {
    return {
      title: this.$t('pages.website.homePage.html.title'),
      link: [
        { rel: 'canonical', href: `${process.env.VUE_APP_BASE}/` }
      ]
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

<style scoped lang="scss">
</style>
