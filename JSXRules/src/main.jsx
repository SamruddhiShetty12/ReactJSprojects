import "./index.css";
import { createRoot } from "react-dom/client";
const JSXRules = () => {
  return (
    <div className="card">
      <nav>
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s"
          alt="not found"
        />
        <h1 className="h1n">Rules of JSX</h1>
      </nav>
      <ul className="list">
        <li>Must enclose within a Parent or Fragment</li>
        <li>Close the tags properly</li>
        <li>Use className for CSS class,as class is reserved word in JS</li>
        <li>Use camelCase for attributes</li>
        <li>Use flower braces for JS</li>
      </ul>
    </div>
  );
};
const root = createRoot(document.getElementById("root")).render(<JSXRules />);
