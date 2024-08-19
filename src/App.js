import { Container } from "react-bootstrap";
import NavBar from "./components/navbar";
import Header from "./components/header";
import Category from "./components/category";
import Itemlist from "./components/itemlist";
import { items } from "./data";
import { useState } from "react";


function App() {
  const [itemsData, setItemsData] = useState(items);

  // get all cat uniqe
  const allCategory = [ 'الكل', ...new Set(items.map((i)=>i.category))]

  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  // filter by seaech form
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategory={allCategory} />
        <Itemlist itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
