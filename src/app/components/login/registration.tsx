function Registration() {
  return (
    <>
      <div className="text-purple-500 text-[2rem]">Sign Up</div>
      <div className="flex flex-col gap-2">
        <input
          name="name"
          type="text"
          required
          className="bg-slate-100 border py-1 ps-2"
          placeholder="Full Name"
        />
        <input
          name="username"
          type="text"
          required
          className="bg-slate-100 border py-1 ps-2"
          placeholder="Username"
        />
        <input
          name="email"
          type="email"
          required
          className="bg-slate-100 border py-1 ps-2"
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          required
          className="bg-slate-100 border py-1 ps-2"
          placeholder="Password"
        />
        <input
          name="password"
          type="password"
          required
          className="bg-slate-100 border py-1 ps-2"
          placeholder="Password"
        />
      </div>
      <div className="bg-purple-400 text-white border rounded-3xl self-center py-2 px-14">
        <button>SIGN UP</button>
      </div>
    </>
  );
}

export default Registration;
