import React from 'react'


const Third = ({ img, author, desc}) => {
    // const {img,author,desc}=props
  
    const clickHandler=()=>{
      alert("hello world...!")
    }
  
    const clickExample=(author)=>{
      console.log(author)
    }
  
    return (
      // <div>
      //   <img src={props.img} alt="" />
      //   <p>{props.author}</p>
      //   <p>{props.desc}</p>
      // </div>
  
      <div>
        <img src={img} alt="" />
        <p>{author}</p>
        <p>{desc}</p>
       
        <h1 onClick ={()=>console.log(author)}>{author}</h1>
        {/* children defined in between Third can be placed any where in the third */}
        <button type="button" onClick={clickHandler}>For more details click here</button>
        <button type="button" onClick={()=>clickExample(author)}>For more details examples</button>
        {/* displays on click only of clickExample() */}
      </div>
    )
  
  }


// function Three first letter should be capital

export default Third