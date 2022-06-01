import { useEffect, useState } from 'react';
// import { FirebaseContext } from '../context/firebase';
import { data } from '../mock';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  // const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    setContent(data[target]);
    // firebase
    //   .firestore()
    //   .collection(target)
    //   .get()
    //   .then((snapshot) => {
    //     const allContent = snapshot.docs.map((contentObj) => ({
    //       ...contentObj.data(),
    //       docId: contentObj.id,
    //     }));

    //     setContent(allContent);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  }, []);

  return { [target]: content };
}
