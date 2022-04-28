import Signup from "../../Components/EventsPage/Signup";
import LessonsMobile from "../../Components/EventsPage/LessonsMobile";
import Teachers from "../../Components/EventsPage/Teachers";
import Header from "../../Components/EventsPage/Header";

export default function events() {
  return (
    <div className="max-h-screen overflow-y-scroll  scrollbar-hide relative z-10  scroll-smooth">
      <Header />
      <Signup />
      <LessonsMobile />
      <Teachers />
    </div>
  );
}
