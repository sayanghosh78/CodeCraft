
const coursesData = [
  {
    id: "backend-engineering",

    section: {
      number: "01",
      label: "FLAGSHIP PROGRAM",
      headingMuted: "You can build APIs.",
      headingHighlight: "Now learn what happens underneath.",
    },

    category: "BACKEND",
    instructor: "Rakesh K",
    rating: 4.9,
    title: "Backend Engineering from First Principles",
    description:
      "Go beneath frameworks to understand how backend systems actually work—from TCP and HTTP to databases, Linux, Docker and system design.",
    technologies: [
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
    ],
    community: {
      count: 1350,
      label: "engineers",
      avatars: [
        "https://i.pravatar.cc/100?img=12",
        "https://i.pravatar.cc/100?img=11",
        "https://i.pravatar.cc/100?img=13",
        "https://i.pravatar.cc/100?img=14",
      ],
    },
    price: 4990,
    includedInPlatform: true,
    instructorImage: "/images/instructors/rakesh-k.png",
    slug: "/courses/backend-engineering",
    curriculum: [
      { id: 1, title: "DNS, TCP, UDP & HTTP internals" },
      { id: 2, title: "Linux, SSH & Bash scripting" },
      { id: 3, title: "Web servers & API design" },
      { id: 4, title: "SQL, data modeling & joins" },
      { id: 5, title: "Indexes, transactions & scaling DBs" },
      { id: 6, title: "REST vs GraphQL vs gRPC" },
      { id: 7, title: "Sessions, JWT & OAuth2" },
      { id: 8, title: "Web security, testing & monitoring" },
      { id: 9, title: "Docker, CI/CD & zero-downtime deploys" },
      { id: 10, title: "System design: HLD, LLD & patterns" },
    ],
  },

  {
    id: "full-stack-development",

    section: {
      number: "02",
      label: "FULL STACK PROGRAM",
      headingMuted: "Build complete applications.",
      headingHighlight: "From frontend to backend.",
    },

    category: "FULL STACK",
    instructor: "Arjun Mehta",
    rating: 4.8,
    title: "Full Stack Development from Zero to Production",
    description:
      "Build production-ready web applications with modern frontend tools, secure APIs, databases, authentication and deployment workflows.",
    technologies: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
    community: {
      count: 2200,
      label: "developers",
      avatars: [
        "https://i.pravatar.cc/100?img=15",
        "https://i.pravatar.cc/100?img=16",
        "https://i.pravatar.cc/100?img=17",
        "https://i.pravatar.cc/100?img=18",
      ],
    },
    price: 3990,
    includedInPlatform: true,
    instructorImage: "/images/instructors/arjun-mehta.png",
    slug: "/courses/full-stack-development",
    curriculum: [
      { id: 1, title: "HTML, CSS & modern JavaScript" },
      { id: 2, title: "React components, hooks & state" },
      { id: 3, title: "Routing & application architecture" },
      { id: 4, title: "Node.js & Express fundamentals" },
      { id: 5, title: "REST APIs & middleware" },
      { id: 6, title: "MongoDB & Mongoose" },
      { id: 7, title: "Authentication & authorization" },
      { id: 8, title: "File uploads & cloud storage" },
      { id: 9, title: "Testing, security & optimization" },
      { id: 10, title: "Deployment & production workflows" },
    ],
  },

  {
    id: "devops-cloud",

    section: {
      number: "03",
      label: "CLOUD PROGRAM",
      headingMuted: "Deploy your applications.",
      headingHighlight: "Scale them with confidence.",
    },

    category: "DEVOPS",
    instructor: "Priya Sharma",
    rating: 4.9,
    title: "DevOps and Cloud Engineering Masterclass",
    description:
      "Learn how modern applications are deployed, monitored and scaled using Linux, containers, CI/CD pipelines and cloud infrastructure.",
    technologies: [
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/844FBA" },
    ],
    community: {
      count: 1800,
      label: "engineers",
      avatars: [
        "https://i.pravatar.cc/100?img=20",
        "https://i.pravatar.cc/100?img=21",
        "https://i.pravatar.cc/100?img=22",
        "https://i.pravatar.cc/100?img=23",
      ],
    },
    price: 4490,
    includedInPlatform: true,
    instructorImage: "/images/instructors/priya-sharma.png",
    slug: "/courses/devops-cloud",
    curriculum: [
      { id: 1, title: "Linux administration & shell scripting" },
      { id: 2, title: "Networking & cloud fundamentals" },
      { id: 3, title: "Git & collaborative workflows" },
      { id: 4, title: "Docker images & containers" },
      { id: 5, title: "Kubernetes architecture & workloads" },
      { id: 6, title: "CI/CD with GitHub Actions" },
      { id: 7, title: "AWS compute, storage & networking" },
      { id: 8, title: "Infrastructure as code with Terraform" },
      { id: 9, title: "Monitoring, logging & alerting" },
      { id: 10, title: "Production deployment & scaling" },
    ],
  },

  {
    id: "data-structures-algorithms",

    section: {
      number: "04",
      label: "COMPUTER SCIENCE",
      headingMuted: "Think like a programmer.",
      headingHighlight: "Master problem solving.",
    },

    category: "COMPUTER SCIENCE",
    instructor: "Aditya Verma",
    rating: 4.9,
    title: "Data Structures and Algorithms in Depth",
    description:
      "Develop strong problem-solving skills by mastering data structures, algorithmic thinking, complexity analysis and interview patterns.",
    technologies: [
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FFFFFF" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "LeetCode", icon: "https://cdn.simpleicons.org/leetcode/FFA116" },
    ],
    community: {
      count: 3200,
      label: "learners",
      avatars: [
        "https://i.pravatar.cc/100?img=24",
        "https://i.pravatar.cc/100?img=25",
        "https://i.pravatar.cc/100?img=26",
        "https://i.pravatar.cc/100?img=27",
      ],
    },
    price: 2490,
    includedInPlatform: true,
    instructorImage: "/images/instructors/aditya-verma.png",
    slug: "/courses/data-structures-algorithms",
    curriculum: [
      { id: 1, title: "Complexity analysis & Big O notation" },
      { id: 2, title: "Arrays, strings & hashing" },
      { id: 3, title: "Recursion & backtracking" },
      { id: 4, title: "Linked lists & pointer techniques" },
      { id: 5, title: "Stacks, queues & monotonic structures" },
      { id: 6, title: "Binary trees & binary search trees" },
      { id: 7, title: "Heaps, tries & priority queues" },
      { id: 8, title: "Graphs, BFS & DFS" },
      { id: 9, title: "Greedy algorithms & dynamic programming" },
      { id: 10, title: "Interview problems & mock assessments" },
    ],
  },

  {
    id: "system-design",

    section: {
      number: "05",
      label: "SYSTEM DESIGN",
      headingMuted: "Design beyond a single server.",
      headingHighlight: "Build systems that scale.",
    },

    category: "SYSTEM DESIGN",
    instructor: "Rahul Kapoor",
    rating: 4.8,
    title: "System Design for Scalable Applications",
    description:
      "Understand how large-scale systems work, from API gateways and caching to distributed databases, messaging systems and fault tolerance.",
    technologies: [
      { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Cloudflare R2", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
      { name: "Caddy", icon: "https://cdn.simpleicons.org/caddy/1F88C0" },
    ],
    community: {
      count: 1450,
      label: "engineers",
      avatars: [
        "https://i.pravatar.cc/100?img=28",
        "https://i.pravatar.cc/100?img=29",
        "https://i.pravatar.cc/100?img=30",
        "https://i.pravatar.cc/100?img=31",
      ],
    },
    price: 4990,
    includedInPlatform: true,
    instructorImage: "/images/instructors/rahul-kapoor.png",
    slug: "/courses/system-design",
    curriculum: [
      { id: 1, title: "Requirements & capacity estimation" },
      { id: 2, title: "Load balancing & reverse proxies" },
      { id: 3, title: "Caching strategies & Redis" },
      { id: 4, title: "SQL vs NoSQL database design" },
      { id: 5, title: "Database replication & sharding" },
      { id: 6, title: "Message queues & event-driven systems" },
      { id: 7, title: "CDNs, object storage & media delivery" },
      { id: 8, title: "Microservices & service discovery" },
      { id: 9, title: "Fault tolerance & observability" },
      { id: 10, title: "Designing real-world scalable systems" },
    ],
  },
];

export default coursesData;
