import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CalendyComponent, Navbar } from "../../components/exports";
import "./CoachPage.css";

const CoachPage = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState({});
  useEffect(() => {
    const fetchCoach = async () => {
      const response = await axios.get(`http://localhost:3001/coach/${id}`);
      console.log(response.data.coach);
      setCoach(response.data.coach);
    };
    fetchCoach();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Navbar />
     
        <div className="flex flex-col md:flex-row w-full">
          <div className=" imgdiv w-full md:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coach Avatar"

            />
          </div>
          <div className=" flex flex-col w-full text-center mt-4">
            <h1 className="font-bold md:text-xl">{coach.name}</h1>
            <h1 className="font-bold md:text-xl">{coach.email}</h1>
            <h1 className="font-bold md:text-xl">
              {coach?.about ?? "description"}
            </h1>

            {/* <p>{coach.calendyLink}</p> */}
            <div className="flex flex-row w-full">
              <h1 className="font-bold md:text-xl">
                {coach?.price ?? "this is it "}
              </h1>
              <CalendyComponent calendyLink={coach.calendyLink} />
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default CoachPage;
