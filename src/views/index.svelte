<script>
  import { mdiPlusCircle } from '@mdi/js';
  import Icon from '../components/Icon.svelte';
  import { link } from 'svelte-spa-router';
  import { forms } from '../store.js';
</script>

<main class="margin-page">
  <div class="mt-4">
    <h3 class="p-2 font-bold h3">New</h3>
    <div class="m-3">
      <a class="flex flex-col form-card" href="/form/edit/new" title="Create new form" use:link>
        <div class="flex items-center justify-center new-form-card">
          <Icon path={mdiPlusCircle} />
        </div>
        <div class="my-2 text-center">New form</div>
      </a>
    </div>
  </div>

  {#if $forms.length}
  <div class="mt-4">
    <h3 class="p-2 font-bold h3">Recent Forms</h3>
    <div class="flex flex-col gap-2 m-3 md:flex-row">
      {#each $forms as form}
        <a class="relative flex flex-col w-full form-card" href="/form/edit/{form.id}" title={form.title} use:link>
          <div class="flex items-center justify-center new-form-card">
            {form.description}
          </div>
          <div class="my-2 text-center">{form.title}</div>
        </a>
      {/each}
    </div>
  </div>
  {/if}
</main>
