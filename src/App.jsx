import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import frontend from "./images/313915854_5951658954845725_5577943954119323827_n.jpg";
import backend from "./images/313912156_1249708565812273_3741738686780476435_n.jpg";
import database from "./images/314382463_2355337631287113_6392227377277225999_n (1).png";
import programming from "./images/314988111_1099251944122087_5151255841213690104_n.jpg";
import website from "./images/314894113_2122459371275118_515954801165621717_n.jpg";
import window_cl from "./images/315005969_499761982086482_2794716751457361261_n.jpg";
import mobilie_app from "./images/315017705_634891798117959_6194874285304918116_n.jpg";

const App = () => {
  const [roadMap, setRoadMap] = useState([]);
  const [identify, setIdentify] = useState("div1");

  useEffect(() => {
    fetch("../data/db.json")
      .then(res => res.json())
      .then(data => setRoadMap(data));
  }, []);

  const settingImg = img => {
    switch (img) {
      case "programming":
        return specificImg.programming;
      case "website":
        return specificImg.website;
      case "window":
        return specificImg.window;
      case "mobile_app":
        return specificImg.mobilie_app;
    }
  };

  const articles = (header, article, img) => (
    <article>
      <h2>{header}</h2>
      <p>{article}</p>
      {img === "programming" ? (
        <img src={programming} />
      ) : img === "website" ? (
        <img src={website} />
      ) : img === "window" ? (
        <img src={window_cl} />
      ) : (
        <img src={mobilie_app} />
      )}
    </article>
  );

  const divs = divs => {
    const data = roadMap.data;
    switch (divs) {
      case "div2":
        return articles(data[1].header, data[1].article, data[1].img);
      case "div3":
        return articles(data[2].header, data[2].article, data[2].img);
      case "div4":
        return articles(data[3].header, data[3].article, data[3].img);
      default:
        return articles(data[0].header, data[0].article, data[0].img);
    }
  };
  return (
    <div className="main_container">
      <nav>
        <div>
          <h2 className="head">B.G</h2>
        </div>
        <div>
          <Router>
            <ul className="routes">
              <li>
                <Link to="/#home">HOME</Link>
              </li>
              <li>
                <Link to="#development">DEVELOPMENT</Link>
              </li>
              <li>
                <Link to="/#cyber_security">CYBER SECURITY</Link>
              </li>
              <li>
                <Link to="/#cloud_computing">CLOUD COMPUTING</Link>
              </li>
            </ul>
          </Router>
        </div>
      </nav>
      <main>
        {roadMap.length !== 0 ? (
          <div className="container">
            <div className="article_container">
              {divs(identify)}
              <div className="circles">
                <div onClick={() => setIdentify("div1")}></div>
                <div onClick={() => setIdentify("div2")}></div>
                <div onClick={() => setIdentify("div3")}></div>
                <div onClick={() => setIdentify("div4")}></div>
              </div>
            </div>
          </div>
        ) : (
          <p>Data is still fetching...</p>
        )}
        <hr />
        <div className="road_map">
          <p className="rm">ROADMAP</p>
          <p className="fb">FOR BEGINNERS</p>
          <div className="road_map_img">
            <div className="first">
              <div className="st_img">
                <img src={frontend} alt="frontend" />
                <p>FRONTEND</p>
                <button>frontend</button>
              </div>
            </div>
            <div className="second">
              <div className="nd_img">
                <img src={backend} alt="backend" />
                <p>BACKEND</p>
                <button>backend</button>
              </div>
            </div>
            <div className="third">
              <div className="rd_img">
                <img src={database} alt="database" />
                <p>DATABASE</p>
                <button>database</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
