const User = () => {
  return (
    <div>
      <h1>Opciones de configuración</h1>
      <form>
        <div>
          <label htmlFor="theme">Tema</label>
          <div>
            <input type="radio" id="light" name="theme" value="light" />
            <label htmlFor="light">Light</label>
          </div>
          <div>
            <input type="radio" id="dark" name="theme" value="dark" />
            <label htmlFor="dark">Dark</label>
          </div>
        </div>
        <div>
          <label htmlFor="umbral_temperatura">Temperatura máxima</label>
          <input type="number" step="0.5" name="umbral_temperatura" />
        </div>
        <div>
          <label htmlFor="umbral_humedad">Humedad máxima</label>
          <input type="number" step="0.5" name="umbral_humedad" />
        </div>
        <div>
          <label htmlFor="refresco_sensores">
            Refresco de sensores (segundos)
          </label>
          <input type="number" step="1" name="refresco_sensores" />
        </div>
      </form>
    </div>
  );
};
export default User;
