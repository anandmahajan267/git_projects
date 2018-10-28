import React from 'react';
export default ({ post: { title, body, _id }, onDelete }) => {
  return (
    <div className="col-md-4">
      <h2>{title}</h2>
      <p>{body}</p>
      <p><button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>Remove </button></p>
    </div>
  );
};