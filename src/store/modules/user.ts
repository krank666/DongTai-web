import { Commit } from 'vuex'
import createUserServices from '@/services/user'
import { Message } from 'element-ui'

const userServices = createUserServices()

const state: any = {
  userInfo: null,
}

const mutations: any = {
  UPDATE_USER_INFO(state: any, userInfo: any) {
    state.userInfo = userInfo
  },
}

const actions: any = {
  async getUserInfo(context: { commit: Commit }) {
    const { status, msg, data } = await userServices.getUserInfo()
    if (status !== 201) {
      Message.error(msg)
    }
    context.commit('UPDATE_USER_INFO', data)
  },
  async logOut(context: { commit: Commit }) {
    const { status, msg } = await userServices.logout()
    if (status !== 201) {
      Message.error(msg)
    }
    context.commit('UPDATE_USER_INFO', null)
  },
  clearInfo(context: { commit: Commit }) {
    context.commit('UPDATE_USER_INFO', null)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}