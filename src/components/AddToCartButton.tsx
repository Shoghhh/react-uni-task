export default function AddToCartButton() {
  const handleClick = () => {
    alert("Added to cart!");
  };

  return (
    <button
      onClick={handleClick}
      className="add-to-cart-btn"
    >
      Add to Cart
    </button>
  );
};

