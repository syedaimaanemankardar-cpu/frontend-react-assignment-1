import { createElement } from "react"
import { createRoot} from "react-dom/client"

const root= createRoot (document.getElementById("root"))
// const reactElement=createElement ("h1", null, "Hello from create element")
console.log(reactElement)

root.render(
    <h1>Hello, React</h1>
)