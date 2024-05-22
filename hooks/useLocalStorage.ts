// import { useEffect, useState } from "react";

// export const useLocalStorage = (key: string, initialValue?: any) => {
//   const [value, setValue] = useState(() => {
//     if (typeof window !== "undefined") {
//       try {
//         const storedValue = window.localStorage.getItem(key);
//         return storedValue ? JSON.parse(storedValue) : initialValue;
//       } catch (error) {
//         return initialValue;
//       }
//     }
//   });


//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };
