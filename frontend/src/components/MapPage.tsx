import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

interface GlobeProps {
  visitedCountries: string[]; // ISO A3 country codes
}

const MapPage: React.FC<GlobeProps> = ({ visitedCountries }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const width = canvas.width;
    const height = canvas.height;

    const projection = d3
      .geoOrthographic()
      .scale(width / 2.2)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = d3.geoPath(projection, context);

    let rotation = 0;

    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((worldData: any) => {
      const countries = feature(worldData, worldData.objects.countries).features;

      function draw() {
        context.clearRect(0, 0, width, height);

        // Ocean
        context.beginPath();
        path({ type: "Sphere" } as any);
        context.fillStyle = "#0f172a";
        context.fill();

        // Countries
        countries.forEach((country: any) => {
          context.beginPath();
          path(country);

          const isVisited = visitedCountries.includes(country.id);

          context.fillStyle = isVisited ? "#22c55e" : "#334155";
          context.fill();

          context.strokeStyle = "#0f172a";
          context.stroke();
        });

        // Pins (centroids)
        countries.forEach((country: any) => {
          if (!visitedCountries.includes(country.id)) return;

          const centroid = d3.geoCentroid(country);
          const [x, y] = projection(centroid) || [0, 0];

          context.beginPath();
          context.arc(x, y, 3, 0, 2 * Math.PI);
          context.fillStyle = "#f43f5e";
          context.fill();
        });
      }

      function animate() {
        rotation += 0.2;
        projection.rotate([rotation, -15]);
        draw();
        requestAnimationFrame(animate);
      }

      animate();
    });
  }, [visitedCountries]);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="rounded-2xl shadow-lg bg-slate-900"
      />
    </div>
  );
};

export default MapPage;

// Usage Example:
// <Globe visitedCountries={["840", "124", "356"]} />
