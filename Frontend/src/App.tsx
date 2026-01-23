//Dependecies
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles";

//Store
import store from "./store";

//Pages
import Home from "./pages/Home";
import Registration from "./pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <Registration />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
