import "./styles.scss";
import { NavBar } from "./NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: "0 2rem" }}>
        <h1>Modal PoC</h1>
        <p>
          This Sandbox explores the idea of wrapping React Modals in a Promise
          and allow it to be called from anywhere.
        </p>
        <h3>See it in action</h3>
        <p>
          You can start the upsell flow by clicking the "Upgrade to business"
          button in the top-right corner.
        </p>
        <h3>How it works</h3>
        <ol>
          <li>
            We take a normal React modal (see{" "}
            <span className="Code">'./modal/components.*.tsx'</span> files)
          </li>
          <li>
            Wrap that modal in the <span className="Code">createModal</span>{" "}
            curried function (see{" "}
            <span className="Code">'./modal/globalModals.ts'</span>)
          </li>
          <li>
            These wrapped functions are then callable and you can pass the props
            into them (see <span className="Code">'./checkout.tsx'</span> for
            example)
          </li>
          <li>
            The returned promise will <span className="Code">resolve</span> when
            you fire the <span className="Code">onSubmit</span> prop in the
            component and <span className="Code">reject</span> when{" "}
            <span className="Code">onCancel</span> is fired.
          </li>
        </ol>

        <h3>Caveats</h3>
        <ol>
          <li>
            When firing the curried function outside of React(JSX) you might not
            be able to pass JSX children. I don't know if that is really an
            issue though.
          </li>
          <li>
            If you fire a modal from within another modal you will have to
            manually set the currently open modal's{" "}
            <span className="Code">isOpen = false</span> to avoid a darker
            overlay. You can see this happen in the demo because we trigger
            chekout modals inside of the Upsell one.
          </li>
        </ol>
      </div>
    </div>
  );
}
