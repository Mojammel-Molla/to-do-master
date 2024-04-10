import { FaPlus } from 'react-icons/fa6';
const AddNewTask = () => {
  return (
    <div className="h-10  max-w-7xl mx-auto ">
      <button className="bg-green-400 px-5 py-2 rounded-lg text-white font-semibold  ml-12 flex gap-1 items-center ">
        New Task <FaPlus />
      </button>
    </div>
  );
};

export default AddNewTask;
