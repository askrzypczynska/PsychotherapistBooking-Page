import Header from './components/Header/Header'
import Entrysection from './components/Entrysection/Entrysection';
import ContentCalendar from './components/ContentCalendar/ContentCalendar';
import Footer from './components/Footer/Footer';
import Formsection from './components/FormSection/Formsection';

function App() {
  return (
    <div className="App">
      <Header />
      <Entrysection />
      <ContentCalendar />
      <Formsection />
      <Footer/>
    </div>
  );
}

export default App;
