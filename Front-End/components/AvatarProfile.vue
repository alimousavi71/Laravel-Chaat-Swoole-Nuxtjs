<template>
  <div class="relative">
    <img
      class="rounded-full w-28 h-28"
      src="~/assets/images/avatar.jpg"
      alt="Ali Mousavi"
    />
    <button
      type="button"
      class="absolute p-2 transition-all duration-200 bg-gray-700 rounded-full cursor-pointer top-2 hover:text-dark-white1 fal fa-pen text-dark-text1 hover:bg-dark-themePrimary"
      @click="chooseFiles()"
    ></button>
    <input
      id="avatar"
      ref="avatar"
      class="hidden"
      type="file"
      name="avatar"
      @change="handleFileUpload()"
    />
    <div
      v-if="loading"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <i
        class="text-xl fal fa-loader bg-gray-700 rounded-full p-2 text-white animate-spin-slow"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      file: '',
    }
  },
  methods: {
    handleFileUpload(event) {
      this.file = this.$refs.avatar.files[0]
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
      /* let formData = new FormData()
      formData.append('file', this.file)
      axios
        .post('/single-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function () {
          console.log('SUCCESS!!')
        })
        .catch(function () {
          console.log('FAILURE!!')
        }) */
    },
    chooseFiles() {
      document.getElementById('avatar').click()
    },
  },
}
</script>

<style></style>
