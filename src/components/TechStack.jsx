import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiSolidity } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const TechStack = () => {

    const techStack = [
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "JavaScript", icon: <IoLogoJavascript />, color: "#f7df1e" },
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Spring Boot", icon: <BiLogoSpringBoot />, color: "#6db33f" },
        { name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#336791" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
        { name: "Redis", icon: <DiRedis />, color: "#D82C20" },
        { name: "Solidity", icon: <SiSolidity />, color: "#3C3C3D" },
        { name: "C++", icon: <TbBrandCpp />, color: "#00599C" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
    ];


    return (
        <div className="max-w-5xl mx-auto px-4 pb-10">
            <section className="text-center ">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Tech Stack</h3>
                <p className="text-gray-400 text-sm md:text-lg mb-6">
                    Technologies I’ve worked with across projects and competitions.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStack.map(({ name, icon, color }) => (
                        <div key={name} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded shadow text-white">
                            <div className="p-1 rounded-full bg-white">
                                <div className="text-xl" style={{ color }}>{icon}</div>
                            </div>

                            <span className="text-lg font-normal">{name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div >
    );
};

export default TechStack;