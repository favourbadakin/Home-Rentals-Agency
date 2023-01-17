import React from 'react'

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    let size = Math.ceil(totalPosts / postPerPage);
    for(let i = 1; i <= size ; i++){
        pages.push(i);
        
    }
  return (
    <div className="grid place-items-center mt-3">
      <div className="montserrat text-xs font-medium w-auto mx-auto h-10 inline-flex px-3 text-[#BDBDBD] text-center mt-4 bg-[#FFF] border rounded">
        <button
          className={`px-3 border-r ${
            currentPage === 1 ? "text-[#BDBDBD]" : "text-tertiary border-r-[#BDBDBD]"
          } `}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        {pages.map((page, index) => {
          return (
            <>
              <button
                className={
                  page === currentPage
                    ? "bg-tertiary text-[#FFF] px-4 py-2 "
                    : "text-tertiary px-3 bg-[#FFF] "
                }
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                <span>
                  {page}
                </span>
              </button>
              {/* <button onClick={() => page === null ? setCurrentPage(currentPage + 1) : setCurrentPage(page)}> */}
              {/* Next */}
              {/* </button> */}
            </>
          );
        })}
        <button
          className="border-l px-3 text-center bg-[#FFF]"
          onClick={() =>
            currentPage < size
              ? setCurrentPage(currentPage + 1)
              : setCurrentPage(currentPage)
          }
        >
          <span
            className={
              currentPage === size ? "text-[#BDBDBD]" : "text-tertiary"
            }
          >
            Next
          </span>
        </button>
      </div>
    </div>
  );
}

export default Pagination