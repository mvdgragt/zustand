import { useUserStore } from "../stores/userStore";

const AvatarDisplay = () => {
  const userName = useUserStore((state) => state.userName);
  const setUserName = useUserStore((state) => state.setUserName);

  return (
    <div>
      <div>Hello, {userName}!</div>
      <button onClick={() => setUserName("Michiel")}>Change Name</button>
    </div>
  );
};

export default AvatarDisplay;
