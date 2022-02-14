import React, {useState} from 'react';

export const Review = (props) => {

  const [text_content, setText_content] = useState('');
  const [rating, setRating] = useState(0);


  const handleTextInput = (event) => {
    setText_content(event.target.value);
  };

    return (
      <div className='Review'>
          <form action="" onSubmit={props.handelSubmit}>

            <textarea
            value={text_content}
            placeholder={'Enter your Review here'}
            className='textarea-input reviewText'
            cols='20'
            onChange={handleTextInput}
            id='text_content'
            rows='5'></textarea>

            <input type = "hidden" value = {props.userId} />
            <input type = "hidden" value = {props.type} />
            <input type="submit" className="review_submit" value="Submit" onClick={props.handelSubmit} />
          </form>
        </div>
    );
  };
