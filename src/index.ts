import type { App } from 'vue'
import LImage from "./components/LImage";
import LText from "./components/LText";
import LShape from "./components/LShape";
export { textDefaultProps , textStylePropNames, TextComponentProps,
    imageDefaultProps, imageStylePropsNames, ImageComponentProps,
    shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps,
    AllComponentProps
  } from './defaultProps'
const components = [
    LImage,
    LText,
    LShape
]

const install = (app: App) => {
    components.forEach(component =>{
    app.component(component.name,component)
    })
}

export {
    install,
    LImage,
    LText,
    LShape
}

export default {
    install
}
