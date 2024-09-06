"use client";

import { cn } from "@/lib/utils";
import { CalendarIcon, ChartLineIcon } from "lucide-react";
import { useState } from "react";
import { Square } from "lucide-react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Pagination from "./Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { config } from "process";

export default function DateFilter() {
  const [isActiveChart, setIsActiveChart] = useState(true);
  const [isActiveTable, setIsActiveTable] = useState(false);

  return (
    <>
      <Card className="flex items-center justify-between w-full bg-white py-8 px-4 bg-card my-4">
        <div className="flex items-center justify-between gap-5">
          <Select>
            <SelectTrigger className="w-[180px] text-orange-500">
              <SelectValue placeholder="6 tháng qua" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              <SelectItem value="a">A</SelectItem>
              <SelectItem value="b">B</SelectItem>
              <SelectItem value="c">C</SelectItem>
            </SelectContent>
          </Select>

          <input
            type="date"
            className="p-2 bg-gray-100 border rounded-md text-orange-500"
          />
          <input
            type="date"
            className="p-2 bg-gray-100 border rounded-md text-orange-500"
          />
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md">
            TRA CỨU
          </button>
        </div>
        <div className="flex gap-5">
          <ChartLineIcon
            onClick={() => {
              setIsActiveChart(true), setIsActiveTable(false);
            }}
            className={cn(
              "h-5 w-5 ",
              isActiveChart ? "text-orange-500" : "text-gray-500"
            )}
          />
          <CalendarIcon
            onClick={() => {
              setIsActiveChart(false), setIsActiveTable(true);
            }}
            className={cn(
              "h-5 w-5 ",
              isActiveTable ? "text-orange-500" : "text-gray-500"
            )}
          />
        </div>
      </Card>
      {isActiveChart ? <DataChart /> : <DataTable />}
    </>
  );
}

const chartData = [
  { date: "01/07", a: 186, b: 90, c: 240 },
  { date: "11/07", a: 305, b: 200, c: 120 },
  { date: "21/07", a: 237, b: 120, c: 100 },
  { date: "31/07", a: 73, b: 190, c: 220 },
  { date: "10/08", a: 209, b: 130, c: 230 },
];

const chartConfig = {
  a: {
    label: "Danh mục A",
    color: "hsl(var(--chart-1))",
  },
  b: {
    label: "Danh mục B",
    color: "hsl(var(--chart-2))",
  },
  c: {
    label: "Danh mục C",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

function DataChart() {
  return (
    <Card>
      <CardContent>
        <div className="flex gap-4 justify-end w-full py-8">
          <div className="flex gap-3 items-center">
            <Square className="bg-chart-1 text-chart-1" />
            <span>Danh mục A</span>
          </div>
          <div className="flex gap-3 items-center">
            <Square className="bg-chart-2 text-chart-2" />
            <span>Danh mục B</span>
          </div>
          <div className="flex gap-3 items-center">
            <Square className="bg-chart-4 text-chart-4" />
            <span>Danh mục C</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350} className="mt-4">
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
              height={20}
              width={20}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}`}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey="a"
                type="natural"
                stroke="var(--color-a)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-a)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
              <Line
                dataKey="b"
                type="natural"
                stroke="var(--color-b)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-b)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
              <Line
                dataKey="c"
                type="natural"
                stroke="var(--color-c)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-c)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}

function DataTable() {
  const data = [
    { date: "10/08/2020", categoryA: 335, categoryB: 40, categoryC: 335 },
    {
      date: "31/07/2020",
      categoryA: 120,
      categoryB: 230.88,
      categoryC: 125.95,
    },
    {
      date: "21/07/2020",
      categoryA: 110.23,
      categoryB: 120.0,
      categoryC: 25.0,
    },
    {
      date: "21/07/2020",
      categoryA: 110.23,
      categoryB: 120.0,
      categoryC: 25.0,
    },
    {
      date: "21/07/2020",
      categoryA: 110.23,
      categoryB: 120.0,
      categoryC: 25.0,
    },
  ];

  return (
    <div className="bg-white w-full py-8 px-4 rounded-xl overflow-hidden">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-custom-green">
          <tr>
            <th className="text-left p-4 text-white border border-gray-200">
              Ngày
            </th>
            <th className="p-4 text-white text-center border border-gray-200">
              Danh mục A
            </th>
            <th className="text-center p-4 text-white border border-gray-200">
              Danh mục B
            </th>
            <th className="text-center p-4 text-white border border-gray-200">
              Danh mục C
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="p-4 border border-gray-200">{row.date}</td>
              <td className="p-4 text-center border border-gray-200">
                {row.categoryA}
              </td>
              <td className="p-4 text-center border border-gray-200">
                {row.categoryB}
              </td>
              <td className="p-4 text-center border border-gray-200">
                {row.categoryC}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
