import { Link } from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Product1'},
  {id: 'p2', title: 'Product2'},
  {id: 'p3', title: 'Product3'},
]

export default function ProductsPage() {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        {PRODUCTS.map(product => {
          return <li key={product.id}>
            <Link to={`/products/${product.title}`}>{product.title}</Link>
          </li>
        })}
      </ul>
    </>
  );
}
