<template>
  <img
    :style="styleProps"
    class="l-image-component"
    :src="src"
    @click.prevent="handleClick"
    :draggable="false"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from "@/defaultProps";
import useComponentCommon from "@/hooks/useComponentCommon";
const defaultProps = transformToComponentProps(imageDefaultProps);
export default defineComponent({
  name: "l-image",
  props: {
    ...defaultProps,
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropsNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>
<style scoped>
.l-image-component {
  max-width: 100%;
}
</style>