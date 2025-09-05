import { Link } from "react-router-dom";
import "./RegionList.css";
// Displays a list of regions with their average calories and fat
function RegionList({ fish }) {
  // Group fish by region
  const regions = {};
  fish.forEach((f) => {
    const region = f.NOAAFisheriesRegion;
    if (!regions[region]) regions[region] = [];
    regions[region].push(f);
  });

  // Calculate averages for each region
  const regionStats = Object.entries(regions).map(([region, fishList]) => {
    const caloriesArr = fishList.map((f) => {
      const val = parseFloat(f.Calories);
      return isNaN(val) ? 0 : val;
    });
    const fatArr = fishList.map((f) => {
      let val = f.FatTotal;
      if (typeof val === "string")
        val = parseFloat(val.replace(/[^\d.-]/g, ""));
      else val = parseFloat(val);
      return isNaN(val) ? 0 : val;
    });
    const avgCalories = (
      caloriesArr.reduce((a, b) => a + b, 0) / caloriesArr.length
    ).toFixed(1);
    const avgFat = (fatArr.reduce((a, b) => a + b, 0) / fatArr.length).toFixed(
      2
    );
    return { region, avgCalories, avgFat };
  });

  return (
    <div className="region-list">
      <h3 className="region-list-title">Regions</h3>
      <ul className="region-list-ul">
        {regionStats.map(({ region, avgCalories, avgFat }) => (
          <li key={region} className="region-list-item">
            <div className="region-list-name">
              <Link
                to={`/region/${encodeURIComponent(region)}`}
                className="region-list-link">
                {region}
              </Link>
            </div>
            <div className="region-list-stats">
              Avg Calories: {avgCalories} | Avg Fat: {avgFat}g
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegionList;
