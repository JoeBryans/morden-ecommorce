
import Container from "@/components/Container";

import { Suspense } from "react";

import Hero from "@/components/headers/Hero/Hero";
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
