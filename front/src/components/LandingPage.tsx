import React from "react";
import { Main } from './LandingPage/Main';
import { Topics } from './LandingPage/Topics';
import { BottomBar } from './LandingPage/BottomBar';

export const LandingPage = () => {
  return (
    <div>
      <Main />
      <Topics />
      <BottomBar />
    </div>
  );
};
