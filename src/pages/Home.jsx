import About from "../components/About.jsx";
import Achievements from "../components/Achievements.jsx";
import TechStack from "../components/TechStack.jsx";

const Home = () => {
    return (
        <div className="bg-gray-800 min-h-screen">
            <About />
            <TechStack />
            <Achievements />
        </div>
    );
}
export default Home;