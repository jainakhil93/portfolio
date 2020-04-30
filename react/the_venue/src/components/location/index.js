import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.687634355261!2d151.22928471538853!3d-33.92343812932838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1884e5932bd%3A0x43bb6db0fd990ee3!2s31%20Meeks%20St%2C%20Kingsford%20NSW%202032!5e0!3m2!1sen!2sau!4v1588245350813!5m2!1sen!2sau"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
