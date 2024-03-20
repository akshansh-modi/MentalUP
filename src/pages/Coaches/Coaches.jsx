import { Navbar } from "../../components/exports";
import { useEffect, useState } from "react";
import CoachCard from "../../layouts/CoachCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Coaches = () => {
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const response = await axios.get("http://localhost:3001/coach"); // Use lowercase "axios"
        // Await response.json()
        console.log(response.data.coaches);
        setCoaches(response.data.coaches);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoaches();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        {coaches.map((coach) => (
          <Link to={`/coaches/${coach._id}`} key={coach.id}>
            <CoachCard key={coach.id} coach={coach}  calendyLink={coach.calendyLink}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coaches;
