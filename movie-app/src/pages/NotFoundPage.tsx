import { Link } from 'react-router-dom';
import '../styles/error404.css';

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <h1>Page Not Found</h1>
      <p className="zoom-area">
        <b>Oops!</b> Something is wrong.{' '}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Go HomePage
        </Link>
      </div>
    </>
  );
};

export { NotFoundPage };
