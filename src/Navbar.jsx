import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGreaterThan,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import logo from "./images/new-york-times-logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__left">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faBars} size="2xl" color="black" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="2xl"
                    color="black"
                  />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <img className="logo" src={logo} alt="The New York Times logo" />
            </a>
          </li>
          <li className="nav__right">
            <ul>
              <li className="spell">
                <div id="frame" class="frame">
                  <div id="playingspellingbee" class="playingspellingbee">
                    PLAYING SPELLING BEE
                  </div>
                </div>
              </li>
              <li>
                <p className="Account">Account</p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__left">
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 40 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.1779 26.9399C33.9186 30.5976 31.6011 33.4236 28.276 34.9197V26.9399L32.2559 23.0055L28.276 19.1265V13.6406C31.9033 13.3636 34.4221 10.4266 34.4221 6.82476C34.4221 2.11467 30.3418 0.452148 28.0243 0.452148C27.5208 0.452148 26.9664 0.452148 26.1607 0.673656V0.895385C26.4629 0.895385 26.9159 0.840064 27.0674 0.840064C28.6795 0.840064 29.8886 1.67122 29.8886 3.2782C29.8886 4.49727 28.9817 5.71633 27.3697 5.71633C23.3898 5.71633 18.7048 2.17 13.6168 2.17C9.08281 2.17 5.95965 5.88252 5.95965 9.65081C5.95965 13.3636 7.92427 14.5826 9.98968 15.4138L10.0402 15.192C9.38517 14.7488 8.93173 13.9732 8.93173 12.7539C8.93173 11.0916 10.3423 9.70635 12.1056 9.70635C16.3875 9.70635 23.289 13.6406 27.5711 13.6406H27.974V19.1821L23.9943 23.0055L27.974 26.9399V35.0304C26.3118 35.6951 24.5988 35.9726 22.8356 35.9726C16.1859 35.9726 11.9545 31.5391 11.9545 24.1692C11.9545 22.3962 12.1559 20.6782 12.6093 19.0157L15.934 17.4089V33.7005L22.6845 30.4314V13.7515L12.7604 18.6277C13.7678 15.4138 15.8333 13.0865 18.3018 11.7566L18.2515 11.5904C11.6017 13.1974 5.15356 18.7388 5.15356 27.0508C5.15356 36.6374 12.5085 43.2872 21.0727 43.2872C30.1402 43.2872 35.2787 36.6374 35.329 26.9399H35.1779Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li className="War">
                <strong>
                  <span>Russia-Ukraine War</span>
                </strong>
                <span className="arrow">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    size="2xs"
                    style={{ marginLeft: "5px" }}
                  />
                </span>
              </li>
              <div className="columns" style={{ borderLeft: "2px solid #ddd" }}>
                <strong >LIVE</strong>
              </div>
              <strong className="live">LIVE</strong>
              <div className="inline-p">
                <li className="list-item">Updates</li>
                <li className="list-item">Photos</li>
                <li className="list-item">Maps: Ukraine’s Counteroffensive</li>
                <li className="list-item">The Conflict’s 5 Theaters</li>
                <li className="list-item">Ukrainian Market Tragedy</li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
