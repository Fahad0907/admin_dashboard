import React from "react";
import { data } from "./EarningData";
import { Section } from "./EarningStyle";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const Earning = () => {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h4>This month Earning</h4>
          <h1>$1050.50</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
};

export default Earning;
