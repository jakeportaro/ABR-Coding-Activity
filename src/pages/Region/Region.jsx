import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFishData } from "../../api";
import "./Region.css";

function Region() {
  const { regionName } = useParams();
  const [fish, setFish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFishData()
      .then((data) => {
        setFish(data.filter((f) => f.NOAAFisheriesRegion === regionName));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, [regionName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!fish.length) return <div>No fish found for this region.</div>;

  // Calculate averages
  const caloriesArr = fish.map((f) => parseFloat(f.Calories) || 0);
  const fatArr = fish.map((f) => {
    let val = f.FatTotal;
    if (typeof val === "string") val = parseFloat(val.replace(/[^\d.]/g, ""));
    else val = parseFloat(val);
    return isNaN(val) ? 0 : val;
  });
  const avgCalories = (
    caloriesArr.reduce((a, b) => a + b, 0) / caloriesArr.length
  ).toFixed(1);
  const avgFat = (fatArr.reduce((a, b) => a + b, 0) / fatArr.length).toFixed(2);

  return (
    <div className="region-page">
      <h2 className="region-header">{regionName}</h2>
      <div className="region-info">
        <span>
          <strong>Average Calories:</strong> {avgCalories}
        </span>
        <span style={{ marginLeft: "1.5rem" }}>
          <strong>Average Fat:</strong> {avgFat}g
        </span>
      </div>
      <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
        {fish.map((f) => (
          <li
            key={f.SpeciesName}
            className="card"
            style={{
              marginBottom: "1.5rem",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "1.25rem",
              boxShadow: "0 1px 4px rgba(30,41,59,0.04)",
            }}>
            {f.SpeciesIllustrationPhoto?.src && (
              <img
                src={f.SpeciesIllustrationPhoto.src}
                alt={f.SpeciesIllustrationPhoto.alt || f.SpeciesName}
                style={{
                  width: 72,
                  height: 72,
                  objectFit: "contain",
                  borderRadius: 8,
                  background: "#fff",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  marginBottom: 2,
                }}>
                {f.SpeciesName}
              </div>
              <div style={{ fontSize: "0.97rem", marginBottom: 6 }}>
                Calories: {f.Calories} | Fat: {f.FatTotal}
              </div>
              {f.Biology && (
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  dangerouslySetInnerHTML={{ __html: f.Biology }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Region;
