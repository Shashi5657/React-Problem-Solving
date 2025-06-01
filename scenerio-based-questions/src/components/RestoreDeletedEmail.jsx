import React, { useState } from "react";

const initialEmails = [
  { id: 1, subject: "Welcome" },
  { id: 2, subject: "Second Email" },
  { id: 3, subject: "Third Email" },
];

const RestoreDeletedEmail = () => {
  const [emails, setEmails] = useState(initialEmails);
  const [deletedEmail, setDeletedEmail] = useState(null);
  const [undoPopup, setUndoPopup] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [countDown, setCountDown] = useState(0);

  const handleDelete = (email) => {
    setDeletedEmail(email);
    setEmails((prev) => prev.filter((e) => e.id !== email.id));
    setUndoPopup(true);
    setCountDown(5);

    const interval = setInterval(() => {
      setCountDown((prev) => {
        if (prev <= 1) {
          //we can stimulate the api here
          clearInterval(interval);
          setUndoPopup(false);
          setDeletedEmail(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setIntervalId(interval);
  };

  const handleUndo = () => {
    clearInterval(intervalId);
    setEmails((prev) => [deletedEmail, ...prev]);
    setDeletedEmail(null);
    setUndoPopup(false);
    setCountDown(0);
  };
  return (
    <div>
      {undoPopup && (
        <div className="notification">
          Restore the email in {countDown} seconds{" "}
          <span
            style={{
              border: "1px solid black",
              fontSize: "10px",
              margin: "2px",
              padding: "2px",
              cursor: "pointer",
            }}
            onClick={handleUndo}
          >
            Undo
          </span>
        </div>
      )}
      {emails.map((email) => (
        <div key={email.id}>
          <span>{email.subject}</span>
          <button onClick={() => handleDelete(email)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RestoreDeletedEmail;
