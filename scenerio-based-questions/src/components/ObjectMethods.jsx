import React from "react";

const ObjectMethods = () => {
  // 🔍 Object.entries()
  //   Converts an object into an array of [key, value] pairs.

  const obj = { shashi: 20, Vinay: 30 };
  console.log(Object.entries(obj)); //[["shashi",20],["Vinay",30]]

  const Employess = { nithya: "50", Silambu: "70", Shashi: "30" };
  for (const [key, value] of Object.entries(Employess)) {
    if (value !== "50") {
      console.log(`Person ${key} earns amount ${value}`);
    }
  }

  const Earnings = {
    salary: 25,
    rent: 4,
    interests: 1.5,
  };
  const sortedEarnings = Object.entries(Earnings).sort((a, b) => a[1] - b[1]);
  console.log(sortedEarnings);

  const formValues = {
    username: "john",
    password: "1234",
  };
  const formData = new FormData();
  Object.entries(formValues).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return <div>ObjectMethods</div>;
};

export default ObjectMethods;
