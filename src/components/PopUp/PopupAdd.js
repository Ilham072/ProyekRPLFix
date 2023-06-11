import React, { useState } from 'react';
import './PopUp.css'
const PopupAdd = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h4 className="popup-message">{message}</h4>
        <div className="button-container">
          <button className="ButtonKonfirmasiNo" onClick={onCancel}>Tidak</button>
          <button className="ButtonKonfirmasiYa" onClick={onConfirm}>Ya</button>
        </div>
      </div>
    </div>
  );
};

export default PopupAdd;
