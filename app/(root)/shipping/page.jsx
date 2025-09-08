import Container from "@/components/Container";
import Shipping from "@/components/form/shipping";

const page = () => {
  return (
    <Container>
      <div className=" flex items-center justify-center text-left h-screen">
        <Shipping />
      </div>
    </Container>
  );
};

export default page;
