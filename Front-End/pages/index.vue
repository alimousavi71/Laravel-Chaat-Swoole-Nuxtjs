<template>
  <div class="flex flex-col justify-between h-screen bg-dark-themeColor3">
    <HeaderChatBox />
    <div class="flex-grow px-4 py-4">
      <div class="flex items-end max-w-xs mb-4">
        <img
          class="h-10 w-10 rounded-full mr-4"
          src="~/assets/images/avatar.jpg"
          alt=""
        />
        <div>
          <div class="bg-dark-themePrimary px-4 py-2 rounded-md">
            <p class="text-dark-white1 text-lg">
              Yeah everything is fine Yeah everything is fine Yeah everything is
              fine
            </p>
            <span class="text-dark-white2 text-xs">
              <i class="fa-light fa-clock"></i>
              <span>10:10</span>
            </span>
          </div>
          <h4 class="text-dark-white1 text-sm mt-1">Ali Mousavi</h4>
        </div>
      </div>

      <div class="flex items-end max-w-xs mb-4 float-right">
        <div>
          <div class="bg-dark-themeColor2 px-4 py-2 rounded-md">
            <p class="text-dark-white1 text-lg">
              Yeah everything is fine Yeah everything is fine Yeah everything is
              fine
            </p>
            <span class="text-dark-white2 text-xs">
              <i class="fa-light fa-clock"></i>
              <span>10:10</span>
            </span>
          </div>
          <h4 class="text-dark-white1 text-sm mt-1 text-right">Ali Mousavi</h4>
        </div>

        <img
          class="h-10 w-10 rounded-full ml-4"
          src="~/assets/images/avatar.jpg"
          alt=""
        />
      </div>
    </div>
    <div
      class="h-[80px] border-t border-gray-700 flex items-center py-4 px-4 gap-2"
    >
      <input
        type="text"
        class="w-full px-6 py-3 rounded-md bg-dark-themeColor1 text-dark-text1"
        placeholder="Enter Message..."
      />
      <button class="w-16 py-3 rounded-md bg-dark-themePrimary">
        <i class="text-white fa-light fa-send"></i>
      </button>
    </div>
  </div>
</template>

<script>
import HeaderChatBox from '~/components/Chat/HeaderChatBox.vue'
export default {
  name: 'IndexPage',
  components: { HeaderChatBox },
}
</script>
