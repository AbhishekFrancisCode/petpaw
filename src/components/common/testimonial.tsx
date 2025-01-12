import React, { ReactNode } from "react";

type GridSystemProps = {
  columns?: number;
  rows?: number;
  children: ReactNode;
};

const GridSystem: React.FC<GridSystemProps> = ({ columns = 3, rows = 12, children }) => {
  return (
    <div
      className={`grid grid-cols-${columns} grid-rows-${rows} gap-4`}
      style={{
        // gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
    >
      {children}
    </div>
  );
};

type GridItemProps = {
  span?: number;
  children: ReactNode;
};

const GridItem: React.FC<GridItemProps> = ({ span = 1, children }) => {
  return (
    <div className={`row-span-${span}`} style={{ gridRow: `span ${span} / span ${span}` }}>
      {children}
    </div>
  );
};

// Example usage:
const Testimonials = () => {
  return (
    <GridSystem rows={12}>
      <GridItem span={6}>
        <div className="bg-blue-500 text-white p-4 min-h-full rounded-3xl">Item 1 (6 columns)</div>
      </GridItem>
      <GridItem span={4}>
        <div className="bg-green-500 text-white p-4 min-h-full rounded-3xl">Item 2 (4 columns)</div>
      </GridItem>
      <GridItem span={2}>
        <div className="bg-red-500 text-white p-4 min-h-full rounded-3xl">Item 3 (2 columns)</div>
      </GridItem>
      <GridItem span={6}>
        <div className="bg-blue-500 text-white p-4 min-h-full rounded-3xl">Item 1 (6 columns)</div>
      </GridItem>
      <GridItem span={4}>
        <div className="bg-green-500 text-white p-4 min-h-full rounded-3xl">Item 2 (4 columns)</div>
      </GridItem>
      <GridItem span={2}>
        <div className="bg-red-500 text-white p-4 min-h-full rounded-3xl">Item 3 (2 columns)</div>
      </GridItem>
    </GridSystem>
  );
};

export default Testimonials;
export { GridSystem, GridItem };
