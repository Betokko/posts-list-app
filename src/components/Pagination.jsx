import React from 'react';

const Pagination = (props) => {
  return (
    <ul className="flex flex-row justify-center py-8">
      {props.pagesArray.map((p) => (
        <li key={p}>
          <button
            className={`${
              props.page === p ? 'text-rose-600 underline' : ''
            } text-xl after:p-2 hover:text-rose-600 `}
            onClick={() => props.changePage(p)}
          >
            {p}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
