import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHistory, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
        textAlign: 'center',
        padding: '50px',
        backgroundImage: 'url("https://4.bp.blogspot.com/-hlYyzEDVe5U/V3jpf9eoQBI/AAAAAAABXMY/8YaVsm2dgrs4YLx5IV0TrkvQj9Y9GSN9gCLcB/s1600/The%2BDesk%2Bof%2BDr%2BBrown%2Bby%2BRob%2BLoukotka%2B%2528Regular%2529.png")',
        backgroundColor: '#cccccc',
        height: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: "white"
      }}>
      <h1>404 - Página no encontrada</h1>
      <p>¡Oh no! Has viajado al pasado por error.</p>
      <FontAwesomeIcon icon={faClock} size="3x" style={{ margin: '10px' }} />
      <FontAwesomeIcon icon={faHistory} size="3x" style={{ margin: '10px' }} />
      <p>¡Vamos a regresar al futuro!</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
        <FontAwesomeIcon icon={faHome} size="1x" style={{ marginRight: '5px' }} />
        Volver al Presente
      </Link>
    </div>
  );
};

export default NotFound;
