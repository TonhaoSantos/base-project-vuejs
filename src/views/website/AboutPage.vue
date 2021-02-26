<template>
  <div>
    <p>{{ $t('pages.website.aboutPage.title') }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  metaInfo () {
    return {
      title: this.$t('pages.website.aboutPage.html.title'),
      link: [
        { rel: 'canonical', href: `${process.env.VUE_APP_BASE}/about` }
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
    return {}
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
