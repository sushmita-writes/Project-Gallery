
import Paintings from "./Categories/Paintings";
import Sculptures from "./Categories/Sculptures";

function Category() {
  return (
    <section className="px-3 font-sans">
      <Paintings />
      <Sculptures />
    </section>
  );
}

export default Category;