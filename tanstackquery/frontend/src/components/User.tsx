import React from "react";
import type { UserType } from "../types/types";
interface UserProps extends UserType {
  handleDelete: (id: string) => Promise<void>;
}

const User = (props: UserProps) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Date of Birth: {new Date(props.dob).toLocaleDateString()}</p>
      <button onClick={() => props.handleDelete(props._id)}>Delete</button>
    </div>
  );
};

export default User;
