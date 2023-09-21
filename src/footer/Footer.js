import { Link, NavLink } from "react-router-dom";
import { MdSubscriptions, MdGames } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { GiCook } from "react-icons/gi";
import logo from "../images/new-york-times-logo.png";
// import { useGlobalContext } from "../context";
import style from "./footer.module.css";

import "./Footer.css";
const Footer = () => {
  // const { sections, formatSection } = useGlobalContext();

  // Scroll to top when a nav link is clicked
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className={style.footerContainer}>
        <hr />
        <Link to="/" onClick={scrollToTop}>
          <img src={logo} alt="New York Times logo" className={style.logo} />
        </Link>
        <div>
          <div className="footer-news">
            <h3 className="head">NEWS</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text">Home Page</a>
              </li>
              <li className="News">
                <a className="news_text">World</a>
              </li>
              <li className="News">
                <a className="news_text">Coronavirus</a>
              </li>
              <li className="News">
                <a className="news_text">U.S News</a>
              </li>
              <li className="News">
                <a className="news_text">U.S. Politics</a>
              </li>
              <li className="News">
                <a className="news_text">New York</a>
              </li>
              <li className="News">
                <a className="news_text">Business</a>
              </li>
              <li className="News">
                <a className="news_text">Tech</a>
              </li>
              <li className="News">
                <a className="news_text">Science</a>
              </li>
              <li className="News">
                <a className="news_text">Sports</a>
              </li>
              <li className="News">
                <a className="news_text">Wildfire Tracker</a>
              </li>
              <li className="News">
                <a className="news_text">Obituaries</a>
              </li>
              <li className="News">
                <a className="news_text">Today's Paper</a>
              </li>
              <li className="News">
                <a className="news_text">Trending</a>
              </li>
              <li className="News">
                <a className="news_text">Correction</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">OPINION</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text">Today's Opinion</a>
              </li>
              <li className="News">
                <a className="news_text">Columnist</a>
              </li>
              <li className="News">
                <a className="news_text">Editorials</a>
              </li>
              <li className="News">
                <a className="news_text">Guest Essays</a>
              </li>
              <li className="News">
                <a className="news_text">Letters</a>
              </li>
              <li className="News">
                <a className="news_text">Sunday Opinion</a>
              </li>
              <li className="News">
                <a className="news_text">Opinion Video</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">ARTS</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text">Today's Arts</a>
              </li>
              <li className="News">
                <a className="news_text">Art & Design</a>
              </li>
              <li className="News">
                <a className="news_text">Books</a>
              </li>
              <li className="News">
                <a className="news_text">Best Sellar Book List</a>
              </li>
              <li className="News">
                <a className="news_text">Dance</a>
              </li>
              <li className="News">
                <a className="news_text">Movies</a>
              </li>
              <li className="News">
                <a className="news_text">Music</a>
              </li>
              <li className="News">
                <a className="news_text">Pop Culture</a>
              </li>
              <li className="News">
                <a className="news_text">Television</a>
              </li>
              <li className="News">
                <a className="news_text">Theater</a>
              </li>
              <li className="News">
                <a className="news_text">Videos: Arts</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">LIVING</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text">Automotive</a>
              </li>
              <li className="News">
                <a className="news_text">Games</a>
              </li>
              <li className="News">
                <a className="news_text">Education</a>
              </li>
              <li className="News">
                <a className="news_text">Food</a>
              </li>
              <li className="News">
                <a className="news_text">Health</a>
              </li>
              <li className="News">
                <a className="news_text">Jobs</a>
              </li>
              <li className="News">
                <a className="news_text">Magazine</a>
              </li>
              <li className="News">
                <a className="news_text">Parenting</a>
              </li>
              <li className="News">
                <a className="news_text">Real Estate</a>
              </li>
              <li className="News">
                <a className="news_text">Style</a>
              </li>
              <li className="News">
                <a className="news_text">T Magazine</a>
              </li>
              <li className="News">
                <a className="news_text">Travel</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">MORE</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text">Reader Center</a>
              </li>
              <li className="News">
                <a className="news_text">The Athletic</a>
              </li>
              <li className="News">
                <a className="news_text">Wirecutter</a>
              </li>
              <li className="News">
                <a className="news_text">Cooking</a>
              </li>
              <li className="News">
                <a className="news_text">Headway</a>
              </li>
              <li className="News">
                <a className="news_text">Live Events</a>
              </li>
              <li className="News">
                <a className="news_text">The Learning Network</a>
              </li>
              <li className="News">
                <a className="news_text">Tools & Service</a>
              </li>
              <li className="News">
                <a className="news_text">Podcasts</a>
              </li>
              <li className="News">
                <a className="news_text">Video</a>
              </li>
              <li className="News">
                <a className="news_text">Graphics</a>
              </li>
              <li className="News">
                <a className="news_text">TimesMachine</a>
              </li>
              <li className="News">
                <a className="news_text">Times Stone</a>
              </li>
              <li className="News">
                <a className="news_text">Manage My Account</a>
              </li>
              <li className="News">
                <a className="news_text">NYTLicensing</a>
              </li>
            </ul>
          </div>
          <div className="footer_opinion">
            <div className="column" style={{ borderLeft: "1px solid #ddd" }}>
              <div className="column">
                <h3 className="head-subs">Subscribe</h3>
                <div className="subscribe-row">
                  <a className="subscribe-link">
                    <p className="subs-row">
                      <BsNewspaper style={{ marginRight: "10px" }} /> Home
                      Delivery
                    </p>
                  </a>
                  <a className="subscribe-link">
                    <p className="subs-row">
                      <MdSubscriptions style={{ marginRight: "10px" }} />{" "}
                      Subscription
                    </p>
                  </a>
                  <a className="subscribe-link">
                    <p className="subs-row">
                      <MdGames style={{ marginRight: "10px" }} /> Games
                    </p>
                  </a>
                  <a className="subscribe-link">
                    <p className="subs-row">
                      <GiCook style={{ marginRight: "10px" }} /> Cooking
                    </p>
                  </a>
                </div>
                <ul className="News-list">
                  <li className="news-list">Email Newsletter</li>
                  <li className="news-list">Corporate Subscription</li>
                  <li className="news-list">Education Rate</li>
                </ul>
              </div>

              <div className="column">
                <div
                  className="column"
                  style={{
                    borderTop: "1px solid #ddd",
                    marginTop: "60px",
                    marginLeft: "10%",
                    paddingTop: "20px",
                  }}
                >
                  <ul className="News-list-bottom">
                    <li className="news-list-bottom">Mobile Application</li>
                    <li className="news-list-bottom">Replica Edition</li>
                    <li className="news-list-bottom">International</li>
                    <li className="news-list-bottom">Canada</li>
                    <li className="news-list-bottom">Espanol</li>
                    <li className="news-list-bottom"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p>&copy; 2023 The New York Times Company</p>
            <p>NYT Co</p>
            <p>Contact Us</p>
            <p>Accessibility</p>
            <p>Work with us</p>
            <p>Advertise</p>
            <p>T Brand Studio</p>
            <p>Your Ad Choices</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Terms of Sale</p>
            <p>Site Map</p>
            <p>Help</p>
            <p>Subscriptions</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
