import '../styles/App.css';
import {Header} from '../components/Header'
import {News} from '../components/News'
import {Places} from '../components/Places'
function App() {
  return (
    <div className="App">
      <Header/>
      <News/>
      <Places/>
    </div>
  );
}
export default App;
