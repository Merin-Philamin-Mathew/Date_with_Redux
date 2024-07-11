import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CakeContainer/>
      <HooksCakeContainer/>
      <HooksIceCreamContainer/>
      <NewCakeContainer/>
      <UsersContainer/>
      </Provider>
     
    </div>
  );
}

export default App;
