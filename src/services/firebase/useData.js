import { useState} from "react";

import {
doc,
collection,
getDocs,
getFirestore
} from "firebase/firestore";

function useData() {
  const db = getFirestore();
  const gradesRef = collection(db, "grades");
  const coursesRef = collection(db,"courses");
  const getGrades = () => getDocs(gradesRef);
  const getCourses = () => getDocs(coursesRef);

  return {getCourses, getGrades}
}

export default useData;