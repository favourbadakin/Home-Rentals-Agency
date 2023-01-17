import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    unitNumber: "",
    city: "",
    state: "",
    roomType: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData(prevData =>{
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  };
  return (
    <section className="py-5 px-4 md:px-20">
      <p className="capitalize text-center font-semibold pb-4 pt-6 text-lg">
        Add Your property with us and be Confident that Your Room will be Filled
        Out!
      </p>

      <div
        className="poppins bg-[#FFF] mx-auto grid place-items-center pt-5 pb-10 rounded-lg"
        style={{ boxShadow: "0px 4px 63px rgba(0, 0, 0, 0.15)" }}
      >
        <h4 className="font-bold text-center text-tertiary mb-4 md:text-lg">
          Add A New Property
        </h4>
        <form className="max-w-6xl">
          <div className="w-[90%] mx-auto sm::w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold" htmlFor="Name">
                Name <span className="text-tertiary">*</span>
              </label>
              <input
                className="border p-2 focus:outline-none border-[#E6E6E6] w-full"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-semibold" htmlFor="Address">
                Address <span className="text-tertiary">*</span>
              </label>
              <input
                className="border p-2 focus:outline-none border-[#E6E6E6] w-full"
                id="address"
                placeholder="Enter Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="font-semibold" htmlFor="unitNumber">
                Unit Number <span className="text-tertiary">*</span>
              </label>
              <input
                type="number"
                className="border p-2 focus:outline-none border-[#E6E6E6] w-full"
                id="unitNumber"
                placeholder="Enter Unit"
                name="unitNumber"
                value={formData.unitNumber}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="font-semibold" htmlFor="city">
                City <span className="text-tertiary">*</span>
              </label>
              <select
                className="border text-[#737373] p-2 focus:outline-none border-[#E6E6E6] w-full"
                id="city"
                value={formData.city}
                name="city"
                onChange={handleChange}
              >
                <option value="default" disabled>
                  ---Select City---
                </option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Georgia">Georgia</option>
                <option value="Ohio">Ohio</option>
              </select>
            </div>
            <div>
              <label className="font-semibold" htmlFor="state">
                State <span className="text-tertiary">*</span>
              </label>
              <select
                className="border text-[#737373] p-2 focus:outline-none border-[#E6E6E6] w-full"
                id="state"
                value={formData.state}
                name="state"
                onChange={handleChange}
              >
                <option value="DEFAULT" disabled>
                  ---Select State---
                </option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Florida">Florida</option>
                <option value="Wisconsin">Wisconsin</option>
              </select>
            </div>
            <div>
              <label className="font-semibold" htmlFor="roomType">
                Room Type <span className="text-tertiary">*</span>
              </label>
              <select
                className="border text-[#737373] p-2 focus:outline-none border-[#E6E6E6] w-full"
                id="roomType"
                value={formData.roomType}
                name="roomType"
                onChange={handleChange}
              >
                <option value="default" disabled>
                  ---Select Room Type---
                </option>
                <option value="private">Private Room</option>
                <option value="compact">Compact Room</option>
                <option value="family">Family Room</option>
              </select>
            </div>
            <div className="">
              <label className="font-semibold" htmlFor="price">
                Price <span className="text-tertiary">*</span>
              </label>
              <input
                type="number"
                className="border p-2 focus:outline-none border-[#E6E6E6] w-full"
                id="price"
                placeholder="Enter Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-4 w-[90%] mx-auto">
            <label htmlFor="description" className="font-semibold">
              Description <span className="text-tertiary">*</span>
            </label>
            <textarea
              className="border p-2 focus:outline-none border-[#E6E6E6] w-full h-28 md:h-40"
              id="description"
              onChange={handleChange}
              name="description"
              value={formData.description}
            ></textarea>
          </div>
          {/* <div> */}
          {/* <label className="font-semibold">Upload Photos</label> */}
          {/* <input type='file'></input> 
          </div>*/}
          <div className="grid place-items-center">
            <button className="btn">Add New Property</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
