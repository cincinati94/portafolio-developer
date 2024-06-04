import Card from "./Card";
import Logo from "./Logo";


const cardsSkills = [
  { name: "HTML", logo: "vscode-icons:file-type-html" },
  {
    name: "CSS",
    logo: "vscode-icons:file-type-css",
  },
  { name: "JavaScript", logo: "logos:javascript" },
  { name: "React", logo: "logos:react" },
  {name:"Angular",logo:"vscode-icons:file-type-angular"},
  {name: "tailwindcss", logo:"vscode-icons:file-type-tailwind"},
  { name: "Redux", logo: "logos:redux" },
  { name: "SASS", logo: "vscode-icons:file-type-sass" },
  { name: "BEM", logo: "logos:bem" },
  { name: "MongoDB", logo: "logos:mongodb" },
  { name: "Node", logo: "fa-brands:node" },
  { name: "express", logo: "logos:express" },
  { name: "Git", logo: "icon-park:github-one" },
  { name: "GitHub", logo: "ri:git-merge-fill" },
  { name: "npm", logo: "logos:npm" },
  
];

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center  md:w-2xl">
       <h2 className="flex flex-row items-center my-8 gap-2 text-white text-2xl">
          <Logo icon="streamline:collaborations-idea" color="white" />
        Habilidades
        </h2>
      <div className="skills-container flex flex-col items-center">
        <div className="flex flex-row flex-wrap gap-4 ">
          {cardsSkills.map((card, index) => (
            <Card name={card.name} logo={card.logo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
