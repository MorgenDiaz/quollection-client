import { useState } from "react";

const STYLE = `p-1 text-sm text-left border border-gray-700 border-solid rounded-sm border-1`;
const STYLE_TOGGLED = `bg-gray-100`;

function ToggleableTag({ tag, onToggledHandler, onUntoggledHandler }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={handleClick}
      className={`${STYLE} ${isToggled && STYLE_TOGGLED}`}
    >
      {tag}
    </button>
  );
}

export default ToggleableTag;
