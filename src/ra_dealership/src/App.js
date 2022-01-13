import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { CarCreate, CarEdit, CarList } from "./car";
import { EngineCreate, EngineEdit, EngineList } from "./engine";
import { ManufacturerCreate, ManufacturerEdit, ManufacturerList } from "./manufacturer";
import { OwnerCreate, OwnerEdit, OwnerList } from "./owner";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="cars" list={CarList} create={CarCreate} edit={CarEdit} />
    <Resource name="engines" list={EngineList} create={EngineCreate} edit={EngineEdit} />
    <Resource name="manufacturers" list={ManufacturerList} create={ManufacturerCreate} edit={ManufacturerEdit} />
    <Resource name="owners" list={OwnerList} create={OwnerCreate} edit={OwnerEdit} />
  </Admin>
);

export default App;