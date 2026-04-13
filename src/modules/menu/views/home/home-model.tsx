import { useRouter } from "expo-router";

export const useHomeModel = () => {
  const nav = useRouter();

<<<<<<< HEAD
  const handleLearn = () => nav.push("/learn");

  const handleSimulator = () => nav.push("/simulator");

  const handleChecklist = () => nav.push("/checklist");

  const handleQuiz = () => nav.push("/quiz");

  const handleForum = () => nav.push("/forum");

  const handleProfile = () => nav.push("/profile");
=======
  const handleLearn = () => nav.push("/simulator");

  const handleSimulator = () => nav.push("/simulator");

  const handleChecklist = () => nav.push("/simulator");

  const handleQuiz = () => nav.push("/simulator");

  const handleForum = () => nav.push("/simulator");

  const handleProfile = () => nav.push("/simulator");
>>>>>>> 195ceabf4f6235ed66b70bc503105a0dfd031ee3

  return {
    handleLearn,
    handleSimulator,
    handleChecklist,
    handleQuiz,
    handleForum,
    handleProfile,
  };
};
