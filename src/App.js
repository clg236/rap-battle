import { db } from "./firebase"
import { onValue, ref } from "firebase/database"
import { useEffect, useState } from 'react'

function App() {

  const [images, setImages] = useState([])

  useEffect(() => {
    const query = ref(db, "images");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(data)

      if (snapshot.exists()) {
        Object.values(data).map((image) => {
          setImages((images) => [...images, image]);
        });
      }
    });
  }, []);

  return (
    <div>
      <p>test</p>
      <img src="https://files.slack.com/files-pri/T043PMV3RUY-F04AER2M9U6/download/btc.gif" />
    </div>
  );
}

export default App;
