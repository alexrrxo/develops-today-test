interface TextLoaderProps {
  text?: string;
}

const TextLoader: React.FC<TextLoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <div className="text-center text-gray-700 font-medium py-4">{text}</div>
  );
};

export default TextLoader;
