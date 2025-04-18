<script lang="ts">
  import { onMount } from 'svelte';

  let isDark = false;

  // Initialize theme before the component mounts
  if (typeof document !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      isDark = true;
      document.documentElement.classList.add('dark');
    }
  }

  onMount(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        isDark = e.matches;
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  });

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<button
  on:click={toggleTheme}
  class="btn-icon"
  aria-label="Toggle theme"
>
  {#if isDark}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2.5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2.5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  {/if}
</button>

<style>
  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 9999px;
    border: 2px solid hsl(var(--foreground));
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    transform: translate(0, 0);
    transition: all 200ms;
    box-shadow: 2px 2px 0 0 hsl(var(--foreground));
  }

  .btn-icon:hover {
    transform: translate(1px, 1px);
    background-color: hsl(var(--primary) / 0.1);
    box-shadow: 1px 1px 0 0 hsl(var(--foreground));
  }

  .btn-icon:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
</style> 