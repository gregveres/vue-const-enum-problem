<template>
  <v-app>
    <v-content>
      <div v-text="message"></div>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { AppModel } from './AppModel';

export default defineComponent({
  name: 'App',
  components: {},
  props: {},
  setup() {
    const message = ref('compilation failed');
    setTimeout(() => {
      const vm = new AppModel();
      message.value = vm.worked.value;
    }, 1);

    return { message };
  }
});
</script>
