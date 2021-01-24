<template>
  <div>
    <h3>Home</h3>
    <User>
      <template v-slot:user="{ user }">
        <div v-if="user">
          <UserProfile :user="user"></UserProfile>
        </div>
        <Login v-else />
      </template>
    </User>
  </div>
</template>

<script>
import Login from "./Login";
import User from "./User";
import UserProfile from "./UserProfile";

export default {
  components: {
    Login,
    User,
    UserProfile,
  },
};
</script>