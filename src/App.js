import Header from './components/Header/Header'
import Entrysection from './components/Entrysection/Entrysection';
import ContentCalendar from './components/ContentCalendar/ContentCalendar';
import Footer from './components/Footer/Footer';
import WeekCalendar from './components/HelpCalendar/calendarv2';

function App() {
  return (
    <div className="App">
      <Header />
      <Entrysection />
      <ContentCalendar />
      <Footer/>
      <WeekCalendar />
    </div>
  );
}

export default App;
