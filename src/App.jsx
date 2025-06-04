import React  from "react";
import {Customerreviews,Footer,Hero,Popularproduct,Services,Specialoffer,Subscribe,Superquality} from "./sections"
import Nav from "./components/Nav";
const App = () => (  // instead of using "{}" use "()" due to does not print anyhting which "console.log('')"
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b"> {/*this padding all assign in index.css */}
      <Hero/>
    </section>
    <section className="padding">
      <Popularproduct/>
    </section>
    <section className="padding">
      <Superquality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <Specialoffer/>
    </section>
    <section className="bg-blue-50 padding">
      <Customerreviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8 text-white">
      <Footer/>
    </section>
  </main>
);

export default App;