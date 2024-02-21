import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

function formatUserData(userData) {
  const {
    name,
    email,
    location,
    login,
    picture,
  } = userData;
  return {
    id: login.uuid,
    name: `${name.first} ${name.last}`,
    email,
    city: location.city,
    avatar: picture.medium,
  };
}

export default new Vuex.Store({
  state: {
    users: {
      ideas: [],
      todos: [],
      inProgress: [],
    },
    selectedUser: null,
  },
  mutations: {
    SET_USERS(state, { category, users }) {
      // Directly set users to the specified category
      state.users[category] = users.map((user) => formatUserData(user));
    },
    SET_SELECTED_USER(state, { category, userId }) {
      state.selectedUser = state.users[category].find((user) => user.id === userId);
    },
  },
  actions: {
    async fetchUsers({ state, commit }, category) {
      if (state.users[category].length === 0) {
        try {
          const response = await axios.get('https://randomuser.me/api/?results=1'); // Fetching 5 users as an example
          commit('SET_USERS', { category, users: response.data.results });
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
    },
  },
  getters: {
    getUserById: (state) => (userId) => {
      const userCategories = Object.values(state.users);
      const foundUser = userCategories.reduce((acc, category) => {
        if (!acc) {
          return category.find((user) => user.id === userId) || null;
        }
        return acc;
      }, null);
      return foundUser;
    },
  },
});
