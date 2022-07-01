<template>
  <div class="flex flex-col h-screen bg-dark-themeColor3">
    <HeaderChatBox />
    <perfect-scrollbar class="h-full p-5">
      <div class="mx-auto w-100 sm:w-1/2">
        <div class="flex justify-center">
          <AvatarProfile />
        </div>

        <ValidationObserver ref="validate" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|alpha_spaces|max:20"
              name="First Name"
            >
              <InputText
                v-model="form.first_name"
                :errors="errors"
                class="mt-4"
                placeholder="First Name"
                icon="fal fa-pen"
              />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              rules="required|alpha_spaces|max:20"
              name="Last Name"
            >
              <InputText
                v-model="form.last_name"
                :errors="errors"
                class="mt-4"
                placeholder="Last Name"
                icon="fal fa-pen"
              />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              rules="required|numeric|min:11"
              name="Mobile"
            >
              <InputText
                v-model="form.mobile"
                :errors="errors"
                class="mt-4"
                placeholder="Mobile"
                icon="fal fa-phone"
              />
            </ValidationProvider>

            <ValidationProvider v-slot="{ errors }" rules="url" name="Linkedin">
              <InputText
                v-model="form.linkedin"
                :errors="errors"
                class="mt-4"
                placeholder="Linkedin"
                icon="fab fa-linkedin-in"
              />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="About"
            >
              <InputTextarea
                v-model="form.about"
                :errors="errors"
                class="mt-4"
                :rows="8"
                placeholder="About"
              />
            </ValidationProvider>

            <ButtonSubmit
              :loading="loading"
              class="mt-4"
              @btnClick="onSubmit"
            />
          </form>
        </ValidationObserver>

        <div class="text-dark-white2 text-sm py-4" v-text="form"></div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import InputText from '../components/InputText.vue'
import HeaderChatBox from '~/components/Chat/HeaderChatBox.vue'
import InputTextarea from '~/components/InputTextarea.vue'
import ButtonSubmit from '~/components/ButtonSubmit.vue'
import AvatarProfile from '~/components/AvatarProfile.vue'
export default {
  name: 'ContactPage',
  components: {
    ValidationProvider,
    ValidationObserver,
    HeaderChatBox,
    InputText,
    InputTextarea,
    ButtonSubmit,
    AvatarProfile,
  },
  data() {
    return {
      loading: false,
      form: {
        first_name: '',
        last_name: '',
        mobile: '',
        linkedin: '',
        about: '',
      },
    }
  },
  methods: {
    onSubmit() {
      const _this = this
      this.$refs.validate.validate().then((result) => {
        if (result) {
          _this.loading = true
          setTimeout(() => {
            _this.loading = false
          }, 600)
        }
      })
    },
  },
}
</script>
