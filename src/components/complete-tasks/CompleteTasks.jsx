const CompleteTasks = () => {
  return (
    <div className="mt-5">
      <div className="h-60 w-80 p-5 bg-white rounded-md mx-auto relative">
        <div className="mb-3">
          <h1 className="mt-5">This is Title</h1>
        </div>
        <p>Description:</p>
        <div className="absolute bottom-5 right-5">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTasks;
