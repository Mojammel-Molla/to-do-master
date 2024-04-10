import AddNewTask from '../components/add-new-task/AddNewTask';
import CompleteTasks from '../components/complete-tasks/CompleteTasks';
import OngoingTasks from '../components/ongoing-tasks/OngoingTasks';
import TodoTasks from '../components/todo-tasks/TodoTasks';

const Home = () => {
  return (
    <div className="h-[90vh] bg-indigo-300">
      <AddNewTask />
      <div className="flex justify-around  max-w-7xl mx-auto">
        <div className="">
          <TodoTasks />
        </div>
        <div>
          <OngoingTasks />
        </div>
        <div>
          <CompleteTasks />
        </div>
      </div>
    </div>
  );
};

export default Home;
