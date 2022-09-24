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
  const coursesRef = collection(db,"Courses");
  const getGrades = () => getDocs(gradesRef);
  const getCourses = () => getDocs(coursesRef);

  return {getCourses, getGrades}
}

export default useData;