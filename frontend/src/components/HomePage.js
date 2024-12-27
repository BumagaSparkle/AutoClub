import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Добро пожаловать!</h1>
        <p>Присоединяйся, чтобы не пропустить важные события!</p>
      </section>
      
      <div className="sidebar-buttons">
        <section className="events-overview">
          <h2>Предстоящие события</h2>
          <p>Посмотрите предстоящие события.</p>
          <button onClick={() => window.location.href = '/events'}>Проверить</button>
        </section>

        <section className="forum-overview">
          <h2>Присоединяйся к обсуждению</h2>
          <p>Найдите такого же человека по интересам, как и вы!</p>
          <button onClick={() => window.location.href = '/forum'}>Посетить форум</button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
