import './App.css';
import videoBG from './assets/nhung-am-may-1154.mp4';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function App() {
  return (
    <div className="App">
      <div className='overlay'>

      </div>
      <video src={videoBG} autoPlay loop muted></video>
      <div className='app_content'>
        <h1>Launching Soon</h1>
        <h3>
          Leave your email and we'll let  you know once the site goes live.
        </h3>
        <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} className='flip-clock' />
        <button className='btn' onClick={() => {
          const form = prompt("Please fill your email to receive notification early");
          if (form) {
            alert("See You Soon 😘")
          } else  {
            alert("We can't find your email 🙄 Please fill again")
          }
        }}>Notify me</button>
      </div>
    </div>
  );
}

export default App;
