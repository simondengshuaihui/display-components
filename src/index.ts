import LImage from "./components/LImage";
import LText from "./components/LText";
import LShape from "./components/LShape";

const components = [
    LImage,
    LText,
    LShape
]

const install = (app: any) => {
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

export default install
