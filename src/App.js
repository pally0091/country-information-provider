
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componants/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
