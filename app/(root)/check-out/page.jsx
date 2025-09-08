import Container from "@/components/Container";
import ChooseAddress from "@/components/checkOut/ChooseAddress";
import PaymentOption from "@/components/checkOut/PaymentOption";
import OrderDetails from "@/components/checkOut/OrderDetails";
const CheckOut = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <Container>
        <div className="max-w-5/5 w-[90%]  flex flex-wrap justify-between gap-4 px-3 mx-auto ">
          <div className="  max-w-[520px] w-[95%]  ">
            {/* Choose Address */}
            <ChooseAddress />

            {/* PickUp address */}

            {/* <div className="flex flex-col gap-4 w-full items-center shadow-lg mb-8">
              <div className="flex w-full items-center justify-between px-3 py-1 border-b-2">
                <div className="flex items-center gap-3">
                  <Input
                    type={"checkbox"}
                    className={"w-4 h-4 rounded-full"}
                    checked={true}
                  />
                  <h2 className="uppercase">CHOOSE PickUp Station</h2>
                  <ChevronDown
                    onClick={() => setPickUp(!pickUp)}
                    className="cursor-pointer"
                  />
                </div>
                <PickUp />
              </div>
              {pickUp ? (
                <div className="flex flex-col gap-0.5 w-full px-5">
                  <h3 className=" capitalize mb-2">Ogwezi joshua</h3>
                  <span className=" capitalize">Address</span>
                  <span className=" capitalize">08162373317</span>
                </div>
              ) : null}
            </div> */}

            {/* payment Option */}
            <PaymentOption />
          </div>

          {/* Order details max-*/}
          <OrderDetails />
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
