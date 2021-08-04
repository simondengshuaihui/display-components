<template>
  <img
    :style="styleProps"
    class="l-image-component"
    :src="imageSrc"
    @click.prevent="handleClick"
    :draggable="false"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  transformToComponentProps,
  componentsDefaultProps,
  isEditingProp,
} from "@/defaultProps";
import useComponentClick from "@/hooks/useComponentClick";
import useStylePick from "@/hooks/useStylePick";
const defaultProps = transformToComponentProps(
  componentsDefaultProps["l-image"].props,
  isEditingProp
);
export default defineComponent({
  name: "l-image",
  props: {
    ...defaultProps,
  },
  setup(props) {
    const styleProps = useStylePick(props);
    const handleClick = useComponentClick(props);
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