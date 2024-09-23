import './Loader.css'; 

const Loader = () => {
  return (
    <div className="loader-container">
      <i className="fas fa-spinner spinner"></i>
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;