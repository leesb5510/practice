export default function List() {
  let products = [
    { name: "Tomatoes", price: "$40" },
    { name: "Pasta", price: "$30" },
    { name: "Coconut", price: "$40" },
  ];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, i) => {
        return (
          <div className="food" key={i}>
            <h4>
              <img src={`/food${i}.png`} className="food-img" />
              {product.name} {product.price}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
