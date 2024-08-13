import { useThemeContext } from "../context/theme-context";

const BackgroundColor = ({ className, themeName }) => {
  const { themeHandler } = useThemeContext();

  return (
    <button 
      className={className} 
      onClick={() => themeHandler(className)}>
      {themeName}
    </button>
  );
};

export default BackgroundColor;
