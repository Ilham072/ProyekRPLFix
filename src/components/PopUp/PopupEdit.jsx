import React from 'react';
import './PopUp.css'
const PopupEdit = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h4 className="popup-message">{message}</h4>
        <div className="button-container">
          <button className="ButtonKonfirmasiNo" onClick={onConfirm}>Tidak</button>
          <button className="ButtonKonfirmasiYa" onClick={onCancel}>Ya</button>
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;