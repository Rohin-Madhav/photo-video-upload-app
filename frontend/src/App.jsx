import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import { MediaProvider } from "./components/MediaContext";

const App = () => {
  return (
    <div>
      <MediaProvider>
        <Navbar />
        <main>
          <Gallery />
        </main>
      </MediaProvider>
    </div>
  );
};

export default App;
