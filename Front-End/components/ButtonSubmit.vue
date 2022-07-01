<template>
  <div>
    <button
      class="px-6 py-2.5 transition-all disabled:bg-gray-500 duration-150 bg-dark-themePrimary text-white rounded-md hover:bg-dark-themePrimary2"
      :type="type"
      :disabled="loading"
      @click="btnClick"
    >
      <span v-if="!loading">Submit</span>
      <i v-if="loading" class="fal fa-loader animate-spin-slow"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'submit',
    },
  },
  methods: {
    btnClick() {
      this.$emit('btnClick')
    },
  },
}
</script>

<style></style>
