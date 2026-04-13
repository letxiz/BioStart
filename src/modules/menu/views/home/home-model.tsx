import { useRouter } from "expo-router";

export const useHomeModel = () => {
  const nav = useRouter();

  const handleLearn = () => nav.push("/learn");

  const handleSimulator = () => nav.push("/simulator");

  const handleChecklist = () => nav.push("/checklist");

  const handleQuiz = () => nav.push("/quiz");

  const handleForum = () => nav.push("/forum");

  const handleProfile = () => nav.push("/profile");

  return {
    handleLearn,
    handleSimulator,
    handleChecklist,
    handleQuiz,
    handleForum,
    handleProfile,
  };
};
