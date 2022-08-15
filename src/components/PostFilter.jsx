import React from "react";

const PostFilter = ({filter, setFilter}) => {
  return (
    <>
      <input
        className="border-b border-teal-400 py-2 outline-teal-600"
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(evt) => setFilter({...filter, query: evt.target.value})}
      />
      <select
        value={filter.sort}
        onChange={(evt) => setFilter({...filter, sort: evt.target.value})}
      >
        <option disabled>Сортировка по</option>
        <option value="title">Названию</option>
        <option value="body">Описанию</option>
      </select>
    </>
  );
};

export default PostFilter;
