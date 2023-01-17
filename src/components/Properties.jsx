import React from 'react'

const Properties = ({ setPostPerPage, totalPosts }) => {
const [button, setButton] = React.useState(true)

const any = () => {
setButton(anything => !anything)
}
console.log(setButton)
  const handleViewAll = () => {
    setPostPerPage(totalPosts);
  };
 
const handleViewLess = () => {
  setPostPerPage(2)
}

  return (
    <section className="mb-3 lg:mb-5">
      <div className="flex justify-center sm:justify-between">
        <h2 className="font-extrabold text-center sm:text-left text-lg md:text-xl xl:text-2xl">
          List Of Properties
        </h2>

        {any ?
         <button className="hidden sm:btn" onClick={handleViewLess}>View Less Properties</button>
            :
        <button className="hidden sm:btn" onClick={handleViewAll}>
  View All Properties
</button>     
        
        }
      </div>
      {/* Horizontal lines */}
      <hr
        className="w-[5%] hidden sm:block"
        style={{ border: "1px solid #F4511E" }}
      />
      <hr
        className="w-[20%] mt-2 mx-auto sm:hidden"
        style={{ border: "1px solid #F4511E", borderRadius: "50px" }}
      />
    </section>
  );
};

export default Properties