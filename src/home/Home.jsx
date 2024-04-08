import Todo from '../components/todo/Todo';

const Home = () => {
  return (
    <div className="flex justify-around bg-green-500">
      <div>
        <Todo />
      </div>
      <div>3</div>
      <div>2</div>
    </div>
  );
};

export default Home;
