import { useState } from "react";
import { Main } from "./LandingPage/Main";
import { Topics } from "./LandingPage/Topics";
import { BottomBar } from "./LandingPage/BottomBar";
import { ContactModal } from "./LandingPage/ContactModal";
import "./LandingPage.scss";

export const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App-container">
      <Main className="Main" />
      <Topics className="Topics" />
      <BottomBar className="Bottom-bar" contactClick={openModal} />
      <ContactModal
        open={showModal}
        clickOpen={openModal}
        clickClose={closeModal}
      />
    </div>
  );
};
