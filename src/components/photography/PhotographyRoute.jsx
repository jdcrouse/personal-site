import { Route } from "react-router-dom";
import PhotographyPage from "./PhotographyPage";

const PhotographyRoute = (
  <Route
    path={process.env.PUBLIC_URL + "/photography"}
    component={PhotographyPage}
  />
);

export default PhotographyRoute;
