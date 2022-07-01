<template>
  <div
    class="flex justify-between items-center py-4 px-4 border-b border-gray-700"
  >
    <div class="flex items-center">
      <div class="relative">
        <img
          class="w-12 h-12 rounded-full mr-3"
          src="~/assets/images/avatar.jpg"
          alt=""
        />
        <span
          class="absolute h-2 w-2 top-0 left-0 rounded-full bg-green-500"
        ></span>
      </div>
      <div>
        <h4 class="font-medium text-lg text-dark-white1">Ali Mousavi</h4>
        <p class="text-sm text-dark-white2">Senior Web Developer</p>
      </div>
    </div>
    <div>
      <ul>
        <li class="md:hidden">
          <button
            type="button"
            class="hover:bg-dark-themeGrey2 p-3 transition-all duration-200 rounded-lg"
            @click="toggleSidebar"
          >
            <i class="fa-light fa-bars text-dark-white2 text-lg"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      const open = !this.$store.state.theme.theme.sidebarOpen
      this.$store.commit('theme/toggleSidebar', open)
    },
  },
}
</script>
