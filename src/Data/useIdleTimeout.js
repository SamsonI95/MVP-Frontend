// import { useEffect, useState } from 'react';
// import secureLocalStorage from 'react-secure-storage';

// const useIdleTimeout = (timeout = 86400000) => {
//     const [lastActive, setLastActive] = useState(Date.now());
//     const [isTabActive, setIsTabActive] = useState(true);

//     const resetLastActive = () => setLastActive(Date.now());

//     const handleVisibilityChange = () => {
//         setIsTabActive(!document.hidden);
//         if (!document.hidden) {
//             resetLastActive();
//         }
//     };

//     useEffect(() => {
//         const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
//         events.forEach(event => document.addEventListener(event, resetLastActive));
//         document.addEventListener('visibilitychange', handleVisibilityChange);

//         return () => {
//             events.forEach(event => document.No ActivityremoveEventListener(event, resetLastActive));
//             document.removeEventListener('visibilitychange', handleVisibilityChange);
//         };
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (isTabActive && Date.now() - lastActive > timeout) {
//                 secureLocalStorage.removeItem('accessToken');
//                 secureLocalStorage.removeItem('firstName');
//                 window.location.href = '/sign-in';
//             }
//         }, 60000); 

//         return () => clearInterval(interval);
//     }, [lastActive, isTabActive, timeout]);

//     return lastActive;
// };

// export default useIdleTimeout;
