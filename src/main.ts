import "./Index.sass";
import App from "./page/App.svelte";

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
