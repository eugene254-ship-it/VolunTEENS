import React from "react";
import Header from "../Header";
import NavBar from "../navbar/NavBar";

import ModalDonateInstructions from "../components/donateModals/ModalDonateInstructions";
import DonorHome from "./DonorHome";
import WorkerHome from "./WorkerHome";

const Home = (props) => {
  console.log(props);
  const {
    openModalDonateInstructions,
    setopenModalDonateInstructions,
    setSortedByStatus,
    persona,
    name,
  } = props;

  const handleModalOpen = () => {
    setopenModalDonateInstructions(true);
  };

  return (
    <>
      <div className="main-home-container">
        <div className="main-header-container">
          <Header />
        </div>
        {persona === "donor" && (
          <DonorHome
            handleModalOpen={handleModalOpen}
            setSortedByStatus={setSortedByStatus}
            name={name}
          />
        )}
        {persona === "worker" && <WorkerHome name={name} />}
        <div className="main-navbar">
          <NavBar />
        </div>
      </div>
      <ModalDonateInstructions
        openModalDonateInstructions={openModalDonateInstructions}
        setopenModalDonateInstructions={setopenModalDonateInstructions}
      />
    </>
  );
};

export default Home;
