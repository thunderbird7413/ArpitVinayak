import React from "react";
import { BsFillHeartFill } from 'react-icons/bs';
import "../css/Contact.css";

export const Contact = () =>{
    return (
        <>
		<div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2><span>Contact</span> Us</h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">Contact</li>
          </ol>
          </div>
          </div>
          </div>
          <br />
          <br />

<div class="container contact">
	<div class="row contact-full">
		<div class="col-md-3 contact-part">
			<div class="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We'd love to hear from you...</h4>
			</div>
		</div>
		<div class="col-md-9">
			<div class="contact-form">
				<div class="form-group">
				  <label class="control-label col-sm-12 text-muted" for="fname">Address : 
				  Unnat Bharat Abhiyan, IIT Roorkee,Uttarakhand</label>
				</div>
				<br />
				<br />
				<div class="form-group">
				  <label class="control-label col-sm-12 text-muted" for="email">PHONE :
(+91) 8318450052</label>
                <br />
				<br />
				<br />
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-12 text-muted" for="comment">EMAIL :
uba@iitr.ac.in</label>
				</div>
				<br />
				<div class="form-group">        
				  <div class="col-sm-offset-2 col-sm-10 button-submit">
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSe_11g8yI5lAlS4o_xix6cp41RATF9-YGiYqAS2GZiC15NnYg/viewform" target="_blank"><button type="submit" class="btn">Sign up for Email</button></a>
				  </div>
				</div>
			</div>
		</div>
	</div>
	<br />
<br />
<center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
<br />
</div>

        </>
    )
}