import { FaGithub, FaLinkedin } from "react-icons/fa";

import "../../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer foreground-color">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">Catch me on:</div>
          <div className="col">Contact me:</div>
          <div className="col"></div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <a href="https://www.linkedin.com/in/francisco-contreras-191202249/">
              <FaLinkedin />
            </a>
          </div>
          <div className="col">fcontreras102301@gmail.com</div>
          <div className="col"></div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <a href="https://github.com/Fran-cis-co">
              <FaGithub />
            </a>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
      {/* <table className="table table-borderless foreground-color">
        <thead>
          <tr>
            <th scope="col">Catch me on:</th>
            <th scope="col">Contact me:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <a href="https://www.linkedin.com/in/francisco-contreras-191202249/">
                <FaLinkedin />
              </a>
            </th>
            <td>fcontreras102301@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">
              <a href="https://github.com/Fran-cis-co">
                <FaGithub />
              </a>
            </th>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Footer;
