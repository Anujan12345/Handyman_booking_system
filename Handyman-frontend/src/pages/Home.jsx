import Search from "../components/Search";
import ServiceCard from "../components/ServiceCard";
import TaskRequsts from "../components/TaskRequsts";
import { Link } from "react-router-dom";

const props = {
  img: "https://cdn.langeek.co/photo/20974/original/",
  title: "Electrician",
};
const props2 = {
  img: "https://cdn.langeek.co/photo/21064/original/",
  title: "Plumber",
};
const props3 = {
  img: "https://cdn.langeek.co/photo/22317/original/",
  title: "Painter",
};
const props4 = {
  img: "https://img.freepik.com/free-vector/construction-worker-cutting-wood_1308-99133.jpg",  
  title: "Carpenter",
};
const props5 = {
  img: "https://static.vecteezy.com/system/resources/previews/005/425/571/non_2x/man-planting-a-tree-in-garden-vector.jpg",  
  title: "Gardener",
};
const props6 = {
  img: "https://cdn.pixabay.com/photo/2020/07/08/14/29/mechanic-5384089_1280.png",  
  title: "Mechanic",
};
const props7 = {
  img: "https://img.lovepik.com/free_png/32/40/09/01i58PICPa95AMH400bqh_PIC2018.png_860.png",  
  title: "Cleaner",
};
const props8 = {
  img: "https://p1.hiclipart.com/preview/816/703/806/chef-cooking-cartoon-kitchen-drawing-food-chief-cook-meal-png-clipart.jpg",  
  title: "Cook",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#f8ebd1]">
     
      {/* <TaskRequsts /> */}
      <div className="text-3xl font-bold m-5 text-black">
        Popular Services
      </div>
      <div className="flex flex-wrap justify-center">
        {/* <Link to="/profile"> */}
          <ServiceCard post={props} />
        {/* </Link> */}
        <ServiceCard post={props2} />
        <ServiceCard post={props3} />
        <ServiceCard post={props4} />
        <ServiceCard post={props5} />
        <ServiceCard post={props6} />
        <ServiceCard post={props7} />
        <ServiceCard post={props8} />

      </div>
      <Search />
    </div>
  );
}
