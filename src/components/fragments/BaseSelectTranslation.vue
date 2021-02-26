
<template>
  <select v-model="$i18n.locale">
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelectTranslation',
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
      langs: ['pt-BR', 'en']
    }
  },
  props: {},
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>
