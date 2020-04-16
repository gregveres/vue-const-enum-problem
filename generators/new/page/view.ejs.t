---
to: "src/pages/<%= path %>/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName)
  const titleName = h.changeCase.title(name)
%><script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: '<%= fileName %>',
  props: {}, // this is needed to ensure that vue-test-utils.mount takes this as a properly typed component
  setup() {

  }
});
</script>

<template>
  <div>
  </div>
</template>
<%

if (useStyles) { %>
<style lang="scss" scoped>
</style>
<% } %>
