import React,{useState} from "react";
import axios from 'axios'
export default function Footer() {
  const [name,setName]=useState("")
  const [email,setemail]=useState("")
  const [subject,setsubject]=useState("")
  const [result,setresult]=useState("")
  const [message,setmessage]=useState("")
  const handleClick=async()=>{
    const formdata={
      name,
      email,
      subject,
      message
    }
const data= await axios.post("https://tahiri.mahtabengineering.com/public/api/sendform",formdata);
if(data.status==200){
setresult("Form Submitted Successfully")
}else{
  setresult("Something went wrong please try again")
}
}
  return (
    <div>
       {/* <!-- start contact --> */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                CONTACT <span>US</span>
              </h2>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="col-md-6 text-center justify-center align-center items-center text-center">
                <div><img
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 100,
                  }}
                  src="../images/topiwhite.png"
                /></div>
             
              </div>
            </div>
            {/* <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            ></div> */}
            <div
              className="col-md-6 col-sm-4 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
            <div>
           
              <label>Name</label>
              <input name="name" type="text" value={name} className="form-control"onChange={(t)=>setName(t.target.value)} id="fullname"/>
                          <label>Email</label>
              <input name="email" type="email"value={email} className="form-control"onChange={(t)=>setemail(t.target.value)} id="email"/>
                 
                          <label>Subject</label>
              <input name="subject" type="text"value={subject} className="form-control" id="subject"onChange={(t)=>setsubject(t.target.value)}/>
                 
                          <label>Message</label>
              <textarea name="message" rows="4"value={message} className="form-control" id="message"onChange={(t)=>setmessage(t.target.value)}></textarea>
              {result &&<div className="form-group" style={{backgroundColor:'tomato',padding:10,textAlign:'center'}}>
              <h1 color="white">{result}</h1>
              </div>}
              <input type="submit" onClick={()=>handleClick()} name="submit" value="Send" className="form-control"/>
            </div>
             </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <address>
                <p className="address-title">CONTACTS</p>
                <span>Feel free to Contact us.</span>
                <p>
                  <i className="fa fa-phone"></i> +923058452372
                </p>
                <p>
                  <i className="fa fa-envelope-o"></i> ten3live@gmail.com
                </p>
                <p>
                  <i className="fa fa-map-marker"></i> Kandiaro Sindh Pakistan
                  67050
                </p>
              </address>
              <ul className="social-icon">
                <li>
                  <h4>WE ARE SOCIAL</h4>
                </li>
                <br></br>
                <li>
                  <a
                    href="https://facebook.com/7sajjadali"
                    className="fa fa-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ten1live"
                    className="fa fa-twitter"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/7sajjadali"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/ten3live"
                    className="fa fa-linkedin"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end contact --> */}
      {/* <!-- start copyright --> */}
      <footer id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                Copyright &copy; 2024 Tahiri Services
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- end copyright --> */}
    </div>
  );
}
