<script>
  export let brandName = "Brand name";
  export let brandLogo = "Logo";
  export let handleLoginClick = () => {};
</script>

<header class="navbar">
  <div class="brand-icon">{brandLogo}</div>
  <div class="brand-name">{brandName}</div>
  <button
    type="button"
    tabindex="0"
    on:click={handleLoginClick}
    class="btn login">Log in</button
  >
</header>

<style scoped>
  .navbar {
    @apply w-full px-4 py-2 uppercase 
    bg-gray-200 text-gray-800
    flex justify-between items-center;
  }

  .brand-name {
    @apply font-bold tracking-wider;
  }

  button.login {
    @apply uppercase cursor-pointer outline-none py-1 px-2;
  }

  button.login:hover,
  button.login:focus {
    @apply bg-gray-500 bg-opacity-50;
  }
</style>
