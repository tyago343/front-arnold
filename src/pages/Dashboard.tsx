import { Toggle } from "../components/ui/Toggle/Toggle";
import Collapsible from "../components/ui/Collapsible/index";
import AuthenticatedLayout from "../layouts/authenticated.layout";
import { IndoorMock } from "../types/Indoor";
import { useState } from "react";

const Dashboard = () => {
  const [fansStatus, setFansStatus] = useState(() => IndoorMock.fansStatus);
  const [waterPumpStatus, setWaterPumpStatus] = useState(
    () => IndoorMock.waterPumpStatus
  );
  return (
    <AuthenticatedLayout>
      <Collapsible indoor={IndoorMock}>
        <section>
          <div className="grid grid-cols-3 pb-5 items-center">
            <p>Temperature: {IndoorMock.temperature}</p>
            <p>Humidity: {IndoorMock.humidity}</p>
            <div className="flex justify-center">
              <Toggle
                checked={fansStatus}
                onChange={() => setFansStatus(!fansStatus)}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 pb-5 items-center">
            <p>PH: {IndoorMock.ph} </p>
            <p>EC: {IndoorMock.ec}</p>
            <div className="flex justify-center">
              <Toggle
                checked={waterPumpStatus}
                onChange={() => setWaterPumpStatus(!waterPumpStatus)}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">Amnesia</td>
                  <td className="px-4 py-2">12/12/2024 - 19/05/2025</td>
                  <td className="px-4 py-2">Riego 15/06</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Critical</td>
                  <td className="px-4 py-2">15/01/2025 - 20/06/2025</td>
                  <td className="px-4 py-2">Fertilizar 30/06</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Somango</td>
                  <td className="px-4 py-2">20/02/2025 - 25/07/2025</td>
                  <td className="px-4 py-2">Fertilizar 05/07</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Collapsible>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
