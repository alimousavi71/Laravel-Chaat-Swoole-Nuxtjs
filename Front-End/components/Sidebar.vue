<template>
  <div class="flex">
    <div
      class="action-holder px-3 w-[50px] sm:w-[75px] h-screen flex justify-between flex-col items-center bg-dark-themeColor1 py-6 border-r-2 border-gray-800"
    >
      <a href="">
        <img
          src="~/static/images/logo.png"
          alt="Chat Message"
          class="w-9 sm:w-12"
        />
      </a>
      <ul class="flex flex-col gap-2">
        <SidebarNavLink
          v-for="(item, index) in actionMenus"
          :key="index"
          :to="item.to"
          :icon="item.icon"
        />
      </ul>
      <ul>
        <li>
          <nuxt-link to="/profile">
            <img
              src="~/assets/images/avatar.jpg"
              class="rounded-full w-9 sm:w-12"
              alt=""
            />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="w-full bg-dark-themeColor4">
      <div class="px-4 pt-6">
        <h4 class="mb-6 text-2xl font-semibold text-dark-white1">
          Chat Application
        </h4>
        <div class="relative">
          <input
            type="text"
            class="w-full py-3 pl-12 pr-4 rounded-md bg-dark-themeColor1 text-dark-text1"
            placeholder="Search User Or Contact Hear"
          />
          <i
            class="absolute transform -translate-y-1/2 fa-regular fa-search left-4 top-1/2 text-dark-text1"
          ></i>
        </div>
        <h5 class="mt-4 mb-6 text-lg font-medium text-dark-white1">Recent</h5>
      </div>

      <perfect-scrollbar class="px-2">
        <div v-for="(item, index) in chatList" :key="index">
          <ContactListItem
            :chat-id="item.id"
            :fullname="item.fullname"
            :avatar="item.avatar"
            :subtitle="item.subtitle"
            :notifies="item.notifies"
            :is-online="item.isOnline"
            :is-active="item.isActive"
            :time="item.time"
            @selectContact="callMee"
          />
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import SidebarNavLink from '../components/SidebarNavLink.vue'
import ContactListItem from './Chat/ContactListItem.vue'
export default {
  components: {
    SidebarNavLink,
    ContactListItem,
  },
  data() {
    return {
      actionMenus: [
        {
          icon: 'fa-light fa-message',
          to: '/',
        },
        {
          icon: 'fa-light fa-square-list',
          to: '/contact',
        },
        {
          icon: 'fa-light fa-user',
          to: '/profile',
        },
      ],
      chatList: [
        {
          id: 1,
          fullname: 'Ali Mousavi',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: false,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 2,
          fullname: 'Reza Akbari',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 3,
          fullname: 'Taha Rezaee',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 0,
          created_at: new Date(),
        },
        {
          id: 4,
          fullname: 'Amid Yasin',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: true,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 5,
          fullname: 'Iman Naderi',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 6,
          fullname: 'Zahra Hossini',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 7,
          fullname: 'Omid Najafi',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 8,
          fullname: 'Fatemeh Akbari',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 9,
          fullname: 'Kamran Abbasi',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 10,
          fullname: 'Sara Sadeqi',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 11,
          fullname: 'Farhad Aiish',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
        {
          id: 12,
          fullname: 'Mohsen Salaimi Akbari',
          avatar: 'https://picsum.photos/150/150',
          time: '20:11',
          subtitle: 'Hi Ali Can Call Your?',
          isOnline: true,
          isActive: false,
          notifies: 10,
          created_at: new Date(),
        },
      ],
    }
  },
  mounted() {
    const date = this.randomDate(new Date(2012, 0, 1), new Date())
    setInterval(() => {
      this.chatList[
        Math.floor(Math.random() * this.chatList.length)
      ].created_at = date

      this.chatList[Math.floor(Math.random() * this.chatList.length)].isOnline =
        Math.random() < 0.5

      this.chatList[Math.floor(Math.random() * this.chatList.length)].notifies =
        Math.floor(Math.random() * 20)

      this.chatList = this.chatList.sort(
        (objA, objB) => Number(objA.created_at) - Number(objB.created_at)
      )
    }, 2000)
  },
  methods: {
    randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    },
    callMee(chatId) {
      this.chatList.map(function (item) {
        item.isActive = false
        return item
      })

      const index = this.chatList.findIndex((object) => {
        return object.id === chatId
      })

      this.chatList[index].isActive = true
    },
  },
}
</script>

<style scoped>
.action-holder {
  box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);
  border-right: 2px solid #2f3741;
}
.ps {
  height: calc(100vh - 205px);
}
</style>
