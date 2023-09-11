import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          key="m1"
          id='m1'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          key="m2"
          id='m2'
          title='Test2'
          price={14}
          description='This is a second product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
