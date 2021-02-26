<template>
  <div>
    <BaseNewContentServiceWorker propId="basenewcontentalert" propText="Foi encontrada uma nova versão do site!" propButtonText="Atualizar Site" :propHasNewContent="updateExistsServiceWorker" :propRegistrationServiceWorkerContent="registrationServiceWorker" @close-base-new-content-service-worker="changeExistsServiceWorker($event)" />

    <TheNavbarDefault />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  metaInfo () {
    return {
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'Bla bla bla bla ...' },
        { name: 'keywords', content: 'bla, blabla, blablabla, blablablabla' }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    // Iniciando o EventListener do serviceWorker
    document.addEventListener('swUpdated', this.showBaseNewContentServiceWorker, { once: true })

    // Refrescando apagina depois que o serviceWorker atualizar o conteudo
    navigator.serviceWorker.addEventListener('controllerchange', this.refreshingAfterServiceWorker)
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {
    // Finalizando o EventListener do serviceWorker
    document.removeEventListener('swUpdated', this.closeBaseNewContentServiceWorker)
  },
  destroyed () {},
  data () {
    return {
      refreshingPageServiceWorker: false,
      registrationServiceWorker: null,
      updateExistsServiceWorker: false
    }
  },
  props: {},
  components: {
    TheNavbarDefault: () => import('@components/layout/TheNavbarDefault'),
    BaseNewContentServiceWorker: () => import('@components/fragments/BaseNewContentServiceWorker')
  },
  computed: {},
  methods: {
    // Inico Funcoes do serviceWorker
    refreshingAfterServiceWorker () {
      if (this.refreshingPageServiceWorker) return

      this.refreshingPageServiceWorker = true
      window.location.reload()
    },
    showBaseNewContentServiceWorker (e) {
      this.registrationServiceWorker = e.detail
      this.updateExistsServiceWorker = true
    },
    closeBaseNewContentServiceWorker (e) {
      this.registrationServiceWorker = e.detail
      this.updateExistsServiceWorker = false
    },
    changeExistsServiceWorker (e) {
      this.registrationServiceWorker = null
      this.updateExistsServiceWorker = e
    }
    // Fim Funcoes do serviceWorker
  },
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
</style>
