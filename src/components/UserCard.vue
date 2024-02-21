<template>
  <div class="bg-white mt-3 p-2 shadow border rounded">
    <router-link :to="{ name: 'userProfile', params: { id: user.id } }">
      <h4 class="user_name">{{ user.name }}</h4>
    </router-link>
    <img :src="user.avatar" alt="Avatar" class="user-avatar" />
    <p>Email: {{ user.email }}</p>
    <p>City: {{ user.city }}</p>
  </div>
</template>

<script>
export default {
  props: ['user'],
};
</script>

<style scoped>
.user_name {
  transition: background-color 0.3s ease;
}
.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.user_name:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
