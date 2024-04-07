import '../styles/App.css';
import {Header} from '../components/Header'
import {News} from '../components/News'
import {Places} from '../components/Places'
import {Achievement} from '../components/Achievement'
function App() {
  return (
    <div className="App">
      <Header/>
      <News/>
      <Places/>
      <Achievement/>
    </div>
  );
}
export default App;
