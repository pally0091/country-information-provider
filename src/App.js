
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componants/Home';
import Main from './Componants/Main';
import About from './Componants/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
