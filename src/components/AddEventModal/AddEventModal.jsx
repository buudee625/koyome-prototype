// Import React
import React, { useState } from 'react';
// Import Dependencies
import Modal from 'react-modal';
import Datetime from 'react-datetime';

export default function AddEventModal({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  function onSubmit(e) {
    e.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSumbit={onSubmit}>
        <input
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <div>
          <label htmlFor="start">Start Date</label>
          <Datetime value={start} onChange={(date) => setStart(date)} />
        </div>
        <div>
          <label htmlFor="end">End Date</label>
          <Datetime value={end} onChange={(date) => setEnd(date)} />
        </div>
        <button>Add event</button>
      </form>
    </Modal>
  );
}
