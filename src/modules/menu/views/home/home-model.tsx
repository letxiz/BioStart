import { useRouter } from "expo-router";

export const useHomeModel = () => {
  const nav = useRouter();

  const handleLearn = () => nav.push("/simulator");

  const handleSimulator = () => nav.push("/simulator");

  const handleChecklist = () => nav.push("/simulator");

  const handleQuiz = () => nav.push("/simulator");

  const handleForum = () => nav.push("/simulator");

  const handleProfile = () => nav.push("/simulator");

  return {
    handleLearn,
    handleSimulator,
    handleChecklist,
    handleQuiz,
    handleForum,
    handleProfile,
  };
};
