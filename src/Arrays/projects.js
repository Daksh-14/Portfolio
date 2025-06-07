export const projects = [
  {
    name: "CodeCollab",
    description: "A real-time collaborative coding platform with support for multiple files, language execution inside Docker containers, and VS Code-like UX.",
    detail: `This is a full-stack real-time collaborative code editor inspired by tools like Replit and VS Code. The platform allows multiple users to collaboratively edit code with real-time synchronization and multi-file support. The frontend, built with React and Monaco Editor, provides a familiar development experience, complete with a navigable file tree powered by react-arborist. Users can create, delete files and folders, and select a main file for execution. All code updates are instantly shared using WebSockets, giving the feel of seamless live collaboration.

    The backend, developed in Spring Boot, provides WebSocket-based synchronization and REST APIs for session and file management. Redis is integrated both as a Pub/Sub system for broadcasting real-time updates across server instances, and as a cache layer to store active session states and file data for faster access and reduced database load. All code is executed securely inside Docker containers with support for Java, Python, and C++, maintaining sandboxed environments for each run. This architecture ensures real-time performance, horizontal scalability, and safe multi-user collaboration.`,
    techStack: ["React", "Spring Boot", "Redis", "Docker", "PostgreSQL","Tailwind CSS"],
    links: {
      github: "https://github.com/Daksh-14/CollabCode",
      demo: "https://collabcode-frontend.onrender.com/",
    },
  },
  {
    name: "RealTokenize",
    description: "A blockchain-based platform to tokenize real estate assets into ERC-20 tokens, allowing fractional ownership and seamless trading via a custom liquidity pool.",
    detail: `This project enables the tokenization of real estate assets by representing property ownership through ERC-20 tokens on the Ethereum blockchain. Each property is registered through a RealEstateTokenFactory smart contract, which creates new tokens for individual assets. These tokens represent fractional ownership and can be freely transferred or sold.

A custom RealEstateLiquidityPool contract allows users to list their tokens for sale and enables Special Purpose Vehicles (SPVs) to fulfill those requests — offering a decentralized yet controlled exchange system. Only SPVs have the rights to set property-specific data like token price, rental yield, or updates.

The backend, built with Express.js and MongoDB, handles user interactions with smart contracts, manages metadata, and provides endpoints to create, view, and manage properties. On the frontend, the React application offers users a seamless experience to create, view, and trade property tokens, with real-time blockchain interaction via Ethers.js.

The platform ensures transparency, security, and global accessibility in real estate investment, while supporting role-based access control, SPV-only operations, and modular smart contract interaction patterns.


`,
    techStack: ["React", "Solidity", "Node.js", "Ether.js", "MongoDB", "Tailwind CSS"],
    links: {
      github: "https://github.com/Daksh-14/RealEstateTokenization",
      demo: "",
    },
  },
  {
    name: "TaskTracker",
    description: "A timezone-aware task assignment and tracking platform designed to enhance collaboration in distributed teams, it features intuitive dashboards, calendar-based task views, and visual status breakdowns.",
    detail: `This full-stack Task Tracker was developed to support productivity in distributed teams working across time zones. It allows managers to assign tasks, set deadlines, and monitor progress, while team members can view and update their responsibilities through a clean and responsive interface.

The platform features a calendar view, enabling users to visualize upcoming tasks by date, along with a dashboard that displays task distribution and progress using pie charts and tabular summaries. These visual cues help teams stay aligned without constant back-and-forth.

Built with React on the frontend and Node.js with PostgreSQL on the backend, the application handles timezone normalization for accurate scheduling, and role-based access to distinguish between managers and contributors. It's particularly effective for teams working remotely, where clear visibility and lightweight planning tools are essential.`,
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: {
      github: "https://github.com/Daksh-14/TaskTracker",
      demo: "https://tasktracker-frontend-fkuz.onrender.com/",
    },
  },
  {
    name: "SecureCloud Drive",
    description: "A decentralized and secure cloud storage system using IPFS and blockchain, allowing users to upload files via wallet authentication, manage access permissions, and retain full ownership of their data.",
    detail: `This decentralized cloud storage system enables users to securely upload, access, and manage files using blockchain and IPFS. Built for privacy and ownership, the application uses wallet-based authentication (e.g., MetaMask) to map users to their uploaded files. Files are stored on Pinata’s IPFS gateway, where each upload returns a unique content-addressed hash. These hashes are then stored on-chain, associated with the uploader’s wallet address, ensuring data immutability and ownership.

The system supports granular access control, allowing users to grant or revoke access to specific wallet addresses for any file. This permission layer is enforced on the blockchain, providing transparent and tamper-proof authorization. The combination of smart contracts and IPFS ensures that users retain full control over their data without relying on centralized cloud providers.

`,
    techStack: ["React", "Solidity", "Pinata (IPFS)", "Ether.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/Daksh-14/SecureCloud-Drive",
      demo: "",
    },
  },
  {
    name: "NutriPlan",
    description: "A personalized nutrition and meal planning platform with an integrated AI chatbot, built using React, Spring Boot, and PostgreSQL. It helps users generate tailored diet plans, track macronutrients, and get instant dietary guidance.",
    detail: `NutriPlan is a tech-driven platform designed to make healthy living effortless. It features a React-based frontend with an interactive Weekly Meal Planner, NutriScan (food image recognition), and a curated library of nutrition blogs.
Its AI-powered chatbot, built using OpenAI’s models and LangChain, provides real-time, personalized dietary guidance, answering food-related queries and adjusting recommendations based on user behavior.
The hybrid backend combines Node.js and Express for REST API requests with Flask-based microservices handling image classification and machine learning inference. PostgreSQL securely manages user data, plans, and food logs, while a scikit-learn pipeline tracks eating habits to refine dietary suggestions over time.
By integrating web development, AI, and data science, NutriPlan delivers personalized, scalable healthtech solutions for smarter nutrition decisions.`,
    techStack: ["React", "Node.js", "Flask", "PostgreSQL", "LangChain"],
    links: {
      github: "https://github.com/Daksh-14/hackiiitp",
      demo: "https://nutriplan-ems7.onrender.com/",
    },
  },
];

