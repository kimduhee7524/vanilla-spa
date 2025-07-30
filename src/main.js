import "./style.css";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

function main() {
  document.body.innerHTML = `
  <div>
    <h3 class="font-bold text-primary">test</h3>
  </div>
`;
}

enableMocking().then(main);
