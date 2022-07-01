<template>
  <li>
    <NuxtLink
      exact
      :to="to"
      class="flex justify-center items-center hover:bg-dark-themeGrey2 transition-all duration-200 rounded-lg"
    >
      <i
        class="fa-light text-xl p-2 sm:p-5 text-dark-themeGrey1 duration-200 hover:text-dark-themePrimary transform hover:scale-125"
        :class="icon"
      ></i>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-user',
    },
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style scoped>
.nuxt-link-active {
  @apply bg-dark-themeGrey2;
}
.nuxt-link-active i {
  @apply text-dark-themePrimary scale-125;
}
</style>
