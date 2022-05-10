import React from "react";
const Notification = ({ successfulMessage, errorMessage }) => {
    if (!successfulMessage && !errorMessage) {
      return null;
    }
    return (
      <div className={`message ${successfulMessage ? "successful" : "error"}`}>
        {successfulMessage ? successfulMessage : errorMessage}
      </div>
    );
  };
export default Notification;