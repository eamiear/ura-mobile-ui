<template lang="html">
  <section>
    <page-header/>
    <page-aside/>
    <page-body/>
    <page-footer/>
  </section>
</template>

<script>
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'
import PageAside from '../components/PageAside'
import PageBody from '../components/pageBody'

export default {
  components: {
    PageHeader,
    PageFooter,
    PageAside,
    PageBody
  }
}
</script>

<style lang="css">
</style>
