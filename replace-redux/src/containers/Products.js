import React from 'react';
import ProductsContext from '../store/context/products-context';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import useStore from '../hooks-store/store';

const Products = () => {
  const [globalState, dispatch] = useStore();

  return (
    <ul className="products-list">
      {globalState.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
