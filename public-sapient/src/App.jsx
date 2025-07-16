import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CART_API = "https://dummyjson.com/carts/1";
  const PRODUCT_API = "https://dummyjson.com/products";

  const fetchCartData = useCallback(async () => {
    try {
      const response = await fetch(CART_API);
      if (!response.ok) throw new Error("Failed to fetch cart data");
      return await response.json();
    } catch (error) {
      setError(error.message);
      return null;
    }
  }, []);

  const fetchProductDetails = useCallback(async (productIds) => {
    try {
      const promises = productIds.map((id) =>
        fetch(`${PRODUCT_API}/${id}`).then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch product ${id}`);
          return res.json();
        })
      );
      return await Promise.all(promises);
    } catch (error) {
      setError(error.message);
      return null;
    }
  }, []);

  function combineCartWithProducts(cartData, productDetails) {
    if (!cartData || !productDetails) return [];
    return productDetails.map((product) => {
      const cartItem = cartData.products.find((item) => item.id === product.id);
      return {
        ...product,
        quantity: cartItem ? cartItem.quantity : 0,
      };
    });
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const cartData = await fetchCartData();
        if (!cartData?.products) {
          throw new Error("Invalid cart data structure");
        }

        const productIds = cartData.products.map((item) => item.id);
        const productDetails = await fetchProductDetails(productIds);

        if (!productDetails) return;

        const combinedData = combineCartWithProducts(cartData, productDetails);
        setCart(cartData);
        setProducts(combinedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [fetchCartData, fetchProductDetails]);

  const total = useMemo(() => {
    return products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  }, [products]);

  if (error) return <div className="error-message">Error: {error}</div>;
  if (loading) return <div className="loading-spinner">Loading...</div>;

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

// Better to move this to a separate file
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button className="view-details">View Details</button>
    </div>
  );
}

export default App;
