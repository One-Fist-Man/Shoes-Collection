const Products = () => {
  return (
    <div className="flex flex-grow container mx-auto p-4">
      <div className="w-2/3">
        <input
          type="text"
          placeholder="Search products..."
          className="mb-4 p-1 border border-gray-300 rounded"
        />
        <div className="grid grid-cols-1 gap-4 bg-gray-100 w-1/3 p-4">
          {/* Product list will go here */}
        </div>
      </div>
      <div className="w-1/3 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {/* Cart items will go here */}
      </div>
    </div>
  );
};

export default Products;
