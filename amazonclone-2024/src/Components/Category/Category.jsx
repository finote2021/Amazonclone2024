import React from 'react'
import { categoryInfos } from "./categoryFullinfos";
import CategoryCard from './CategoryCard';
import "./Category1.css"

function Category() {
  return (
    <div className='category_container'>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </div>
  );
}

export default Category