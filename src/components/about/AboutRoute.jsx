import { Route } from "react-router-dom";
import AboutPage from "./AboutPage";

const AboutRoute = (
  <Route path={process.env.PUBLIC_URL + "/about"} component={AboutPage} />
);

export default AboutRoute;
