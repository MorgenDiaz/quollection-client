import useTags from "../../hooks/useTags";
import ToggleableTagList from "./ToggleableTagList";

function EditQuote() {
  const tags = useTags();

  return (
    <div className="flex flex-col items-stretch h-full gap-2 p-4 text-left ">
      <form className="flex flex-col gap-6">
        <input type={`date`} className="p-3"></input>

        <textarea placeholder={`Enter Quote`} className="p-3 h-72"></textarea>

        <div className="flex justify-center gap-2">
          <input type="text" placeholder="Enter new tag" className="p-3" />
          <button>Create Tag</button>
        </div>

        <ToggleableTagList tags={tags} />

        <button className="p-2 mt-6 font-bold text-gray-200 capitalize bg-gray-700 border ">
          Add to quollection
        </button>
      </form>
    </div>
  );
}

export default EditQuote;
