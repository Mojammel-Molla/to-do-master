import CompleteTasks from '../components/complete-tasks/CompleteTasks';
import OngoingTasks from '../components/ongoing-tasks/OngoingTasks';
import TodoTasks from '../components/todo-tasks/TodoTasks';

const Home = () => {
  return (
    <div className="flex justify-around h-screen bg-indigo-300 ">
      <div
        className="
      "
      >
        <TodoTasks />
      </div>
      <div>
        <OngoingTasks />
      </div>
      <div>
        <CompleteTasks />
      </div>
    </div>
  );
};

export default Home;
