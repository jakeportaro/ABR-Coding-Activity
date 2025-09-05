import { useEffect, useState } from "react";
import { fetchFishData } from "../../api";
import RegionList from "../../components/Region/RegionList";
import "./Home.css";
import { preloadImages } from "../../utils/preloadImages";

function Home() {
  const [fish, setFish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFishData()
      .then((data) => {
        // Preload all fish images in the background
        const imageUrls = data
          .map((f) => f.SpeciesIllustrationPhoto?.src)
          .filter(Boolean);
        preloadImages(imageUrls);
        setFish(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-page">
      <h2>Welcome to the ABR Fish Nutrition App</h2>
      <div className="card">
        <p>
          Select a region to view the average calories and fat per serving for
          fish in that area.
        </p>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {!loading && !error && <RegionList fish={fish} />}
    </div>
  );
}

export default Home;
