import { useUserStore } from "../stores/userStore";
import { useAdviceStore } from "../stores/adviceStore";

const AvatarDisplay = () => {
  const userName = useUserStore((state) => state.userName);
  const setUserName = useUserStore((state) => state.setUserName);

  const advice = useAdviceStore((state) => state.advice);
  const fetchAdviceAsync = useAdviceStore((state) => state.fetchAdviceAsync);
  return (
    <div>
      <div>Hello, {userName}!</div>
      <button onClick={() => setUserName("Michiel")}>Change Name</button>
      <hr />
      <div>{advice}</div>
      <button onClick={fetchAdviceAsync}>Get Advice</button>
    </div>
  );
};

export default AvatarDisplay;
