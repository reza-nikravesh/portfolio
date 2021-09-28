import { v4 as uuidv4 } from "uuid";
const Pages = () => {
  return [
    {
      name: "About Us",
      url: "/",
      active: true,
      id: uuidv4(),
    },
    {
      name: "Our Work",
      url: "/work",
      active: false,
      id: uuidv4(),
    },
    {
      name: "Contact Us",
      url: "/contact",
      active: false,
      id: uuidv4(),
    },
  ];
};
export default Pages;
