import { useEffect } from "react";
import liff from '@line/liff';

const HomePage = () => {
  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await liff.init({ liffId: "2003870945" });
        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          console.log("User Name:", profile.displayName);
          sendMessage();
        } else {
          liff.login();
        }
      } catch (error) {
        console.error("LIFF Initialization Failed", error);
      }
    };

    initializeLiff();
  }, []);

  const sendMessage = () => {
    if (liff.isLoggedIn()) {
      liff.sendMessages([
        {
          type: "text",
          text: "Hello from my LIFF App!",
        },
      ]);
    }
  };


  

  return (
    <div>
      <h1>Welcome to My LIFF App</h1>
    </div>
  );
};

export default HomePage;
