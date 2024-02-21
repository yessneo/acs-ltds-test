<template>
  <transition name="fade">
    <div class="user-container">
      <div class="user">
        <div class="user-content">
          <h3>{{ selectedUser.name }}</h3>
          <img :src="selectedUser.avatar" alt="Avatar" class="user-avatar" />
          <p>Email: {{ selectedUser.email }}</p>
          <p>City: {{ selectedUser.city }}</p>
          <button @click="closeProfile">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedUser: null,
    };
  },
  created() {
    const userId = this.$props.id;
    this.selectedUser = this.$store.getters.getUserById(userId);
  },
  methods: {
    closeProfile() {
      this.$router.push({ name: 'home' }); // Optionally, navigate back to the home page or perform other actions
    },
  },
};
</script>

<style scoped>
.user-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user {
  margin: 0px auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.user-content {
  width: 700px;
  padding: 20px 30px;
}
.user-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 10px;
}
button {
  text-decoration: none;
  padding: 10px 20px;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  margin-right: 0.5rem;
  display: inline-block;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
