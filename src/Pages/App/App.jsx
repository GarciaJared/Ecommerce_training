import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
// import { NotFound } from "../NotFound/NotFound";
import SignIn from "../Signin/SignIn";
import "./App.css";
import Navbar from "../../Components/Navbar/Navbar";
import Layout from "../../Components/Layout/Layout";
/* CONTEXT */
ShoppingCartProvider;
import { ShoppingCartProvider } from "../../Context/Context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/MyOrders", element: <MyOrders /> },
    { path: "/SignIn", element: <SignIn /> },
    //{path: "/*",element: <NotFound />}
  ]); //array to save routes
  return routes;
};

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
