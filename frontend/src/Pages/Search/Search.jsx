import { SearchTool } from "../../Components/Searchtool/Searchtool";
import { useNavigate } from "react-router-dom";


export const SearchPage = () => {
  
  const navigate = useNavigate();

  const handleCreateNewJob = (event) => {
      event.preventDefault();
      navigate("/newjob")
  }

  return (
    <>
      <SearchTool/>
      <p>OR</p>
      <input onClick={handleCreateNewJob} type="submit" placeholder="GO"/>
    </>
  );
};
