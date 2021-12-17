import { useEffect, useState } from "react";

const App = () => {
  const [dogLoaded, setdogLoaded] = useState(<p>Loading...</p>);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setdogLoaded(<img src={data.message} alt="A Random Dog" />);
        setIsLoaded(true);
      });
  }, []);

  return <div>{dogLoaded}</div>;
};

export default App;
