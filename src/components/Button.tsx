interface ButtonProps {
  onClick: () => void;
  name: string;
}

const Button = ({ onClick, name }: ButtonProps) => {
  return (
    <li
      className={
        "h-full flex items-center md:w-full sm:justify-center md:border md:border-lightGray m-2 sm:h-12 bg-black"
      }
    >
      <button
        className="md:w-[100px] h-10 uppercase sm:border-l-lightGray"
        onClick={onClick}
      >
        {name}
      </button>
    </li>
  );
};

export default Button;
