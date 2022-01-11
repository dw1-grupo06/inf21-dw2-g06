import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="cars" list={ListGuesser} />
    <Resource name="engines" list={ListGuesser} />
    <Resource name="manufacturers" list={ListGuesser} />
    <Resource name="owners" list={ListGuesser} />
  </Admin>
);

export default App;
