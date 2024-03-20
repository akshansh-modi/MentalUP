// import React from "react";
import { useCalendlyEventListener, PopupButton } from "react-calendly";
import { useState } from "react";
import axios from "axios";
import "./calendyComponent.css";
const CalendyComponent = ({ calendyLink }) => {
  //uri identifies the event that was scheduled
  const [uri, setUri] = useState("");
  const handleSubmit = async (e) => {
    const appointmentData = { uri: e.payload.event.uri }; // Assuming appointmentData includes the URI
    setUri(e.payload.event.uri);

    try {
      const response = await axios.post(`/api/update-appointment/${userId}`, { appointmentData });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };
  useCalendlyEventListener({
    onEventScheduled: (e) => handleSubmit(e),
  });
  return (
    <div className="CalendyComponent ">
      <PopupButton
        url={calendyLink}
        className="CalendlyButton"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="schedule"
      />
    </div>
  );
};

export default CalendyComponent;
