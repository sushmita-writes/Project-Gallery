
import Paintings from "./categories/Paintings";
import Sculptures from "./categories/Sculptures";

function Category() {
  return (
    <section className="px-3 font-sans">
      <Paintings />
      <Sculptures />
    </section>
  );
}

export default Category;