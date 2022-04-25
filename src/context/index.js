import { createContext, useState } from "react";

const fullName = localStorage.getItem("name");

// let profile = null;
// let cartItems = 0;
// if (token) {
//   // call api with token //getUserProfile
//   profile = {};
// }

// const cartContext = createContext([
//   {
//     id: "",
//     count: 1,
//   },
// ]);

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

const ContextProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(fullName);
  const [cartItems, setCartItems] = useState([]);

  return (
    <LoginContext.Provider value={{ user, setUser, cartItems, setCartItems }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextProvider;
