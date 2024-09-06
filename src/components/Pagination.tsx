"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-8 mb-4 gap-3">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={cn(
          "p-2 rounded bg-gray-200 ",
          page !== 1 ? "bg-orange-500 text-white" : "text-gray-400 "
        )}
      >
        <ArrowLeft />
      </button>
      <div className="flex space-x-1 gap-3">
        {[1, 2, 3, 4, 5].map((pageNumber) => (
          <button
            key={pageNumber}
            className={`p-2 rounded hover:bg-gray-200 ${
              page === pageNumber ? "text-orange-500 font-bold" : ""
            }`}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        disabled={page === 5}
        onClick={() => setPage(page + 1)}
        className={cn(
          "p-2 rounded bg-gray-200 ",
          page !== 5 ? "bg-orange-500 text-white" : "text-gray-400 "
        )}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
