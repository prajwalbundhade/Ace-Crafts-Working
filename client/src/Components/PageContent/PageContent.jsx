import { useState, useEffect } from "react";
import DarkCard from "./DarkCard";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PageContent.css";
// import order_custom_btn from "../../images/order_custom_btn.png";
const PageContent = () => {
  const [cardsData, setCardsData] = useState([]); // Manage dynamic card data
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await axios.get(
          "https://teamacecrafts.com/api/posts/new-all-post"
        ); // Original endpoint
        setCardsData(response.data); // Set card data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error);
        setLoading(false);
      }
    };

    fetchCardsData();
  }, []); // Fetch only on mount

  const categories = [...new Set(cardsData.map((card) => card.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Shuffle function to shuffle the cards array
  const shuffleCards = () => {
    const shuffled = [...cardsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    setCardsData(shuffled); // Update state with shuffled cards
  };

  const filteredCards = cardsData.filter((card) => {
    const cardTitle = card.title || "";
    const cardDescription = card.description || "";
    return (
      (selectedCategory === "All" || card.category === selectedCategory) &&
      (cardTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cardDescription.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column mb-3">
       <Link to="/contact">
      <img className="order_custom_btn" src="https://raw.githubusercontent.com/prajwalbundhade/Ace-Crafts-Working/refs/heads/main/client/src/images/order_custom_btn.png" alt="" /></Link>
        <div className="col search search-and-shuffle">
          <input
            type="text"
            className="form-control"
            placeholder="Search here.."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        
          <button onClick={shuffleCards} className="btn shuffle-btn">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/shuffle-3d-icon-download-in-png-blend-fbx-gltf-file-formats--game-play-dice-music-arrow-button-pack-user-interface-icons-9147825.png?f=webp"
              alt=""
            />
          </button>
        </div>
        <div className="btn-group mobile-style" role="group">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className={`btn mobile-btn-gap ${
                selectedCategory === category
                  ? "new-btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="row mt-5">
        {filteredCards.map((card, index) => (
          <div
            className="custom-padd col-6 col-md-4 col-lg-2" // 2 per row on mobile, 3 per row on tablets, 5 per row on desktop
            key={index}
          >
            <DarkCard data={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageContent;
