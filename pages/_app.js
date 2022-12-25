import "../styles/globals.css";
// import Navbar from '../components/Navbar';
// import {Register} from "../features/utils";
import { Container } from "rsuite";
// import Register from './features/register/Register';
import { store } from "redux/store";
import { Provider, useSelector } from "react-redux";
import { selectUser } from "redux/slices/userSlice";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
