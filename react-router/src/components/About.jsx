import { useEffect, useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  //   if (!show) return null;
  return <div>About</div>;
};

export default About;
