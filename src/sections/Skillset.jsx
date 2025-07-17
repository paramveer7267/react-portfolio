const skills = [
  { name: "C++", src: "/assets/img/c++.png" },
  {
    name: "HTML",
    src: "https://res.cloudinary.com/bjha/image/upload/v1627831745/skillset%20logos/HTML_5-595b40b65ba036ed117d4260_fnyo1z.svg",
  },
  {
    name: "CSS",
    src: "https://res.cloudinary.com/bjha/image/upload/v1627831742/skillset%20logos/Css3-595b40b65ba036ed117d3eb8_jiqifm.svg",
  },
  {
    name: "Javascript",
    src: "https://res.cloudinary.com/bjha/image/upload/v1627831744/skillset%20logos/javascript-seeklogo.com_wthmgd.svg",
  },
  {
    name: "Bootstrap",
    src: "https://res.cloudinary.com/bjha/image/upload/v1627831742/skillset%20logos/bootstrap-5-seeklogo.com_rz32ih.svg",
  },
  { name: "MongoDb", src: "/assets/img/mongo.png" },
  { name: "Express", src: "/assets/img/express.png" },
  { name: "React", src: "/assets/img/react.png" },
  { name: "Nodejs", src: "/assets/img/nodejs.png" },
  {
    name: "VSCode",
    src: "https://res.cloudinary.com/bjha/image/upload/v1627831746/skillset%20logos/visual-studio-code-seeklogo.com_ps85dh.svg",
  },
  { name: "Nextjs", src: "/assets/img/nextjs.png" },
  { name: "Typescript", src: "/assets/img/typescript.png" },
  { name: "Redux", src: "/assets/img/redux.png" },
  {
    name: "Git",
    src: "https://res.cloudinary.com/bjha/image/upload/v1627831743/skillset%20logos/git-seeklogo.com_eqv1dl.svg",
  },
  {
    name: "Github",
    src: "https://res.cloudinary.com/bjha/image/upload/v1627831742/skillset%20logos/github-seeklogo.com_yhhbou.svg",
  },
  { name: "PostgreSQL", src: "/assets/img/postgresql.png" },
  { name: "WordPress", src: "assets/img/wordpress.png" },
  { name: "Zustand", src: "/assets/img/zustand.svg" },
  { name: "React Native", src: "/assets/img/react-native.png" },
  { name: "Expo", src: "/assets/img/expo.png" },
  { name: "Redis", src: "/assets/img/redis.png" },
  { name: "GraphQL", src: "/assets/img/graphql.png" },
  { name: "Tailwind CSS", src: "/assets/img/tailwind.png" },
];

const Skillset = () => {
  return (
    <section id="skills" className="flex flex-col items-center gap-y-8 max-w-6xl mx-auto py-24 px-4">
      <h1 className="text-5xl font-bold text-center">Skillset</h1>
      <p className="text-lg text-gray-600 text-center">My technical skillset</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-lg"
          >
            <img
              src={skill.src}
              alt={`${skill.name} logo`}
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-4 text-xl font-semibold text-center">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillset;
