<template>
  <div class="flex flex-col h-screen bg-dark-themeColor3">
    <HeaderChatBox />
    <h1>Profile</h1>
  </div>
</template>

<script>
import HeaderChatBox from '~/components/Chat/HeaderChatBox.vue'
export default {
  name: 'ProfilePage',
  components: { HeaderChatBox },
}
</script>
