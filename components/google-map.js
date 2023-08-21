import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7424.043900716709!2d77.36028383416983!3d28.579303864771212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x27b9ddaf76fe4575%3A0xe910f22df080ce3c!2sAll%20India%20Institute%20of%20Digital%20Learning!5e0!3m2!1sen!2sin!4v1692596816879!5m2!1sen!2sin"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
