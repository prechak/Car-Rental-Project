import React from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

function CarsList(props: any) {
  return (
    <div className="grid grid-cols-2 min-[325px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {props.carsList.map((car: any, index: number) => (
        <div key={index} onClick={() => (window as any).my_modal_4.showModal()}>
          <CarCard car={car} />
        </div>
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <BookingModal />
      </dialog>
    </div>
  );
}

export default CarsList;
