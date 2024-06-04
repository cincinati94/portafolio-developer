import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-row gap-2 p-3 justify-end">
          <a
            href="mailto:cintiamartinezmarcellan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="border-2 rounded-full p-2"
          >
            <Logo icon={"ic:round-email"} />
          </a>
          <a
            href="https://www.linkedin.com/in/cintia-martinez-marcellan"
            target="_blank"
            rel="noreferrer"
            className="border-2 rounded-full p-2"
          >
            <Logo icon={"uil:linkedin"} />
          </a>
          <a
            href="https://www.linkedin.com/in/cintia-martinez-marcellan"
            target="_blank"
            rel="noreferrer"
            className="border-2 rounded-full p-2"
          >
            <Logo icon={"mingcute:github-line"} />
          </a>
      
      </div>
    </footer>
  );
};

export default Footer;
