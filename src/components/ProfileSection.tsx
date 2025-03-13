import AvatarDisplay from "./AvatarDisplay";
import { UserNameProp } from "../types/UserNameTypes";

function ProfileSection({ userName, setUserName }: UserNameProp) {
  return <AvatarDisplay userName={userName} setUserName={setUserName} />;
}

export default ProfileSection;
