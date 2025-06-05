import About from "../components/About";
import Achievements from "../components/Achievements";
import TechStack from "../components/TechStack";

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