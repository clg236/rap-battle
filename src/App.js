import { db } from "./firebase"
import { onValue, ref } from "firebase/database"
import { useEffect, useState } from 'react'

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const query = ref(db, "messages");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(data)

      if (snapshot.exists()) {
        Object.values(data).map((message) => {
          setMessages((messages) => [...messages, message]);
        });
      }
    });
  }, []);

  

  return (
    <div>
      <ul>
      {messages.map((message, index) => (
        <li {...message} key={index}>{message.name}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
