type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="w-[30%] flex justify-between mx-auto py-6">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md bg-orange-400 px-2 disabled:opacity-40 disabled:pointer-events-none hover:bg-orange-600"
      >
        {'<'} Prev
      </button>
      page {currentPage} of {totalPages}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md bg-orange-400 px-2 disabled:opacity-40 disabled:pointer-events-none hover:bg-orange-600"
      >
        Next {'>'}
      </button>
    </div>
  );
};

export default Pagination;
