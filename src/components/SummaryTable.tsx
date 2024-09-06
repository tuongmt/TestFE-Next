"use client";

const SummaryTable = () => {
  const data = [
    { name: "Danh mục A", start: 335, end: 40, change: "+30%" },
    { name: "Danh mục B", start: 120, end: 230.88, change: "+10%" },
    { name: "Danh mục C", start: 110.23, end: 120, change: "+2%" },
  ];

  return (
    <table className="min-w-full bg-white my-4 rounded-xl overflow-hidden ">
      <thead>
        <tr className="bg-custom-green text-white">
          <th className="text-left py-2 px-4 rounded-tl-xl border border-gray-200">
            Tên danh mục
          </th>
          <th className="text-center py-2 px-4 border border-gray-200">
            Ngày bắt đầu
          </th>
          <th className="text-center py-2 px-4 border border-gray-200">
            Ngày kết thúc
          </th>
          <th className="text-center py-2 px-4 border border-gray-200">
            Tăng/Giảm (%)
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`border-t ${
              index === data.length - 1 ? "rounded-b-xl" : ""
            }`}
          >
            <td className="py-2 px-4 text-orange-500 bg-green-900 border border-gray-200">
              {row.name}
            </td>
            <td className="py-2 px-4 text-center text-orange-500 border border-gray-200">
              {row.start}
            </td>
            <td className="py-2 px-4 text-center text-orange-500 border border-gray-200">
              {row.end}
            </td>
            <td className="py-2 px-4 text-center text-orange-500 border border-gray-200">
              {row.change}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;
