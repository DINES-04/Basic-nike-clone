import { products } from "../constants"
import Productcard from "../components/Productcard"
const Popularproduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
        <div className="flex flex-col justify-start gap-5">
          <h1 className="text-4xl font-palanquin font-bold">Our <span className="text-red-400">Popular</span> Products</h1>
          <p className="lg:max-w-lg mt-2 font-montserrat text-gray-400">Experience top-notch quality and style with our sought-after selections. discover a world of comfort, design and value.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <Productcard key={product.name} {...product} />
          ))}
        </div>
    </section>
  )
}

export default Popularproduct