const LogIn = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center">
      <div className="w-2/5  mx-auto mt-10">
        <h1 className="font-semibold text-3xl my-5 text-center">
          Please Log In
        </h1>
        <form
          className="space-y-4 border-2 px-5 py-10 rounded-lg shadow-2xl"
          action="
         "
        >
          <div className="w-3/4 mx-auto">
            <label className="font-medium">Email:</label>
            <br />
            <input
              name="email"
              className="border-2 w-full 
               h-10 rounded-md p-2"
              placeholder="Your Email"
              type="text"
            />
          </div>
          <div className="w-3/4 mx-auto">
            <label className="font-medium">Password:</label>
            <br />
            <input
              name="password"
              className="border-2 w-full

               h-10 rounded-md p-2"
              placeholder="Your Password"
              type="password"
            />
          </div>
          <div className="flex justify-center">
            <button className="px-5 py-3 bg-indigo-600 text-white rounded-lg">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
