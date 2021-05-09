import React from 'react';
import web from './image/fish.jpg';

const Contact = () => {
return(
<>
<div className="contact">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="row">
{/* <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
</div> */}
<form className="container-fluid col-md-4 mx-auto mb-4">
  <div class="mb-3 mt-5">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<div className="col-md-4 header-img2">
 
    <img src={web} className="img-fluid animated" alt="home img" />

</div>
</div>
</>
);

};
export default Contact;