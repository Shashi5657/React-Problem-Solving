function Timer() {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
  
      // Cleanup: clear interval when component unmounts
      return () => clearInterval(interval);
    }, []);
  
    return React.createElement("div", null, `Count: ${count}`);
  }
  