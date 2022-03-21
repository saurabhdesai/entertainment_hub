import React from "react";
import { Pagination } from "@mui/material";
function CustomPagination({ setPage, numOfPages = 1 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}

export default CustomPagination;
