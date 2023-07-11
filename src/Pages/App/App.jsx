import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount"
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
// import { NotFound } from "../NotFound/NotFound";
// import { SignIn } from "../Signin/SignIn";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-red-800	">
        <Home></Home>

        <MyAccount></MyAccount>

        <MyOrder></MyOrder>

        <MyOrders></MyOrders>

        <Home></Home>
      </div>
    </>
  );
}

export default App;
