<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <KanbanColumn v-for="(user, title) in users"
      :key="title"
      :title="title"
      :users="user"></KanbanColumn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import KanbanColumn from './KanbanColumn.vue';

export default {
  components: {
    KanbanColumn,
  },
  methods: {
    closeUserProfile() {
      this.$store.commit('SET_SELECTED_USER', null);
    },
  },
  computed: {
    ...mapState(['users', 'selectedUser']),
  },
  created() {
    this.$store.dispatch('fetchUsers', 'ideas');
  },
};
</script>
