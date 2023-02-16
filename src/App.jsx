import React, { useState } from "react";
import Header from "./components/Header";
//import SideBar from './components/SideBar';
//import Example from './components/Example';
import Card from "./components/Cards";
import Minimum from "./components/Minimum";
import Properties from "./components/Properties";
import Pagination from "./components/Pagination";
import Flexibility from "./components/Flexibility";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";
import data from "./assets/data/data";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const totalPosts = data.length;

  const card = currentPosts.map((info) => {
    return <Card key={info.id} {...info} />;
  });
  return (
    <>
      <Header />
      
      
{/* <SideBar /> */}
      <Minimum />
      <section className="bg-[#E5E5E5] px-4 py-5 md:px-20">
        <Properties
          setPostPerPage={setPostPerPage}
          totalPosts={totalPosts}
          currentPage={currentPage}
        />
        <div className="grid justify-items-center gap-y-7 sm:grid-cols-2 sm:justify-items-start lg:grid-cols-3">
          {card}
        </div>
        <Pagination
          totalPosts={totalPosts}
          postPerPage={postPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
      <Flexibility />
      <Form />
      <Quotes />

      <Footer />
    </>
  );
};

export default App;
