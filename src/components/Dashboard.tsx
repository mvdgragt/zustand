import UserPanel from "./UserPanel";
import { UserNameProp } from "../types/UserNameTypes";

function Dashboard({ userName, setUserName }: UserNameProp) {
  return <UserPanel userName={userName} setUserName={setUserName} />;
}

export default Dashboard;
