/* Creating and nesting components */
/* 1. Same file component*/
import React from "react";

function MyButton() {
  return <button>I'm a button</button>;
}

export default function page() {
  return (
    <div>
      <h1>React tutorial - Creating and nesting components</h1>
      <MyButton />
    </div>
  );
}

/* 2. Import component from another file*/
// import React from "react";
// import MyButton from "./components/MyButton";

// export default function page() {
//   return (
//     <div>
//       <h1>React tutorial - Creating and nesting components</h1>
//       <MyButton />
//     </div>
//   );
// }

/* 3. Writing markup with JSX */
// import React from "react";
// import MyButton from "./components/MyButton";

// export default function page() {
//   return (
//     // react fragment
//     <>
//       <h1>React tutorial - Creating and nesting components</h1>
//       <MyButton />
//     </>
//   );
// }

/* ======================================================================================== */
/* Adding styles */
/* 1. inline style*/
// import React from "react";

// export default function page() {
//   return (
//     <>
//       <h1 style={{color: "red", background: "#000"}}>React tutorial - Adding styles</h1>
//     </>
//   );
// }

/* 2. CSS Class*/
// import React from "react";

// export default function page() {
//   return (
//     <>
//       <h1 className="my-h1">React tutorial - Adding styles</h1>
//     </>
//   );
// }

/* ======================================================================================== */
/* Displaying data */
// import React from "react";

// export default function page() {
//   const title = "React tutorial - Displaying data";
//   const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
//   };
//   return (
//     <>
//       <h1>{title}</h1>
//       <h4>{user.name}</h4>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

/* ======================================================================================== */
/* Conditional rendering */
/* 1. If statement */
// import React from "react";

// export default function page() {
//   const isLoggedIn = false;
//   let content;
//   if (isLoggedIn) {
//     content = <h1>Welcome, You're logged in.</h1>;
//   } else {
//     content = <h1>Please Log in first.</h1>;
//   }
//   return (
//     <div>
//       {content}
//     </div>
//   );
// }

/* 2. Conditional (ternary) operator */
// import React from "react";

// export default function page() {
//   const isLoggedIn = true;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <h1>Welcome, You're logged in.</h1>
//       ) : (
//         <h1>Please Log in first.</h1>
//       )}
//     </div>
//   )
// }

/* 3. When you don’t need the else */
// import React from "react";

// export default function page() {
//   const isLoggedIn = true;
//   return (
//     <div>
//       {isLoggedIn && (<h1>Welcome, You're logged in.</h1>)}
//     </div>
//   )
// }

/* ======================================================================================== */
/* Rendering lists */
// import React from "react";

