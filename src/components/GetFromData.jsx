import InputElement from "./InputDefault";

function GetFormData(props) {
  function newFromData(newobj) {
    const newListObj = {
      ...newobj,
      id: Math.random().toString(),
    };
    props.onSaveDataFromMovie(newListObj);
  }
  return (
    <div className="flex w-[100%]">
      <InputElement onSaveDataForm={newFromData} />
    </div>
  );
}
export default GetFormData;
