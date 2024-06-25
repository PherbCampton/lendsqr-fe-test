import { useState, ChangeEvent, FC } from "react";
import "./Input.scss";

interface InputProps {
  value: string;
  label?: string;
  placeholder?: string;
  type: "text" | "email" | "tel" | "password";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getInputType = () => {
    if (type === "password") {
      return isPasswordVisible ? "text" : "password";
    }
    return type;
  };

  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        <input
          type={getInputType()}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="toggle-password"
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};
