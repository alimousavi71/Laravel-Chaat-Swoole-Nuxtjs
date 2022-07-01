export const state = () => ({
  theme: {
    sidebarOpen: false,
  },
})

export const mutations = {
  toggleSidebar(state, status) {
    state.theme.sidebarOpen = status
  },
}