// export default function page() {
//   const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 },
//   ];

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map(product => (
//           <li
//             key={product.id}
//             style={{
//               color: product.isFruit ? 'magenta' : 'darkgreen',
//               padding: '4px 0',
//             }}
//           >
//             {product.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

/* ======================================================================================== */
/* Responding to events & Client-side Rendering */
/* 1. onClick */
// "use client";
// import React from 'react'

// export default function page() {
//   function handleClick() {
//     alert("You clicked me!");
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   )
// }

/* ======================================================================================== */
/* Updating the screen (ไม่ต้องเขียนตาม) */
/* 1. onClick and set to state */
// "use client";
// import React, { useState } from 'react'

// export default function MyButton() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

/* 2. Component is separately */
// "use client";
// import React, { useState } from 'react'

// function MyButton() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default function page() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton /> &nbsp;
//       <MyButton />
//     </div>
//   )
// }

/* 3. Send props */
// import React from 'react'

// function MyButton({title}) {
//   return (
//     <button>
//       {title}
//     </button>
//   );
// }

// export default function page() {
//   return (
//     <div>
//       <h1>My buttons is different title.</h1>
//       <MyButton title="My First Button" />
//       <MyButton title="My Second Button" />
//     </div>
//   )
// }

/* ======================================================================================== */
/* React Hook useState */
/* 1. useState */
// "use client";
// import React, { useState } from 'react'

// export default function page() {
//   const [count, setCount] = useState(0)
//   const [title, setTitle] = useState("")

//   return (
//     <div style={{textAlign: "center"}}>
//       <h1>Title: {title}</h1>
//       <h1>Count: {count}</h1>
//       <button onClick={() => {
//         setCount(count + 1)
//         setTitle("React Hook useState")
//       }}>Add Count</button>
//     </div>
//   )
// }

/* 2. useState Object */
// "use client";
// import React, { useState } from "react";

// export default function page() {
//   const initialUser = { username: "", password: "" };
//   const [user, setUser] = useState(initialUser);
//   function handleChangePassword(event) {
//     setUser({ ...user, password: event.target.value });
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Debug user: {JSON.stringify(user)}</h1>
//       <form>
//         <input
//           type="text"
//           placeholder="Username"
//           value={user?.username}
//           onChange={(event) => setUser({ ...user, username: event.target.value })}
//         />
//         <br />
//         <input type="text" placeholder="Password" value={user?.password} onChange={handleChangePassword} />
//         <br />
//         <button
//           onClick={(event) => {
//             event.preventDefault();
//             alert(JSON.stringify(user));
//           }}
//         >
//           Submit
//         </button>
//         <button
//           onClick={(event) => {
//             event.preventDefault();
//             setUser(initialUser);
//           }}
//         >
//           Clear
//         </button>
//       </form>
//     </div>
//   );
// }

/* 3. useState Array */
// "use client";
// import React, { useState } from "react";

// export default function page() {
//   const initialUser = { username: "", password: "" };
//   const [user, setUser] = useState(initialUser);
//   const [userList, setUserList] = useState([])
//   function handleChangePassword(event) {
//     setUser({ ...user, password: event.target.value });
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <pre>Debug user: {JSON.stringify(userList)}</pre>
//       <form>
//         <input
//           type="text"
//           placeholder="Username"
//           value={user?.username}
//           onChange={(event) => setUser({ ...user, username: event.target.value })}
//         />
//         <br />
//         <input type="text" placeholder="Password" value={user?.password} onChange={handleChangePassword} />
//         <br />
//         <button
//           onClick={(event) => {
//             event.preventDefault();
//             setUserList([...userList, user]);
//             setUser(initialUser);
//           }}
//         >
//           Submit
//         </button>
//         <button
//           onClick={(event) => {
//             event.preventDefault();
//             setUser(initialUser);
//             setUserList([])
//           }}
//         >
//           Clear
//         </button>
//       </form>

//       <ul>
//         {userList.map((item, index) =>
//           <li key={index}>Username:{item?.username}, Password:{item?.password}</li>
//         )}
//       </ul>
//     </div>
//   );
// }

/* ======================================================================================== */
/* React Hook useEffect */
/* 1. useEffect Update and Init */
// "use client";
// import React, { useState, useEffect } from 'react'

// export default function page() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     // Called when state changed
//     console.log("Current count:", count)
//     document.title = "Current count: " + count;
//   }, [count])

//   return (
//     <div style={{textAlign: "center"}}>
//       <h1>Count: {count}</h1>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Add Count</button>
//     </div>
//   )
// }

/* 2. useEffect Destroy Listener */
// "use client";
// import React, { useState, useEffect } from 'react'

// function CountComponent() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     // Called when state changed
//     console.log("Current count:", count)
//     document.title = "Current count: " + count;

//     return () => {
//       // Called when component is deleted
//       console.log("CountComponent is destroyed");
//       document.title = "CountComponent is destroyed";
//     }
//   }, [count])

//   return (
//     <div style={{textAlign: "center"}}>
//       <h1>Count: {count}</h1>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Add Count</button>
//     </div>
//   )
// }

// export default function page() {
//   const [isShow, setIsShow] = useState(true)
//   return (
//     <div style={{textAlign: "center"}}>
//       {isShow && <CountComponent/>}
//       <button onClick={e => setIsShow(!isShow)}>Toggle Count Component</button>
//     </div>
//   )
// }

