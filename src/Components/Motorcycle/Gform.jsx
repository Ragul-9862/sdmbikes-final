import React from 'react';

const readGoogleSheet = () => {


  fetch("https://sheetdb.io/api/v1/8tr1teaw3fs6j")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const updateGoogleSheet = () => {
  fetch("https://sheetdb.io/api/v1/8tr1teaw3fs6j", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        id: "101",
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const deleteGoogleSheet = () => {
  fetch("https://sheetdb.io/api/v1/8tr1teaw3fs6j", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const createGoogleSheet = () => {
  fetch("https://sheetdb.io/api/v1/uaugppgpmtycv", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          id: "10",
          phone: 4364733,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default function Gform() {
  return (
    <div>
      {/* Your JSX content here */}
    </div>
  );
}
