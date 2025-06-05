import CodeForces from "../assets/codeforces.png";
import CodeChef from "../assets/CodeChef.svg";
import LeetCode from "../assets/leetcode.png";
import IICPC from "../assets/IICPC.png";

const achievements = [
    {
        platform: "ICPC",
        icon: "🎓",
        title: "ICPC Chennai Regionalist (2025)",
        subtitle: "Ranked 38th in the regionals",
    },
    {
        platform: "ICPC",
        icon: "🎓",
        title: "ICPC Amritapuri Regionalist (2025)",
        subtitle: "Ranked 95th in the regionals",
    },
    {
        platform: "IICPC Codefest",
        icon: <img src={IICPC} alt="IICPC" className="w-6 h-6" />,
        title: "IICPC Codefest Regionals 2025",
        subtitle: "Ranked 49th in the regionals",
    },
    {
        platform: "IICPC Codefest",
        icon: <img src={IICPC} alt="IICPC" className="w-6 h-6" />,
        title: "IICPC Codefest Preliminary 2025",
        subtitle: "Ranked 107th in the preliminary round",
    },
    {
        platform: "CodeChef",
        icon: <img src={CodeChef} alt="CodeChef" className="w-6 h-6" />,
        title: "5★ at CodeChef",
        subtitle: "Rating: 2131 · Top 0.5% of 200,000+ users",
    },
    {
        platform: "LeetCode",
        icon: <img src={LeetCode} alt="LeetCode" className="w-6 h-6" />,
        title: "Guardian at LeetCode",
        subtitle: "Rating: 2384 · Top 0.4% of 680,000+ users",
    },
    {
        platform: "Codeforces",
        icon: <img src={CodeForces} alt="Codeforces" className="w-6 h-6" />,
        title: "Expert at Codeforces",
        subtitle: "Rating: 1693",
    },
    {
        platform: "OptiGo",
        icon: "🥇",
        title: "1st Place - OptiGo Coding Contest",
        subtitle: "Inter-IIIT competition by IIIT Bhopal",
    },
];


const Achievements = () => {
    return (
        <section id="achievements" className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                Achievements
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {achievements.map(({ platform, icon, title, subtitle }, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-800 shadow-md border border-gray-700 hover:shadow-lg transition-shadow"
                    >
                        <div className="text-3xl text-primary mt-1">
                            {typeof icon === "string" ? <span>{icon}</span> : icon}
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white">{title}</h3>
                            <p className="text-xs text-gray-400">{subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Achievements;