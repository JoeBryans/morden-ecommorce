
import Home from "../components/pages/Home";
import Container from "../components/Container";
import Categories from "../components/headers/Cartegories";
import Filter from "../components/Filter/Filter";
import { Suspense } from "react";
import ProductCategories from "../components/pages/Categories";
import Hero from "../components/headers/Hero/Hero";
import PopularCard from "./(root)/_components/home/PopularCard";

function Page() {
  return (
    <div className="relative w-full min-h-[100vh]">
      <Hero />
      <Container>
        {/* <div className=" flex items-center justify-between w-full my-7">
        
          <Suspense>
            <Categories />
          </Suspense>
          <Filter />
        </div> */}
        <Suspense>
          <PopularCard />
      
        </Suspense>
      </Container>
    </div>
  );
}
export default Page;
