import React from 'react';
import './app.css';

export default function Home() {
  return (
    <div className="app">
      <div className="container">
        {/* Main Content */}
        <div className="main-content">
          {/* Banner */}
          <img
            src="https://i.pinimg.com/736x/b9/f4/1e/b9f41e490905d7a4029d69c793a3038f.jpg"
            alt="Banner"
            className="profile-banner"
          />
          
          {/* Profile Details */}
          <div className="profile">
            <img
              src="https://i.pinimg.com/736x/a7/40/98/a740981b4b093e9fff0e7a845c790121.jpg"
              alt="Perfil"
              className="profile-image"
              />
              <h1>Try</h1>
              <h6>tryTest • tryOneMoreTime</h6>
              <p><strong>Jesus the only way to heaven</strong></p>
            </div>
          </div>
        </div>
      </div>
  );
}
