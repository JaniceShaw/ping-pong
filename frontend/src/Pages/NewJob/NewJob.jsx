import { useState } from "react";
import { Category } from "../../Components/TailwindComp/CategorySelectJob";
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
  const [urgency, setUrgency] = useState(1);
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState(1);
  // const [categoryName, setCategoryName] = useState("");
  const [img_one, setImageOne] = useState("");
  const [img_two, setImageTwo] = useState("");
  const [img_three, setImageThree] = useState("");
  const [img_four, setImageFour] = useState("");

  const [error, setError] = useState('');

  console.log("error", error);

  const navigate = useNavigate();
  const ListingLink = () => {
    navigate('/listing/jobs/');
  }

  if (error === 201) {

    ListingLink();

  }

  const form = {
    title: title,
    description: description,
    urgency: urgency,
    budget: budget,
    category: category,
    // categoryName: categoryName,
    img_one: img_one,
    img_two: img_two,
    img_three: img_three,
    img_four: img_four,
  };

  const HandleSubmitButton = (event) => {
    event.preventDefault();
    postData('job/request/', form, setError);
  };
  // console.log(error.title);

  // const handleUrgencySelect = (event) => {
  //   console.log(event.value);
  //   const urgencyOptions = event.value;
  //   setUrgency(urgencyOptions);
  // };

  const handleCategorySelect = (event) => {
    console.log(event);
    const categoryOptions = event.value;
    setCategory(categoryOptions);
    // setCategoryName(event.value.label)
  };

  console.log('urg', urgency)
  console.log('jan', error.status)
  if (error.status === 201) {
    console.log("it worked");
  }

  useEffect(() => { }, []);
  return (
    <div className="loginForm w-full max-w-sm  text-center m-auto bg-white p-2">
      <h1 className="text-xl mt-3 pb-6 font-bold text-zinc-700">
        Create a New Job Request
      </h1>
      <form
        className="lex justify-center flex-col mt-5 form-control mb-9"
        onSubmit={HandleSubmitButton}
      >

        <Category name="categoryOptions" onChange={handleCategorySelect} />

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

        <div className="pb-3 relative">
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
        <div className="bordered border-b-2 mb-7 pb-4">
          <p className="text-left text-gray-600 font-semibold">Urgency:</p>

          <div className="form-control block">

            <label className="cursor-pointer label justify-start text-lg">
              <span className="pr-1 w-1/2">
                <span className="text-lg pr-3 ">🐌</span>I can wait
              </span>
              <input
                type="radio"
                name="urgency"
                className="radio radio-secondary"
                value="1"
                onChange={(e) => setUrgency(e.target.value)}
                default
              />
            </label>
          </div>

          <div className="form-control block">
            <label className="cursor-pointer label justify-start">
              <span className="pr-1 w-1/2">
                <span className="text-lg pr-3">🙏</span>Soon please
              </span>
              <input
                type="radio"
                name="urgency"
                className="radio radio-primary"
                value="2"
                onChange={(e) => setUrgency(e.target.value)}
              />
            </label>
          </div>

          <div className="form-control block">
            <label className="cursor-pointer label justify-start">
              <span className="pr-1 w-1/2">
                <span className="text-lg pr-3">⚡️</span>Emergency
              </span>
              <input
                type="radio"
                name="urgency"
                className="radio radio-primary radio-accent"
                value="3"
                onChange={(e) => setUrgency(e.target.value)}
              />
            </label>
          </div>
        </div>
        {/* End Urgency radios */}

        {/* Image upload */}
        <div className="border-b-2 mb-7 pb-4">
          <p className="text-left text-gray-600 font-semibold mb-4">Upload Images:</p>

          <input type='file' className="mb-4" name="img_one" onChange={(e) => setImageOne(e.target.files[0])} />

          <input className="mb-4"
            type='file'
            name='img_two'
            onChange={(e) => setImageTwo(e.target.files[0])}
          />

          <input className="mb-4"
            type='file'
            name='img_three'
            onChange={(e) => setImageThree(e.target.files[0])}
          />

          <input
            type='file'
            name='img_four'
            onChange={(e) => setImageFour(e.target.files[0])}
          />

        </div>
        <input
          type="submit"
          value="submit Job Request"
          className="btn"
        />
        <div className="text-sm text-red-500 h-8 mt-4" id="passwordHelp">{error['detail']}</div>
      </form>

    </div>
  );
};
