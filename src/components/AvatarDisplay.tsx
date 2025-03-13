import { UserNameProp } from "../types/UserNameTypes";

function AvatarDisplay({ userName, setUserName }: UserNameProp) {
  return (
    <div>
      <div>Hello, {userName}!</div>
      <button onClick={() => setUserName("Michiel")}>Change Name</button>
    </div>
  );
}

export default AvatarDisplay;
