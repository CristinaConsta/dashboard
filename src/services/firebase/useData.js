import { useState} from "react";

import {
doc,
collection,
getDocs,
getFirestore
} from "firebase/firestore";

function useData() {
  const db = getFirestore();
  const gradesRef = collection(db, "Assessments");
  const getGrades = () => getDocs(gradesRef);

  return {getGrades}
}

export default useData;