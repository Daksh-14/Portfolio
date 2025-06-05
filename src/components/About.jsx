const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-16">
      <section className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Hey, I'm <span className="text-blue-600">Daksh Valecha</span>
        </h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
          A full-stack developer & competitive programmer who loves turning ideas into code.
        </p>
        <div className="mt-6 space-x-4">
          <a href="/resume.pdf" target="_blank" className="border border-blue-600 text-blue-600 text-blue-600 px-4 py-2 text-lg rounded hover:bg-gray-700 transition">Resume</a>
          <a href="#projects" className="border border-blue-600 text-blue-600 px-4 py-2 rounded text-lg hover:bg-gray-700 transition">View Projects</a>
        </div>
      </section>
      <section className="">
        <h3 className="text-center text-2xl md:text-3xl font-semibold text-white pb-6">About Me</h3>
        <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
          I'm a Computer Science student at IIIT Pune who enjoys turning ideas into scalable web applications. I love building systems end-to-end — from backend APIs to intuitive frontend interfaces.
          <br /><br />
          I have strong experience with Java, JavaScript, and C++, and have built several full-stack projects using Spring Boot, React, PostgreSQL, Redis, and Docker. My focus is on clean architecture, performance, and solving real-world problems.
          <br /><br />
          I’m also a passionate competitive programmer — 5⭐ on CodeChef, Expert on Codeforces, and a multi-time ICPC regionalist. These experiences have shaped my approach to problem-solving and debugging.
        </p>
      </section>
    </div>
  );
};

export default About;
