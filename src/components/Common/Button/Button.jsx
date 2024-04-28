import { useNavigate } from "react-router-dom";

const Button = ({ func, className, link, text }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(link);
    func();
  };

  return (
    <button className={`compare-button  ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
