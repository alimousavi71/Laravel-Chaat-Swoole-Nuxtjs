<template>
  <div
    class="p-4 flex items-center cursor-pointer hover:bg-dark-themeColor1 rounded-md transition-all duration-200"
    :class="{ active: isActive }"
    @click="selectContact(chatId)"
  >
    <div class="relative mr-3">
      <img class="w-11 h-11 rounded-full" :src="avatar" alt="" />
      <span
        v-if="isOnline"
        class="absolute w-2 h-2 rounded-full top-0 left-1 bg-green-500 border border-dark-themeColor3"
      ></span>
    </div>
    <div class="flex-grow">
      <h4 class="text-dark-white1 text-md font-medium" v-text="fullname"></h4>
      <p class="text-dark-white2 subtitle" v-text="subtitle"></p>
    </div>
    <div class="flex flex-col justify-start items-end gap-1">
      <span class="text-dark-white2 text-sm" v-text="time"></span>
      <span
        v-if="notifies"
        class="badge-notify flex justify-center text-xs items-center text-dark-red1"
        v-text="notifies"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatId: {
      type: Number,
      default: 1,
    },
    fullname: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    notifies: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    selectContact(chatId) {
      console.log(this.$route.path)
      /* if (this.$route.path === '/profile') {
      } */
      this.$emit('selectContact', chatId)
    },
  },
}
</script>

<style scoped>
.subtitle {
  font-size: 13px;
}
.badge-notify {
  background-color: rgba(239, 71, 111, 0.18);
  padding: 3px;
  border-radius: 8px;
  font-size: 12px;
}
.active {
  @apply bg-dark-themeColor1;
}
</style>
