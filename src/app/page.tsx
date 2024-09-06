import DateFilter from "@/components/DateFilter";
import SummaryTable from "@/components/SummaryTable";
import BarChartComponent from "@/components/BarChart";

export default function Home() {
  return (
    <main className="w-10/12 min-w-0 p-8 mx-auto">
      <DateFilter />
      <SummaryTable />
      <BarChartComponent />
    </main>
  );
}
