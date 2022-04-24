import { createContext, useState } from "react";

const token = localStorage.getItem("token");

let profile = null;
if (token) {
  // call api with token //getUserProfile
  profile = {};
}

const cartContext = createContext([
  {
    id: "",
    count: 1,
  },
]);

// const data = {
//   profile: {},
//   cart: {},
//   items : {}
// }

// const setData = (action, payload) =>{

//   switch (action) {
//     case 'profile':
//         return {
//           ...data,
//           [action] : payload
//         }

//       break;

//     default:
//       break;
//   }

// }
export const LoginContext = createContext(null);
// console.log("Page is refreshed..", fullName);

const ContextProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(profile);
  const [cartItems, setCartItems] = useState([]);

  return (
    <LoginContext.Provider value={{ user, setUser, cartItems, setCartItems }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextProvider;
