import ProfileSection from "./ProfileSection";
import { UserNameProp } from "../types/UserNameTypes";

function UserPanel({ userName, setUserName }: UserNameProp) {
  return <ProfileSection userName={userName} setUserName={setUserName} />;
}

export default UserPanel;
