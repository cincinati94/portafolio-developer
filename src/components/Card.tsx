import Logo from "./Logo";

interface CardProps {
  logo: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ logo, name }) => {
  return (
    <div className="card__wrapper bg-[#FBFBFB] rounded-2xl shadow-md">
      <div className="card">
        <Logo icon={logo} height="50px" width="50px"/>
      </div>
      <div id="hidden-name">{name}</div>
    </div>
  );
};

export default Card;
