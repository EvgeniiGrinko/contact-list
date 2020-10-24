import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem("contacts") || "[]")
  },
  mutations: {
    createContact(state, contact) {
      state.contacts.push(contact);

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
      console.log(JSON.parse(localStorage.getItem("contacts") || "[]"))
    },
    deleteContact(state, contactId) {
      const idx = state.contacts.findIndex(t => t.id == contactId)
      console.log(`index of object found ${idx} with id ${contactId}`);
      state.contacts.splice(idx, 1);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
      console.log(state.contacts)
    }
  },
  actions: {
    createContact({ commit }, contact) {
      commit("createContact", contact)
    },
    deleteContact({ commit }, contactId) {
      commit("deleteContact", contactId)
    }
  },
  modules: {
  },
  getters: {
    contacts: s => s.contacts,
    contactById: s => id => s.contacts.find(t => t.id === id)
  }

})
