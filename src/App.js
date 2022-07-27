import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <img src="https://www.zdf.de/assets/logo-sendungstypical-2021-100~640x720?cb=1643206807362" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messeges</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
