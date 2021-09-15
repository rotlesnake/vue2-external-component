# Vue2-External-Component
importing external Vue2 components

## Install:
```bash
$ npm install vue2-external-component
```
## Example:
```vue
<template>
    <MyComponent1 />
    <MyComponent2 />
</template>

<script>
import { externalComponent, externalCSS } from 'vue2-external-component';
externalCSS("https://...../my-component.css");

export default {
  components: {
    MyComponent1:()=>externalComponent("https://...../my-component.js"),
    MyComponent2:()=>externalComponent("https://...../my-component.php", "component2"),
  },
};
</script>
```