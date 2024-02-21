<template>
  <div class="col mx-2 px-2 py-3 bg-light border rounded">
    <h6>{{ title }}</h6>
    <draggable class="draggable-list"
    :list="users"
    group="users"
    @end="handleDragEnd">
      <UserCard v-for="(user, i) in users"
      :key="i"
      :user="user"/>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import UserCard from './UserCard.vue';

export default {
  props: ['title', 'users'],
  components: {
    draggable,
    UserCard,
  },
  methods: {
    async handleDragEnd() {
      if (this.title === 'ideas' && this.users.length === 0) {
        await this.$store.dispatch('fetchUsers', 'ideas');
      }
    },
  },
};
</script>
