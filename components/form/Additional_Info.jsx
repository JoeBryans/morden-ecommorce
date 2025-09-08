import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";

export default function Additional_Info({
  HandleClick,
  overview,
  handleChange,
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="btn  px-3 bg-black/10 cursor-pointer btn-sm border-2  w-full  text-left  rounded-lg py-2">
          Additional Info
        </span>
      </DialogTrigger>
      <DialogContent className="md:max-w-[800px] w-[95%]">
        <DialogHeader>
          <DialogTitle className="opacity-80">
            Add Additional information for your product
          </DialogTitle>
        </DialogHeader>
        <Button
          className="w-max px-4  bg-black/40 cursor-pointer"
          onClick={HandleClick}
        >
          Add
        </Button>
        <div className="flex flex-col max-h-[50vh] overflow-auto gap-4 ">
          {overview.map((val, i) => {
            return (
              <div key={i} className="flex items-center gap-4 ">
                <Input
                  id="search"
                  placeholder="title"
                  name="title"
                  value={val.title}
                  className="col-span-3 font-semibold "
                  onChange={(e) => handleChange(e, i)}
                />
                <Input
                  id="search"
                  name="info"
                  placeholder="info"
                  className="col-span-3 font-semibold "
                  value={val.info}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
