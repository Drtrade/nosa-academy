import MetaTags from "../components/common/MetaTags";
import AcademyOfferings from "../components/home/AcademyOfferings";
import AcademyPrograms from "../components/home/AcademyPrograms";
import CoachingPhilosophy from "../components/home/CoachingPhilosophy";
import FounderIntro from "../components/home/FounderIntro";
import Hero from "../components/home/hero";
import TrainingSchedule from "../components/home/trainingSchedule";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MetaTags
        title="Nosa Igiebor Sports Academy | Elite Football Training in Nigeria"
        description="Join Nosa Igiebor Sports Academy for world-class football training. Founded by Nigerian international footballer Nosa Igiebor, we develop young talent through professional coaching, and leadership mindset."
        keywords="football academy Nigeria, Nosa Igiebor, sports training, youth football, soccer academy"
        canonical="/"
        ogImage="https://www.nosasportsacademy.com/images/og-home.jpg"
      />
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
