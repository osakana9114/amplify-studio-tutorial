import './App.css';
import {NewHomes, NavBar, MarketingFooter, HeroLayout2} from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <HeroLayout2 width={"100vw"} marginBottom={30}/>
      <NewHomes isPaginated itemsPerPage={3}/>
      <MarketingFooter width={"100vw"} marginTop={50}/>
    </div>
  );
}

export default App;