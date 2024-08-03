const Login = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center text-color-text border-8 border-bg-secondary p-20 rounded-md">
        <div className="space-y-4">
          <img src="/assets/ilumeo-logo.png" alt="Ilumeo Logo" className="w-56" />
          <h1 className="font-semibold text-4xl">Ponto Digital</h1>
        </div>

        <form action="" className="flex flex-col py-8 w-[20rem] gap-8">
          <div className="flex flex-col bg-bg-secondary py-1 px-5 gap-1 rounded-md">
            <label htmlFor="collaborateCode" className="text-sm font-light text-gray-300">
              Código do colaborador
            </label>
            <input type="text" name="collaborateCode" className="bg-transparent focus:outline-none" />
          </div>

          <button type="submit" className="bg-primary py-2 px-20 rounded-md">
            Entra
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
