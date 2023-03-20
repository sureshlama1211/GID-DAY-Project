import React from "react";
import { useState } from "react";

export default function Modalcontent() {
  //

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    return setShowModal(false);
  };

  //css prpoerties

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && <MyModal closeModal={closeModal} />}
    </>
  );
}
