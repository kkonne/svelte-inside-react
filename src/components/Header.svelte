<script>
  export let brandName = "Brand name";
  export let brandLogo = "Logo";
  export let handleLoginClick = () => {};
</script>

<header class="navbar">
  <div class="brand-icon">{brandLogo}</div>
  <div class="brand-name">{brandName}</div>
  <div on:click={handleLoginClick} class="login">Log in</div>
</header>

<style scoped>
  .navbar {
    @apply w-full px-4 py-2 uppercase 
    bg-gray-200 text-gray-800
    flex justify-between;
  }

  .brand-name {
    @apply font-bold tracking-wider;
  }

  .login {
    @apply cursor-pointer;
  }
</style>
