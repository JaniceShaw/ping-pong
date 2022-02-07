import { SelectJob } from "../../Components/TailwindComp/SelectJob";

export const PrivateJob = () => {

  const handleSendJob = (event) => {
    event.preventDefault();
    // GetUserToken(email, password, setError);
    // GetUserData(setUser, setError);
  };

  return (
    <>
      <h2>private job request for</h2>
      <h1>roberto_rodriguez</h1>
      <form action="">
        <textarea placeholder="Description..." name="Text1" cols="40" rows="5"></textarea>
        <br/>
        <SelectJob/>
        <input
          type="submit"
          className="field-submit"
          value="Send job request"
          onClick={handleSendJob}
        />
      </form>
    </>
  );
};
