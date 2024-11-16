import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-clrPrimary">
      <div className="w-11/12 mx-auto flex flex-col items-center justify-center text-white p-6 h-screen text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl mt-4">Page Not Found</h2>
        <p className="text-lg mt-2">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="btn bg-white hover:bg-slate-200 text-clrPrimary mt-6 lg:btn-lg md:btn-md rounded-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
