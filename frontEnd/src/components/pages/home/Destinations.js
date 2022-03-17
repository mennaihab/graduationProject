import React, { Component } from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


//Import Images
import destinations1Img from "../../../assets/images/destination/d-1.jpg"
import destinations4Img from "../../../assets/images/destination/d-4.png"
import destinations5Img from "../../../assets/images/destination/d-5.png"
import destinations6Img from "../../../assets/images/destination/d-6.png"
import destinations7Img from "../../../assets/images/destination/d-7.png"
import destinations8Img from "../../../assets/images/destination/d-8.png"
import destinations9Img from "../../../assets/images/destination/d-9.png"
import destinations10Img from "../../../assets/images/destination/d-10.png"
import destinations11Img from "../../../assets/images/destination/d-11.png"
import destinations2Img from "../../../assets/images/destination/d-2.jpg"
import destinations3Img from "../../../assets/images/destination/d-3.png"
import Faq from "../faq/Faq";

class Destinations extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
 
  

    //     var noti = document.querySelector(".cart");
    //     var button = document.getElementsByTagName('button');
    //     for (var but of button) {
    //         but.addEventListener('click', (e) => {
    //             noti.setAttribute('data-count', this.state.count);
    //             noti.classList.add('zero');
    //         })
    //     }
    // }
        
    // var add = Number(noti.getAttribute('data-count') || 0);
    function 
    componentDidMount () {
          
        this.setState({});
        document.body.style['--zoom'] = '5';
        let products = [
            {
               
                    id: '1',
                    image: 'https://picsum.photos/id/180/2400/1600',
                    name: 'Alexandria',
                    price: 1400,
              },
            {
                image: 'https://picsum.photos/id/111/4400/2656',
                name: 'sharm',
                price: 2400,
            },
            {
                image: 'https://picsum.photos/id/21/3008/2008',
                name: 'marsa alam',
                type: 1000,
            },
            {
                image: 'https://picsum.photos/id/21/3008/2008',
                name: 'marina',
                type: 1000,
            },
            {
                image: 'https://picsum.photos/id/21/3008/2008',
                name: 'W Shoes',
                type: 1000,
            },
            {
                image: 'https://picsum.photos/id/21/3008/2008',
                name: 'W ',
                type: 1000,
            },
    

          ];

       
   
     products.forEach(article => {
            var cityDiv= document.createElement('div');
            cityDiv.className = "package-card";
            // let textNode = document.createTextNode('this is a new div');
            // divElement.appendChild(textNode);
            var citiesData = ` <div class ="package-thumb">
            <img src =${destinations5Img} alt = "" class ="img-fluid"/>
            </div>
            <div class="package-details">
                <h3><i class ="flaticon-arrival"></i> ${article.name}</h3> 
                <div class="package-info">
                    <h5><i class="flaticon-footprints"></i><span>Beach city</span></h5>
                </div>
            </div>`
        // divElement.innerHTML = hhh;
        cityDiv.insertAdjacentHTML('beforeend', citiesData)
            // divElement.innerHTML = 
            let cityContainerDiv = document.querySelector(".city");
            cityContainerDiv.appendChild(cityDiv);
        
        })

    
     products.forEach(article => {
            var hotelDiv = document.createElement('div');
            hotelDiv.className = "package-card";
            var hotelData = ` <div class ="package-thumb">
            <img src =${destinations5Img} alt = "" class ="img-fluid"/>
            </div>
            <div class="package-details">
                <div class="package-info">
                    <h4 class="hotel-name">Helton</h4>
                </div>
                <h3><i class ="flaticon-arrival"></i> cairo</h3>
               <div class="package-price"> <h5><span>$300</span>/Per Person</h5></div>
                <div class ="package-rating">
                    <i class ="bx bxs-star"></i>
                    <strong><span>1.3K+ reviews</span></strong>
                </div>
                <div>
                    <button class="add-plan-button" > Add to Plan </button>
                </div>
            </div>`
  
            hotelDiv.insertAdjacentHTML('beforeend', hotelData)
            let hotelContainerDiv = document.querySelector(".most-pop-hotel");
            hotelContainerDiv.appendChild(hotelDiv);
        
        })
     products.forEach(article => {
            var restDiv = document.createElement('div');
            restDiv.className = "package-card";
            var restData = ` <div class ="package-thumb">
            <img src =${destinations5Img} alt = "" class ="img-fluid"/>
            </div>
            <div class="package-details">
                <div class="package-info">
                    <h4 class="hotel-name">shawerma</h4>
                </div>
                <h3><i class ="flaticon-arrival"></i> cairo</h3>
                <div class ="package-rating">
                    <i class ="bx bxs-star"></i>
                    <strong><span>1.3K+ reviews</span></strong>
                </div>
                <div>
                    <button class="add-plan-button" > Add to Plan </button>
                </div>
            </div>`
  
            restDiv.insertAdjacentHTML('beforeend', restData)
            let restContainerDiv = document.querySelector(".most-pop-rest");
            restContainerDiv.appendChild(restDiv);
        
        })

    
     products.forEach(article => {
            var placeDiv = document.createElement('div');
            placeDiv.className = "package-card";
            var placeData = ` <div class ="package-thumb">
            <img src =${destinations5Img} alt = "" class ="img-fluid"/>
            </div>
            <div class="package-details">
                <div class="package-info">
                    <h4 class="hotel-name">Dream park</h4>
                </div>
                <h3><i class ="flaticon-arrival"></i> cairo</h3>
                <div class ="package-rating">
                    <i class ="bx bxs-star"></i>
                    <strong><span>1.3K+ reviews</span></strong>
                </div>
                <div>
                    <button class="add-plan-button" > Add to Plan </button>
                </div>
            </div>`
  
            placeDiv.insertAdjacentHTML('beforeend', placeData)
            let placeContainerDiv = document.querySelector(".most-pop-places");
            placeContainerDiv.appendChild(placeDiv);
        
        })

    }
    render() {

        const destinationsOptions = {
            // onInitialize: function(event) {
            //     // Check if only one slide in carousel
            //     if (item_count <= 1) {
            //         this.settings.loop = false;
            //         this.settings.nav = false;
            //         this.settings.dots = false;
            //     }
            //     // I have more than one slide?! Great what are my options?!
            //     else {
            //         this.settings.loop = true;
            //         this.settings.nav = true;
            //         this.settings.dots = true;
            //     }
            // },
            stagePadding: 1,
            items: 5,
            loop: true,
            margin: 5,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: false,
            navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 2,
                    nav: false,
                    dots: false,
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false,
                    dots: true,
                },
            
            }
        };
      
      let  products = [
          {
            id: '1',
                image: 'https://picsum.photos/id/180/2400/1600',
                name: 'MacBook',
                price: 1400,
            },
            {
                image: 'https://picsum.photos/id/111/4400/2656',
                name: 'Old Car',
                price: 2400,
            },
            {
                image: 'https://picsum.photos/id/21/3008/2008',
                name: 'W Shoes',
                type: 1000,
            },
        ];

      
       
        return (
            <>
                {/* =============== city area start =============== */}
                <div className="destinations-area pt-105 "  >
                    <div className="container">
                        <div className="col-lg-9 col-md-9 sli" > 
                        <div align="center" class="section-style">
                                <h5>Your Guide to Egypt</h5>
                                    <h3>Explore tourist destinations </h3>
                                </div>
                        <OwlCarousel  className="row owl-carousel destinations-1 city"  {...destinationsOptions}> </OwlCarousel>
                            </div>
                            <div align="right">
                            <h6><a class="see-more" href="ewlkekrr"> Explore More Cities..</a></h6>
                        </div>
                        </div>
                    </div>
                {/* most popular hotels */}
                <div className="destinations-area pt-105 "  >
                    <div className="container">
                        <div className="col-lg-9 col-md-9 sli" > 
                        <div align="center" class="section-style">
                                    <h3>Most Popular</h3>
                                </div>
                        <div class="section-style">
                                <h5>Enjoy your stay with our</h5>
                                <h3>Hotel</h3>
                                </div>
                        <OwlCarousel  className="row owl-carousel destinations-1  most-pop-hotel"  {...destinationsOptions}> </OwlCarousel>
                        </div>
                        </div>
                </div>
                {/* most popular restaurants */}
                <div className="destinations-area pt-105 "  >
                    <div className="container">
                        <div className="col-lg-9 col-md-9 sli" > 
                        <div class="section-style">
                                <h5>Enjoy your meal with our</h5>
                                <h3>Restaurants</h3>
                                </div>
                        <OwlCarousel  className="row owl-carousel destinations-1  most-pop-rest"  {...destinationsOptions}> </OwlCarousel>
                            </div>
                           
                        </div>
                    </div>
                {/* most popular places */}
                <div className="destinations-area pt-105 "  >
                    <div className="container">
                        <div className="col-lg-9 col-md-9 sli"> 
                        <div class="section-style">
                                <h5>visit famous places by choosing our</h5>
                                    <h3>Attractions</h3>
                                </div>
                        <OwlCarousel  className="row owl-carousel destinations-1  most-pop-places"  {...destinationsOptions}> </OwlCarousel>
                            </div>
                        </div>
                    </div>
            </>
        );
      
    } 
}

 
export default Destinations;