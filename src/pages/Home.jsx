import AcademyOfferings from "../components/home/AcademyOfferings";
import AcademyPrograms from "../components/home/AcademyPrograms";
import CoachingPhilosophy from "../components/home/CoachingPhilosophy";
import FounderIntro from "../components/home/FounderIntro";
import Hero from "../components/home/hero";
import TrainingSchedule from "../components/home/trainingSchedule";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FounderIntro />
      <AcademyOfferings />
      <AcademyPrograms />
      <CoachingPhilosophy />
      <TrainingSchedule />
      
    </div>
  );
};

export default Home;
