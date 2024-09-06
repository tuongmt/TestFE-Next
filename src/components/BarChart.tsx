"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const data = [
  { name: "Danh mục A", value: 75 },
  { name: "Danh mục B", value: -25 },
  { name: "Danh mục C", value: 25 },
];

const BarChartComponent = () => {
  return (
    <div className=" w-full bg-white my-4 rounded-xl overflow-hidden">
      <div className="font-bold text-center text-lg py-2 bg-custom-green text-white">
        Thay đổi của giá trị danh mục
      </div>
      <div className="flex w-full bg-white px-4">
        <div className="w-1/2 p-4">
          <div className="flex items-center">
            <span className="font-bold text-lg ">Từ lúc bắt đầu danh mục</span>
          </div>
          <ResponsiveContainer width="100%" height={350} className="mt-4">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar key="value" dataKey="value" fill="#6ECEB2" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 p-4 ">
          <div className="flex justify-between items-center ">
            <span className="font-bold text-lg">Thời gian</span>
            <Select>
              <SelectTrigger className="w-[180px] text-orange-500">
                <SelectValue placeholder="6 tháng qua" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6 tháng qua</SelectItem>
                <SelectItem value="7">7 tháng qua</SelectItem>
                <SelectItem value="8">8 tháng qua</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col  gap-3 py-10 h-80 justify-between">
            <div className="flex items-center justify-between">
              <span>Danh mục A</span>
              <span>+5.87%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Danh mục B</span>
              <span>+10.3%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Danh mục C</span>
              <span>-2.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
