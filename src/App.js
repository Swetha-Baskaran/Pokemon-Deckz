import './App.css';
import ModalOne from './inputModals/modalone';
import ModalThree from './inputModals/modalthree';
import ModalTwo from './inputModals/modaltwo';
import ModalFour from './inputModals/modalfour';
import SmallModal from './modal1';
import LoginWeb from './login/loginweb';
import ResetPassword from './login/resetPassword';

function App() {
  return (
    <div className="App">
      {/* <SmallModal /> */}
      {/* <ModalOne /> */}
      {/* <ModalTwo /> */}
      {/* <ModalThree />   */}
      {/* <ModalFour /> */}
      <LoginWeb />
      {/* <ResetPassword /> */}
    </div>
  );
}

export default App;
