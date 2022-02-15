import React, {useState} from 'react';

export const Review = (props) => {

  const [text_content, setText_content] = useState('');
  // const [rating, setRating] = useState(props.rate);


  const handleTextInput = (event) => {
    setText_content(event.target.value);
  };

    return (
      <div className='Review'>
          <form action="" onSubmit={props.handelSubmit}>
              <label htmlFor="text_content">Review</label>
                <textarea
                    value={text_content}
                    placeholder={'Enter your Review here'}
                    className='textarea-review reviewText'
                    cols='20'
                    onChange={handleTextInput}
                    id='text_content'
                    rows='3'>
                </textarea>

              <input type = "hidden" value = {props.userId} />
              <input type = "hidden" value = {props.type} />
              <input type="submit" className="review_submit btn" value="Submit" />
          </form>
        </div>
    );
  };
