import ToggleableTag from "./ToggleableTag";

function ToggleableTagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        return <ToggleableTag key={index} tag={tag} />;
      })}
    </div>
  );
}

export default ToggleableTagList;
