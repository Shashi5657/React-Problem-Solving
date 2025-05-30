import React from "react";
import { useEffect } from "react";

const UserStayedTimeOnPage = () => {
  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime) / 1000);
      console.log("Time spent:", timeSpent, "seconds");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      handleBeforeUnload(); // For component unmount (e.g. SPA route changes)
      window.removeEventListener("beforeunload", handleBeforeUnload); // ✅ Fixed
    };
  }, []);

  return <div>userStayedTimeOnPage</div>;
};

export default UserStayedTimeOnPage;
