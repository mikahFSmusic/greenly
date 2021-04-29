import React from "react";
import { LandingPage } from "./components/LandingPage";
import { Provider as ThemeProvider } from "./themes/Provider";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
