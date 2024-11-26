interface Props {
  title: string;
  subtitle: string;
}

const Header: React.FC<Props> = ({ subtitle, title }) => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
    <p className="text-lg text-gray-700">{subtitle}</p>
  </div>
);

export default Header;
