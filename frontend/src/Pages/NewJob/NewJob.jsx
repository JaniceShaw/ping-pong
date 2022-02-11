import { useState } from "react";
import { Category } from "../../Components/TailwindComp/CategorySelect";
import Select from "react-select";
import { postData } from "../../Hooks/DataFetching";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// const UrgencyOptions = [
//   { value: "1", label: "I can wait" },
//   { value: "2", label: "Soon please" },
//   { value: "3", label: "Emergency!" },
// ];

export const NewJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [img_one, setImageOne] = useState("");
  const [img_two, setImageTwo] = useState("");
  const [img_three, setImageThree] = useState("");
  const [img_four, setImageFour] = useState("");

  const [error, setError] = useState();

  const navigate = useNavigate();

  const form = {
    title: title,
    description: description,
    urgency: urgency,
    budget: budget,
    category: category,
    img_one: img_one,
    img_two: img_two,
    img_three: img_three,
    img_four: img_four,
  };

  const HandleSubmitButton = (event) => {
    event.preventDefault();
    postData('job/request/', form, setError);
    if (!error) {
      navigate('/listing/helpers');
    }
  };
  // console.log(error.title);

  const handleUrgencySelect = (event) => {
    console.log(event);
    const urgencyOptions = event.value;
    setUrgency(urgencyOptions);
  };

  const handleCategorySelect = (event) => {
    console.log(event);
    const categoryOptions = event.value;
    setCategory(categoryOptions);
  };

  useEffect(() => { }, []);
  return (
    <div className="loginForm w-full max-w-sm  text-center m-auto">
      <h1 className="text-xl mt-3 pb-6 font-bold text-zinc-700">
        Create a New Job Request
      </h1>
      <form
        className="lex justify-center flex-col mt-5 form-control"
        onSubmit={HandleSubmitButton}
      >
        <div className="pb-9 relative">
          <input
            className="field-input-login peer"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
          <label htmlFor="title" className="login-label">
            Title
          </label>
          <div className="text-xs text-red-500 h-3 text-left" id="emailHelp">
            {error ? error.title : null}
          </div>
        </div>

        <div className="pb-7 relative">
          <textarea
            value={description}
            placeholder={"Describe your job"}
            className="textarea-input peer"
            cols="20"
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            rows="5"
          ></textarea>

          <label htmlFor="description" className="textarea-label">
            Describe your job
          </label>
          <div className="text-xs text-red-500 h-3 text-left" id="emailHelp">
            {error ? error.description : null}
          </div>
        </div>

        <div className="pb-9 relative">
          <input
            className="field-input-login peer"
            type="text"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            id="budget"
          />
          <label htmlFor="budget" className="login-label">
            Budget
          </label>
          <div className="text-xs text-red-500 h-3 text-left" id="emailHelp">
            {error ? error.budget : null}
          </div>
        </div>

        {/* Urgency radios */}
        <div className="bordered mb-4">
          <p className="text-left text-gray-600 font-semibold">Urgency:</p>
          <div className="form-control inline-block w-1/3">
            <label className="cursor-pointer label justify-start">
              <span className="label-text pr-1 text-xs">
                <span className="text-lg">🐌</span>I can wait
              </span>
              <input
                type="radio"
                name="urgency"
                className="radio radio-secondary"
                value="1"
                onChange={handleUrgencySelect}
                default
              />
            </label>
          </div>

          <div className="form-control inline-block w-1/3">
            <label className="cursor-pointer label justify-start">
              <span className="label-text pr-1 text-xs">
                <span className="text-lg">🙏</span>Soon please
              </span>
              <input
                type="radio"
                name="urgency"
                className="radio radio-primary"
                value="2"
                onChange={handleUrgencySelect}
              />
            </label>
          </div>

          <div className="form-control inline-block w-1/3">
            <label className="cursor-pointer label justify-start">
              <span className="label-text pr-1 text-xs">
                <span className="text-lg">⚡️</span>Emergency
              </span>
              <input
                type="radio"
                name="urgency"
                className="radio radio-primary radio-accent"
                value="3"
                onChange={handleUrgencySelect}
              />
            </label>
          </div>
        </div>
        {/* End Urgency radios */}

        {/* <Category name="categoryOptions" onChange={handleCategorySelect} /> */}

        <input type='file' name="img_one" onChange={(e) => setImageOne(e.target.files[0])} />


        {/* 
          <input
            type='image'
            name='img_two'
            onChange={(e) => setImageTwo(e.target.files[0])}
          />

          <input
            type='image'
            name='img_three'
            onChange={(e) => setImageThree(e.target.files[0])}
          />

          <input
            type='image'
            name='img_four'
            onChange={(e) => setImageFour(e.target.files[0])}
          /> */}


        <input
          type="submit"
          value="submit changes"
          className="border-2 border-black cursor-pointer"
        />
      </form>
      {/* <p>{error}</p> */}
    </div>
  );
};
