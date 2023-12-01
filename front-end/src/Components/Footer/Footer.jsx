import "./Footer.css"

export const Footer=()=>{
    return(
        <div>
            <div className="footer">
                <div className="footer-sub">
                    <div className="footer-Left">
                         <div>
                             <ul>
                                 <p>About BookMyBus</p>
                                 <li><a href="">About Us</a></li>
                                 <li><a href="">Contact Us</a></li>
                                 <li><a href="">Mobile Version</a></li>
                                 <li><a href="">Sitemap</a></li>
                                 <li><a href="">Offers</a></li>
                                 <li><a href="">Careers</a></li>
                                 <li><a href="">Values</a></li>
                             </ul>
                         </div>
                         <div>
                             <ul>
                                 <p>About BookMyBus</p>
                                 <li><a href="">T & C</a></li>
                                 <li><a href="">Privacy Policy</a></li>
                                 <li><a href="">FAQ</a></li>
                                 <li><a href="">Blog</a></li>
                                 <li><a href="">Bus Operator Registration</a></li>
                                 <li><a href="">Agent Registration</a></li>
                                 <li><a href="">Insurance Partner</a></li>
                                 <li><a href="">User Agreement</a></li>
                             </ul>
                         </div>
                         <div>
                             <ul>
                                 <p> Global Sites</p>
                                 <li><a href="">India</a></li>
                                 <li><a href="">Singapore</a></li>
                                 <li><a href="">Malaysia</a></li>
                                 <li><a href="">redBus on Mobile</a></li>
                                 <li><a href="">Indonesia</a></li>
                                 <li><a href="">Peru</a></li>
                                 <li><a href="">Colombia</a></li>
                                
                             </ul>
                         </div>
                         <div>
                             <ul>
                                 <p>Our Partners</p>
                                 <li><a href="">Goibibo</a></li>
                                 <li><a href="">Makemytrip</a></li>
                            
                            
                             </ul>
                         </div>
                    </div>
                    <div className="footer-Right">
                          
                           <div className="footer-right-details">BookMyBus is a case study submited by Prahlad Pawar</div>
                          
                           <div style={{float:"left" ,marginTop:"15px"}}>
                               <span>Ⓒ</span>
                               <span>2023 ibibogroup All rights reserved</span>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}