<template>
    <div class="login-form">
        <form @submit.prevent id="starwars-form">
            <input type="text" placeholder="Enter user name" v-model="username">
            <input type="password" placeholder="Enter your password" v-model="password">
            <button @click="login">Log In</button>
        </form>
    </div>
</template>

<script>

export default {
  name: "Home",
  data: function() {
  return {
    username: '',
    password: '',
  }
},
  methods: {
    login: function() {
      if (this.username !== '' && this.password !== '') {
          this.$router.push('/planets');
      } else {
        alert ('Hmm! You have a lot to learn young padwan!')
      }

    }
  }
}
</script>

<style scoped>
  .login-form {
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.7);
    padding: 30px;
    display: flex;
    align-items: center;
  }

  #starwars-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #starwars-form input {
    display: inline-block;
    margin: 20px 0;
    padding: 10px;
    font-size: 1.1rem;
  }

  #starwars-form button {
    padding: 10px;
    outline: none;
    border: none;
    background: blue;
    color: #fff;
    cursor: pointer;
  }
</style>
