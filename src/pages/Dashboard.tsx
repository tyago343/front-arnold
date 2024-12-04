import Collapsible from "../components/ui/Collapsible/index";
import AuthenticatedLayout from "../layouts/authenticated.layout";
import { IndoorMock } from "../types/Indoor";

const Dashboard = () => {
  return (
    <AuthenticatedLayout>
      <Collapsible indoor={IndoorMock}>
        <div>
          <p>Humidity: {IndoorMock.humidity}</p>
          <p>Temperature: {IndoorMock.temperature}</p>
        </div>
      </Collapsible>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
