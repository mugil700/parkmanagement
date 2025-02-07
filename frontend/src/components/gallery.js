import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <div >
        

         <nav class="navbar navbar-expand-lg bg-dark navbar-dark" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to="/userDetails" class="nav-link">
            <li class="nav-item active">
             Home 
            </li>
            </Link>
            <Link to="/about" class="nav-link">
            <li class="nav-item active">
             About Us
            </li>
            </Link>
            <Link to="/gallery" class="nav-link">
            <li class="nav-item active">
             Gallery
            </li>
            </Link>
            <Link to="/map" class="nav-link">
            <li class="nav-item active">
             Map
            </li>
            </Link>
          
          </ul>
          <ul class="nav navbar-nav navbar-right" id="right">
            <li>Park</li>

          </ul>
        </div>

      </nav>
      <br/>
      <div class="row" >
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://wallpapercave.com/wp/wp4064471.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://media.istockphoto.com/id/474690025/photo/children-at-zoo-feeding-giraffe.jpg?b=1&s=170667a&w=0&k=20&c=FVeSwWa0H-1uRjirsYsjMoVMk3noF9mcxHfKFvNHJ94="
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://c4.wallpaperflare.com/wallpaper/180/283/777/panda-in-zoo-wallpaper-preview.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://www.globaltimes.cn/Portals/0/attachment/2022/2022-12-07/825bed00-839b-4af8-a2b1-24939442fe71.jpeg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://images.squarespace-cdn.com/content/v1/584ee3cc2994cac9e545aadd/1557174295844-H3Z8HU73N58ZVCRC18PS/Zoos+and+Aquariums"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://zoo.sandiegozoo.org/sites/default/files/body_side_image/plan_your_visit_guest_services.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />

<img
      src="https://media.istockphoto.com/id/1289372008/photo/kids-feed-rhino-in-zoo-family-at-animal-park.jpg?b=1&s=170667a&w=0&k=20&c=MXDr0CWcflP5KFhPoYwR22DYUzou9wr_ENQADzY_6bY="
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />

<img
      src="https://freedesignfile.com/upload/2016/12/Macaws-in-the-zoo-HD-picture-02.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />

<img
      src="https://images4.alphacoders.com/871/thumb-1920-871898.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />

<img
      src="https://www.nativeplanet.com/photos/412x309x100/2013/07/mysore-photos-mysore-zoo-peacock_1402304043.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />

<img
      src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-65247603/65247603.jpg"   class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />

<img
      src="https://www.riverbanks.org/animals/assets/graphics/birds/header_0600@2x.jpg?v=20230508.00"
      class="w-100 shadow-1-strong rounded mb-5"
      alt="Yosemite National Park"
    />
  </div>
  
</div>
      
        <div class="announcements">
    <span class="ticker">Announcements</span>
    <marquee class="news-content">
        <p>&#x270C;Zoo Timings : 10.00 A.M To 5.00 P.M .   </p><p>&#x270C;You can Book tickets in online.</p>
        <p>&#x270C;You can Adopt Our Animals.</p>
        <p> &#x2714;You can Bring your camera and snacks. </p>
        <p>&#x2716;Do not give food to Animals.</p>
        <p>&#x2716;Do not get close to the cage.</p>
        <p>&#x2709;Contact us: park@gmail.com</p>
    </marquee>
</div></div>
  )
}

 