import React, { useState } from "react";
import { Main } from './LandingPage/Main';
import { Topics } from './LandingPage/Topics';
import { BottomBar } from './LandingPage/BottomBar';
import { ContactModal } from './LandingPage/ContactModal';

export const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <Main />
      <Topics />
      <BottomBar contactClick={openModal}/>
      <ContactModal open={showModal} clickOpen={openModal} clickClose={closeModal}/>
    </div>
  );
};
