import appRoot from "app-root-path";

export const getTestPagePath = () =>
  process.env.TEST_ENV === "circle_ci"
    ? `file:${appRoot.path}/dist/index.html`
    : "http://127.0.0.1:8080";
