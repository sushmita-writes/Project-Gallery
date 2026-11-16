import Banner from "../components/Banner";
import Category from '../components/Category';
import { categories } from "../data/categories";

function Home() {
    return (
        <div>
           <Banner />
           {categories.map((category) => (
                <Category category={category.name} list={category.products} />
           ))}
        </div>
    )
}

export default Home;