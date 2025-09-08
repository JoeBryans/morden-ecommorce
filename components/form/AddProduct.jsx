"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { UploadButton } from "../Uploader";
import Loader from "../Loader";
import axios from "axios";
// import { Bounce, toast, ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,

  loading: () => (
    <p className="bg-black/30">
      <Loader />
    </p>
  ),
});
// import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import CloudUploadButton from "../headers/CloudButton";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  price: yup.number().min(0).required("Price is required"),
  discount_price: yup.number().min(0).required("Price is required"),
  available_Quantity: yup.number().min(0),
  colors: yup.string().required("Color is required"),
  size: yup.string().required("Size is required"),
  category: yup.string().required("Category is required"),
  slug: yup.string().required("Slug is required"),
  brand: yup.string().required("Brand is required"),
  shippingInfo: yup.string().required("Shipping Info is required"),
  warranty: yup.string().required("Warranty is required"),
  // image: yup.array().required({ message: "Image is required" }),
  // brand: yup.string().required(),
});

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState({ url: "" });
  const [uploadFiles, setUploadFiles] = useState([
    {
      url: "",
      id: 0
    }
  ]);
  console.log("uploadFiles", uploadFiles);


  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "link",
    "image",
    "font",
    "size",
    "align",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "bullet" }, { list: "ordered" }, { list: "check" }],
      ["link", "image"],
      [{ script: "sub" }, { script: "super" }],
      ["clean"],
    ],
  };

  const [error, setError] = useState("");
  const [overview, setOverview] = useState("");
  const [description, setDescription] = useState("");
  console.log(overview);
  console.log("description:", description);
  const router = useRouter();

  console.log(error);
  const image = [];
  console.log(image);
  for (let index = 0; index < files.length; index++) {
    const { url } = files[index];
    image.push({ url });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handelOverviewChange = (value) => {
    setOverview(value);
  };
  const handelDescriptionChange = (value) => {
    setDescription(value);
  };

  const onSubmit = async (data) => {
    if (!description) {
      setError("please provide the product descritions");
    }
    if (!overview) {
      setError("please provide the product overview");
    }
    setIsLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          slug: data.slug,
          brand: data.brand,
          price: data.price,
          discount_price: data.discount_price,
          category: data.category,
          overview: overview,
          description: description,
          image: image,
          colors: data.colors,
          size: data.size,
          available_Quantity: data.available_Quantity,
        }),
      });
      if (!res.ok) {
        // throw new Error();
        setIsLoading(false);
        toast.error("Failed to create product");
      }
      // router.push("/dashboard/products");
      toast.success("Product created successfully");
      setIsLoading(false);
    } catch (err) {
      toast.error(err);
      setIsLoading(false);
    }
  };
  return (
    <>

      <div className="max-w-[70rem]   w-[100%] p-3 z-20 flex flex-col items-center   ">
        <form
          className="w-[100%] md:w-max  flex flex-col    shadow drop-shadow-md px-3 rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full md:w-[500px] lg:w-[800px]  flex-col mx-auto px-5 py-4  gap-5    ">
            <div className="w-full  flex lg:flex-row flex-col mx-auto px-5 py-4  gap-5    ">
              <div className="flex flex-col  w-full md:w-[400px] lg:w-[350px] items-start ">
                <Label
                  htmlFor="name"
                  className="flex flex-col gap-3 items-start px-3 py-1 w-full   "
                >
                  <span className="">Name</span>
                  <Input
                    id="name"
                    {...register("name")}
                    className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                  />
                  {errors.name && (
                    <span className="text-rose-500 text-xs">
                      {errors.name.message}
                    </span>
                  )}
                </Label>

                <Label
                  htmlFor="slug"
                  className="flex flex-col gap-3 items-start px-3 py-1 w-full "
                >
                  <span>Slug</span>
                  <Input
                    id="slug"
                    {...register("slug")}
                    className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                  />
                  {errors.slug && (
                    <span className="text-rose-500 text-xs">
                      {errors.slug.message}
                    </span>
                  )}
                </Label>

                <div className="flex items-center  gap-4 w-full">
                  <Label
                    htmlFor="price"
                    className="flex flex-col gap-3 items-start px-3 py-1  w-full"
                  >
                    <span>Price</span>
                    <Input
                      id="price"
                      {...register("price")}
                      type="price"
                      className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                    />
                    {errors.price && (
                      <span className="text-rose-500 text-xs">
                        {errors.price.message}
                      </span>
                    )}
                  </Label>
                  <Label
                    htmlFor="discount_price"
                    className="flex flex-col gap-3 items-start px-3 py-1 w-full "
                  >
                    <span>Discount price</span>
                    <Input
                      id="discount_price"
                      {...register("discount_price")}
                      type="text"
                      className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                    />
                    {errors.discount_price && (
                      <span className="text-rose-500 text-xs">
                        {errors.discount_price.message}
                      </span>
                    )}
                  </Label>
                </div>

                <Label
                  htmlFor="warranty"
                  className="flex flex-col gap-3  items-start px-3 py-1 w-full "
                >
                  <span>Warranty</span>
                  <Input
                    id="warranty"
                    {...register("warranty")}
                    className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                  />
                  {errors.warranty && (
                    <span className="text-rose-500 text-xs">
                      {errors.warranty.message}
                    </span>
                  )}
                </Label>
              </div>
              {/* second part */}
              <div className="flex flex-col  w-full md:w-[400px] lg:w-[350px] items-start ">
                <Label
                  htmlFor="brand"
                  className="flex flex-col gap-3 items-start px-3 py-1 w-full "
                >
                  <span>Brand</span>
                  <Input
                    id="brand"
                    {...register("brand")}
                    className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                  />
                  {errors.brand && (
                    <span className="text-rose-500 text-xs">
                      {errors.brand.message}
                    </span>
                  )}
                </Label>

                <Label
                  htmlFor="category"
                  className="flex flex-col gap-3  items-start px-3 py-1 w-full "
                >
                  <span>Category</span>

                  <select
                    id="category"
                    {...register("category")}
                    className="border-2 focuse:outline-0 w-full fucous:border-0  rounded-lg py-2 px-3"
                  >
                    <option value="" disabled={true}>
                      Cartegory
                    </option>
                    <option value="phone">Phone & Accessories</option>
                    <option value="computer">Computer & Accessories</option>
                    <option value="electronics">Electronics</option>
                    <option value="home&office">Home & Office</option>
                    <option value="fashion">Fashion</option>
                    <option value="sports">Sport</option>
                  </select>
                  {errors.brand && (
                    <span className="text-rose-500 text-xs">
                      {errors.brand.message}
                    </span>
                  )}
                </Label>

                <div className="flex items-center  gap-4 w-full">
                  <Label
                    htmlFor="colors"
                    className="flex flex-col gap-3 items-start px-3 py-1 w-full "
                  >
                    <span>Color</span>
                    <Input
                      id="colors"
                      {...register("colors")}
                      className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                    />
                    {errors.colors && (
                      <span className="text-rose-500 text-xs">
                        {errors.colors.message}
                      </span>
                    )}
                  </Label>
                  <Label
                    htmlFor="size"
                    className="flex flex-col gap-3 items-start px-3 py-1 w-full "
                  >
                    <span>Size</span>
                    <Input
                      id="size"
                      {...register("size")}
                      className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                    />
                    {errors.size && (
                      <span className="text-rose-500 text-xs">
                        {errors.size.message}
                      </span>
                    )}
                  </Label>
                </div>

                <Label
                  htmlFor="Shipping Info"
                  className="flex flex-col gap-3  items-start px-3 py-1 w-full "
                >
                  <span>Shipping Info</span>
                  <Input
                    id="available"
                    {...register("shippingInfo")}
                    className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                  />
                  {errors.shippingInfo && (
                    <span className="text-rose-500 text-xs">
                      {errors.shippingInfo.message}
                    </span>
                  )}
                </Label>
              </div>
            </div>

            {/* seecond part */}

            <div className="w-full   flex-col mx-auto px-5 py-4  gap-5   ">
              <div className="flex flex-col lg:flex-row  w-full gap-5 items-start ">
                <Label
                  htmlFor="available_Quantity"
                  className="flex flex-col gap-3 items-start px-3 py-1 w-full "
                >
                  <span>Available Quantity</span>
                  <Input
                    id="available"
                    {...register("available_Quantity")}
                    className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                  />
                  {errors.available_Quantity && (
                    <span className="text-rose-500 text-xs">
                      {errors.available_Quantity.message}
                    </span>
                  )}
                </Label>

                {/* <UploadButton
                  endpoint="imageUploader"
                  className="flex items-center w-full rounded-2xl  bg-black/20 shadow-md h-fit py-1 cursor-pointer font-semibold  "
                  onClientUploadComplete={(res) => {
                    if (res) {
                      setFiles(res);
                    }

                    alert("Upload Completed");
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                /> */}




              </div>
              <div className="flex flex-col  w-full   gap-28 items-start mt-5 max-h-62 overflow-y-auto">
                <Label
                  htmlFor="description"
                  className="flex flex-col max-h-52 min-h-20   gap-3 items-start px-3 py-2  my-2   w-full  mb-5"
                >
                  <span>Description</span>

                  <ReactQuill
                    className="w-full max-h-36  rounded-lg "
                    placeholder="Enter description"
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    value={description}
                    onChange={handelDescriptionChange}
                  // onChange={}
                  />
                  {error && (
                    <span className="text-rose-500 text-xs">{error}</span>
                  )}
                </Label>

                <Label
                  htmlFor="description"
                  className="flex flex-col   gap-3 items-start px-3 py-2     w-full"
                >
                  <span>Overview</span>

                  <ReactQuill
                    className="w-full max-h-16  rounded-lg "
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={overview}
                    onChange={handelOverviewChange}
                    placeholder="Enter Overview"
                  />
                  {error && (
                    <span className="text-rose-500 text-xs">{error}</span>
                  )}
                </Label>


              </div>
              <CloudUploadButton uploadFiles={uploadFiles} setUploadFiles={setUploadFiles} />
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:items-end  px-3 py-1 w-full mt-2 mb-2">
            <button className="p-2 rounded-lg cursor-pointer text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2 font-semibold transition:all w-max px-3">
              {isLoading ? <Loader isLoading={isLoading} /> : "Add to product"}
            </button>
          </div>
        </form>

        {/* <div className="flex flex-col gap-3 lg:items-end  px-3 py-1 w-full mt-2 mb-2">
          {
            uploadFiles?.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2 w-full">
                  <img src={item.url} alt={item.name} className="w-20 h-20 rounded-lg" />
                  <button className="p-2 rounded-lg cursor-pointer text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2 font-semibold transition:all w-max px-3">
                    delete
                  </button>
                </div>
              )
            })
          }
        </div> */}
      </div>
    </>
  );
};

export default AddProduct;
