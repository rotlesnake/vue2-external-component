# Vue2-External-Component
importing external Vue2 components

## Install:
```bash
$ npm install vue2-external-component
```
## Example:
```vue
<template>
    <MyComponent />
</template>

<script>
import { externalComponent, externalCSS } from 'vue2-external-component';
externalCSS("https://...../my-component.css");

export default {
  components: {
    MyComponent:()=>externalComponent("https://...../my-component.js"),
  },
};
</script>
```