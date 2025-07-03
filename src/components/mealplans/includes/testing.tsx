import React, { useState, useEffect, useMemo, useRef } from "react";
import { DogMeal, Mealdata, mealdatas, MealPlanData } from "../mealdata";
import DogNutritionLabel from "./nutrition-table";

// Define interfaces for our component's data structures
interface FoodSection {
  id: number;
  name: string;
  // textColor: string;
  imageUrl: string;
}

interface ColorOption {
  bg: string;
  text: string;
}

interface HoveredSection extends FoodSection {
  midAngle: number;
}

interface TooltipPosition {
  x: number;
  y: number;
}

const FullyDynamicFoodCircle: React.FC = () => {
  const options = {
    fresh: [
      mealdatas[1],
      mealdatas[2],
      mealdatas[3],
      mealdatas[4],
      mealdatas[5]
      // mealdatas[6]
    ] as const
  };
  const [sectionCount, setSectionCount] = useState<number>(4);
  const [selectedOption, setSelectedOption] = useState<Mealdata>(options.fresh[0]);
  const [hoveredSection, setHoveredSection] = useState<HoveredSection | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ x: 0, y: 0 });
  const wheelRef = useRef<HTMLDivElement>(null);

  const filtredData = useMemo(() => {
    return MealPlanData.meals.filter((item: DogMeal) => {
      return item.baseProtin === selectedOption.value;
    });
  }, [selectedOption]);

  const [foodSections, setFoodSections] = useState<FoodSection[]>([
    {
      id: 0,
      name: "Empty",
      imageUrl:
        "https://ik.imagekit.io/funlogic/meal/bowl-veg-1100.webp?updatedAt=1737923515191?tr=w-600,h-600"
    },
    {
      id: 1,
      name: "Chicken",
      imageUrl:
        "https://ik.imagekit.io/funlogic/meal/bowl-chicken-1400.webp?updatedAt=1737923514978?tr=w-600,h-600"
    },
    {
      id: 2,
      name: "Mutton",
      imageUrl:
        "https://ik.imagekit.io/funlogic/meal/bowl-lamb-1400.webp?updatedAt=1737923514907?tr=w-600,h-600"
    },
    {
      id: 3,
      name: "Fish",
      imageUrl:
        "https://ik.imagekit.io/funlogic/meal/bowl-pork-1400.webp?updatedAt=1737923514862?tr=w-600,h-600"
    }
  ]);
  // Update sections when count changes
  useEffect(() => {
    // const newSections: FoodSection[] = [];
    // setFoodSections(newSections);
  }, [sectionCount]);

  // Function to update a food section name
  const updateSection = (id: number, newName: string): void => {
    setFoodSections(
      foodSections.map((section) => (section.id === id ? { ...section, name: newName } : section))
    );
  };

  // Generate SVG arc path for each segment
  const createArcPath = (startAngle: number, endAngle: number, radius: number): string => {
    // Convert angles from degrees to radians
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    // Calculate the coordinates
    const startX = 50 + radius * Math.cos(startRad);
    const startY = 50 + radius * Math.sin(startRad);
    const endX = 50 + radius * Math.cos(endRad);
    const endY = 50 + radius * Math.sin(endRad);

    // Determine if the arc should be drawn the long way around
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    // Create the SVG path
    return `M 50 50 L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
  };
  useEffect(() => {
    if (!hoveredSection || !wheelRef.current) return;

    const midAngle = hoveredSection.midAngle;
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Convert midAngle to radians
    const midRad = ((midAngle - 90) * Math.PI) / 180;

    // Calculate position at the outer edge of the wheel
    const radius = rect.width / 2; // Wheel radius in pixels
    const edgeX = centerX + Math.cos(midRad) * radius * 1.3; // Position at 70% of radius
    const edgeY = centerY + Math.sin(midRad) * radius * 1;

    setTooltipPosition({ x: edgeX, y: edgeY });
  }, [hoveredSection]);

  // Handle mouse hover on a section
  const handleMouseEnter = (section: FoodSection, midAngle: number): void => {
    setHoveredSection({ ...section, midAngle });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* <h2 className="text-2xl font-bold mb-6">Fully Dynamic Food Circle</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Sections:</label>
        <input
          type="range"
          min="2"
          max="8"
          value={sectionCount}
          onChange={(e) => setSectionCount(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="text-center mt-1">{sectionCount} sections</div>
      </div> */}

      <div className="relative w-[550px] h-[550px] mb-8" ref={wheelRef}>
        {/* Circle Container */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 ">
            {foodSections.map((section, index) => {
              const arcAngle = 360 / sectionCount;
              const startAngle = index * arcAngle;
              const endAngle = startAngle + arcAngle;
              const midAngle = startAngle + arcAngle / 2;

              const labelRadius = 35;
              const labelRad = ((midAngle - 90) * Math.PI) / 180;
              const labelX = 50 + labelRadius * Math.cos(labelRad);
              const labelY = 50 + labelRadius * Math.sin(labelRad);

              return (
                <g key={section.id}>
                  {/* <path
                    d={createArcPath(startAngle, endAngle, 50)}
                    stroke="#1f2937"
                    strokeWidth="0.5"
                  /> */}

                  <clipPath id={`clip-${section.id}`} className="bg-transparent">
                    <path d={createArcPath(startAngle, endAngle, 50)} />
                  </clipPath>
                  <foreignObject
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    clipPath={`url(#clip-${section.id})`}
                  >
                    <div className="w-full h-full bg-transparent">
                      {/* <img
                        src={section.imageUrl}
                        alt={section.name}
                        className="object-cover w-full h-full"
                      /> */}
                    </div>
                  </foreignObject>

                  {/* Interactive hover area */}
                  <path
                    d={createArcPath(startAngle, endAngle, 50)}
                    className={`cursor-pointer transition-all duration-200 fill-transparent`}
                    onMouseEnter={() => handleMouseEnter(section, midAngle)}
                    onMouseLeave={() => setHoveredSection(null)}
                  />
                </g>
              );
            })}
          </svg>
        </div>
        {hoveredSection && (
          <div
            className="absolute z-10 transition-opacity duration-200"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: "translate(-50%, -50%)"
            }}
          >
            <DogNutritionLabel meals={filtredData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FullyDynamicFoodCircle;
