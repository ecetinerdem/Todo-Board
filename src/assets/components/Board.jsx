const Board = ({ task, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex), 1;
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  };
  return (
    <>
      <div>
        <p>{task}</p>
        <button
          className="bg-red-500 text white rounded-lg py-1 px-2 at-4"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Board;
