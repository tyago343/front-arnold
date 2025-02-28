import Toggle from "@components/ui/Toggle";

const User = () => {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(
      e.currentTarget.closest("form") as HTMLFormElement
    );
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center text-xl font-bold text-neutralDark">
        Opciones de configuración
      </h1>
      <form className="flex flex-col gap-4 border-t-[.5px] border-neutral p-4 m-4">
        <div className="flex gap-2 justify-between">
          <label htmlFor="theme">Tema:</label>

          <Toggle name="theme" onText="Dark" offText="Light" />
        </div>
        <div className="flex gap-2 justify-between">
          <label htmlFor="umbral_temperatura">Temperatura máxima</label>
          <input
            type="number"
            step="0.5"
            name="umbral_temperatura"
            className="border-[.5px] border-neutral rounded-md p-1 text-lg"
          />
        </div>
        <div className="flex gap-2 justify-between">
          <label htmlFor="umbral_humedad">Humedad máxima</label>
          <input
            type="number"
            step="0.5"
            name="umbral_humedad"
            className="border-[.5px] border-neutral rounded-md p-1 text-lg"
          />
        </div>
        <div className="flex gap-2 justify-between">
          <label htmlFor="refresco_sensores">
            Refresco de sensores (segundos)
          </label>
          <input
            type="number"
            step="1"
            name="refresco_sensores"
            className="border-[.5px] border-neutral rounded-md p-1 text-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-success rounded-md p-2 hover:bg-successDark"
          onClick={(e) => handleSubmit(e)}
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
export default User;
