<script>
  import { counter } from "../store/store";
</script>

<button
  type="button"
  tabindex="0"
  class="btn btn--danger"
  on:click={$counter.increment}
>
  Svelte counter: {$counter.count}
</button>
