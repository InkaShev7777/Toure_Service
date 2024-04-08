import '../styles/App.css';
import {Header} from '../components/Header'
import {MainInfo} from '../components/MainInfo'
import {Places} from '../components/Places'
import {Achievement} from '../components/Achievement'
import {News} from '../components/News'
import {Staff} from '../components/Staff'
import {Footer} from '../components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainInfo/>
      <Places/>
      <Achievement/>
      <News/>
      <Staff/>
      <Footer/>
    </div>
  );
}
export default App;
