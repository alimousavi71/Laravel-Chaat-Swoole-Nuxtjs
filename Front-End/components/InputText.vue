<template>
  <div>
    <div class="relative">
      <input
        class="w-full px-4 py-3 text-sm transition-all duration-500 rounded-md bg-dark-themeColor1 focus:outline-none text-dark-text1 focus:border-dark-themeColor2"
        type="text"
        :value="value"
        :class="{
          'pl-12': icon,
          'border border-dark-red1  border-opacity-100 text-dark-red1':
            errors.length,
          ' text-green-500': value && errors.length == 0,
        }"
        :placeholder="placeholder"
        @input="onInput"
        @change="onChange"
      />
      <i
        v-if="icon"
        class="absolute transform transition-all duration-500 -translate-y-1/2 text-md left-4 top-1/2 text-dark-text1"
        :class="{
          [icon]: icon,
          'text-dark-red1': errors.length,
          'text-green-500': value && errors.length == 0,
        }"
      ></i>
    </div>

    <span
      v-if="errors.length"
      class="block text-danger-dark py-1 text-xs text-dark-red1"
      v-text="errors[0]"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: '',
      type: String,
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    errors: {
      default: null,
      type: Array,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    onChange(event) {
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style></style>
