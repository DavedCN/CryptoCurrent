import { useNavigate } from "react-router-dom";

const Button = ({ className, link, text }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(link);
  };

  return (
    <button className={`compare-button  ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
