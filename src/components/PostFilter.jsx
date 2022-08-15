import React from 'react';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-8">
      <input
        className="border-b border-teal-400 py-2 outline-teal-600 w-full mb-4 bg-teal-50/50"
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(evt) => setFilter({ ...filter, query: evt.target.value })}
      />
      <select
        className='bg-teal-50/50'
        value={filter.sort}
        onChange={(evt) => setFilter({ ...filter, sort: evt.target.value })}
      >
        <option value="" disabled>Сортировка</option>
        <option value="title">по названию</option>
        <option value="body">по описанию</option>
      </select>
    </div>
  );
};

export default PostFilter;
