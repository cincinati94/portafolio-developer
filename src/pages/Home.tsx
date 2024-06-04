import "tailwindcss/tailwind.css";
import Logo from "../components/Logo";
import Experience from "./Expirience";

const contacts = [
  {
    link: "https://www.linkedin.com/in/cintia-martinez-marcellan",
    logo: "uil:linkedin",
  },
  {
    link: "mailto:cintiamartinezmarcellan@gmail.com",
    logo: "ic:round-email",
  },
  {
    link: "https://www.linkedin.com/in/cintia-martinez-marcellan",
    logo: "mingcute:github-line",
  },
];

const Home = () => {
  return (
    <main className="w-full mx-auto md:w-2xl">
      <section className="home__wrapper shadow-md">
        <article className="bg-[#000000] opacity-80 rounded-lg text-white p-4 flex flex-col gap-3">
          <h1 id="coloredText" className="font-extrabold text-2xl">
            &lt; FrontEnd developer &gt;
          </h1>
          <p>React / HTML / CSS / JavaScript</p>
          <div className="flex flex-row gap-3">
            {contacts.map((item, index) => (
              <a
                className="border-2 rounded-full p-2 text-white"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={index} // Add a unique key for each mapped element
              >
                <Logo icon={item.logo} color="" />
              </a>
            ))}
          </div>
        </article>
      </section>
      <Experience />
      <section
        id="about"
        className="flex flex-auto flex-col  p-4 gap-y-5 w-full justify-center items-center"
      >
        <div>
          <h2 className="flex flex-row items-center my-8 gap-2 text-white text-2xl">
            <Logo icon="mdi:person" color="white" />
            Sobre mi
          </h2>
          <article className="flex flex-col w-full gap-x-5 content-center items-center md:flex-row max-w-2xl">
            <img
              src="src\assets\images\imgPortafolio.png"
              height={80}
              width={80}
              className="img-about contrast-100 rounded-tl-3xl"
            />
            <p className="text-center text-balance text-white sm:text-justify">
              Me llamo Cintia Martinez. Comence a dedicarme al mundo de la
              programación de manera profesional hace más de tres años.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
