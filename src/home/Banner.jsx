import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/selectedCategory";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);
const desc = "We have  the largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Banner = () => {
  const [searchInput, setSeachInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);
  // console.log(productData)

  function handleSearch(e) {
    const searchTerm = e.target.value;
    setSeachInput(searchTerm);
    //    filter products based on search
    const filtered = productData.filter((product) =>
      product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredProducts(filtered);
  }
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory selected={"All"}/>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Your Product"
              value={searchInput}
              onChange={handleSearch}
            />
          <button type="submit"><i className="icofont-search-2"></i></button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
