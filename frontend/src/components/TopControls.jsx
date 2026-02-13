import React from "react";

function TopControls({ platform, setPlatform, niche, setNiche, tone, setTone }) {
  return (
    <div
      style={{
  width: "100%",
  padding: "10px",
  borderRadius: "12px",
  border: "2px solid #ffb3d9",
  background: "#fff"
}}

    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        BLOOMELLA 🌸
      </h2>

      {/* Platform */}
      <div style={{ marginBottom: "12px" }}>
        <label>Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "10px" }}
        >
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
        </select>
      </div>

      {/* Niche */}
      <div style={{ marginBottom: "12px" }}>
        <label>Niche</label>
        <input
          type="text"
          placeholder="e.g fitness, fashion, coding"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "10px" }}
        />
      </div>

      {/* Tone */}
      <div>
        <label>Tone</label>
        <input
          type="text"
          placeholder="e.g bold, cute, professional"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default TopControls;
