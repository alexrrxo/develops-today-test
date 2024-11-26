import Link from 'next/link';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string; // Новый проп для ссылки
}

const Button: React.FC<ButtonProps> = ({ label, disabled, href }) => {
  if (href) {
    return (
      <Link
        href={disabled ? '#' : href}
        className={`w-full py-3 mt-6 text-white font-semibold rounded-lg block text-center ${
          disabled
            ? 'bg-gray-400 cursor-not-allowed pointer-events-none'
            : 'bg-orange-500 hover:bg-orange-600'
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      className={`w-full py-3 mt-6 text-white font-semibold rounded-lg block text-center ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-orange-500 hover:bg-orange-600'
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
