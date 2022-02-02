import React from "react";
import { Outlet } from "react-router-dom";

export const ListingPage = () => {
  return (
    <>
      <h1>Listing Page</h1>
      <h2>listing service provider</h2>
      <p>or</p>
      <h2>listing helping request</h2>
      <Outlet />
    </>
  );
};
