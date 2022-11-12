import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h2> Let's try again :) </h2>
      <p>
        <Link to="/">Back</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
