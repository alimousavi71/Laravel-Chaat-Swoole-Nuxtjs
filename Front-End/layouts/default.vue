<template>
  <div class="bg-dark-themeColor2">
    <div class="grid grid-cols-12 max-w-[1440px] mx-auto">
      <div
        class="fixed z-10 w-[350px] sm:w-[450px] transform transition-all duration-200 md:translate-x-0 md:relative md:w-full md:col-span-5 lg:col-span-4 xl:col-span-3 bg-gray-800 h-screen"
        :class="{
          'translate-x-0': openSidebar,
          '-translate-x-full': !openSidebar,
        }"
      >
        <Sidebar />
      </div>
      <div
        class="w-full h-screen col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9"
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  components: {
    Sidebar,
  },

  data() {
    return {}
  },
  computed: {
    openSidebar() {
      return this.$store.state.theme.theme.sidebarOpen
    },
  },
}
</script>
