<template>
  <img
    :style="styleProps"
    class="l-image-component"
    :src="src"
    @click.prevent="handleClick"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropNames,
} from "@/types/defaultProps";
import { useComponentCommon } from "@/hooks/index";
const defaultProps = transformToComponentProps(imageDefaultProps);
export default defineComponent({
  name: "l-image",
  props: {
    ...defaultProps,
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>
<style>
</style>