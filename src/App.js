
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componants/Home';
import Main from './Componants/Main';
import About from './Componants/About';
import Details from './Componants/Details';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/:name",
          element: <Details></Details>,
          loader: ({ params }) =>
            fetch(`https://restcountries.com/v3.1/name/${params.name}`),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
