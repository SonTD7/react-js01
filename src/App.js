import React from "react";
import Ristorante from "./components/Ristorante";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <nav class="navbar navbar-light bg-warning">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Ristorante Con Fusion
              </a>
            </div>
          </nav>
        </div>
        <Ristorante/>
      </section>
    </main>
  );
}

export default App;
