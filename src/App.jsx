import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const eventDate = new Date("2026-06-09T19:00:00-06:00");

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate - now;
      if (difference <= 0) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
        });
        return;
      }

      const totalMinutes = Math.floor(difference / 1000 / 60);

      setTimeLeft({
        hours: Math.floor(totalMinutes / 60),
        minutes: totalMinutes % 60,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const videoUrl =
    "https://www.tiktok.com/@comedyclips899/video/7351428861613198624?is_from_webapp=1&sender_device=pc&web_id=7441749660508767774";
  const directionsUrl =
    "https://www.waze.com/es/live-map/directions/edificio-telia-25-avenida-vista-hermosa-2-apto-101-zona-15,-guatemala?to=place.w.176619666.1766262194.18449128";

  return (
    <main className="invite-page">
      <section className="card">
        <p className="eyebrow">Invitación oficial!</p>
        <img src="/house5.png" alt="House" className="invite-image" />
        <div className="divider">✦</div>
        <h1>Car</h1>
        <h2>Te invita al apartamento</h2>
        <p>Hoy a las 7:00 PM</p>
        <div className="countdown">
          <span>Comienza en</span>
          <strong>
            {timeLeft.hours}h {timeLeft.minutes}m
          </strong>
        </div>

        <a
          className="main-button"
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
        >
          ▶ Reproducir invitación
        </a>

        <div className="location">
          <p>Edificio Telia z15, Apt 201</p>

          <a
            className="directions-link"
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver direcciones
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
