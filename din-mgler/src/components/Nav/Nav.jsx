import "./nav.scss";
import Phone from "./phone";
import Email from "./email";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <ul>
        <div className="nav-left">
          <li>
            <a href="#" className="Icon-link"><Email />4000@dinmaegler.com</a>
          </li>
          <li className="Left">
            <a href="#" className="Icon-link">
              <Phone className="phone" style={{ marginRight: 10 }} />
              +45 7070 4000
            </a>
          </li>
        </div>
        <li>
          <a href="#">Log ind</a>
        </li>
      </ul>
    </nav>
  );
}
