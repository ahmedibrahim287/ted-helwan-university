import React from "react";
import Gallery from 'react-grid-gallery';

function Teleportation() {

  const IMAGES =
    [{
      src: "/img/Teleportation/1.jpg", thumbnail: "/img/Teleportation/1.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,

    },
    {
      src: "/img/Teleportation/2.jpg", thumbnail: "/img/Teleportation/2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,

    },

    {
      src: "/img/Teleportation/4.jpg", thumbnail: "/img/Teleportation/4.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/5.jpg", thumbnail: "/img/Teleportation/5.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/6.jpg", thumbnail: "/img/Teleportation/6.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/7.jpg", thumbnail: "/img/Teleportation/7.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/8.jpg", thumbnail: "/img/Teleportation/8.jpg",
      thumbnailWidth: 120,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/10.jpg", thumbnail: "/img/Teleportation/10.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/11.jpg", thumbnail: "/img/Teleportation/11.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/12.jpg", thumbnail: "/img/Teleportation/12.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/13.jpg", thumbnail: "/img/Teleportation/13.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/17.jpg", thumbnail: "/img/Teleportation/19.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/14.jpg", thumbnail: "/img/Teleportation/14.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/17.jpg", thumbnail: "/img/Teleportation/18.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/15.jpg", thumbnail: "/img/Teleportation/15.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "/img/Teleportation/17.jpg", thumbnail: "/img/Teleportation/17.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }]

  return (
    <div className="container"><br /><br /><br /><br />
      <img alt="cover" className="img-responsive" src="\img\slider\tele-cover.png" />
      <br />
      <div className="brief-conatiner">

        <h2><span>- </span>Will we ever be able to
          <span className="ted-color">Teleport?</span><span> -</span></h2>
        <p>

          Is teleportation possible? <br />
          But what does teleportation even mean? <br />
          Teleportation is the ability to move instantaneously from one location to another without physically occupying the space in between
          So If teleportation is possible, could a baseball transform into something like a radio wave, travel through buildings, bounce around corners, and then change back into a baseball? Oddly enough, thanks to quantum mechanics, the answer might actually be yes!
          Many of us wonder whether teleportation is science fiction, thankfully the answer to this question resides in TED theory!
          In TEDx HelwanUniversity theory we focus on meanings and the philosophy of ideas that TED adopted <br />

          We strongly believe in the saying: "Ideas worth spreading'', and any idea presented on our stage should be spread and teleported everywhere. <br />

          Luckily, the physical medium who will teleport the idea will be you!
          you are the chest of ideas, you have to spread the ideas and are responsible for keeping them safe for the rest of the world to hear and learn about them.

          <br />
          هل الانتقال اللحظي او "الآني" ممكن؟
          هل سنكون قادرين على الانتقال عن بعد ؟
          ولكن ماذا يعني الانتقال اللحظي ؟
          الانتقال اللحظي أو الآني  هو القدرة على التحرك الفوري من موقع إلى آخر دون احتلال مساحة ما بينهما.
          إذآ إذا كان الإنتقال الآني ممكنًا ، فهل يمكن لكرة البيسبول أن تتحول إلى شيء مثل موجة الراديو ، والسفر عبر المباني ، والارتداد حول الزوايا ، ومن ثم العودة إلي كونها كرة بيسبول؟
          من الغريب أنه بفضل ميكانيكا الكم ، قد تكون الإجابة نعم بالفعل!
          يتساءل الكثير منا ما إذا كان الانتقال الفوري هو خيال علمي ، و الإجابة على هذا السؤال تكمن في نظرية TED!
          وفي نظرية TEDx HelwanUniversity نقوم بالتركيز على المعاني وفلسفة الأفكار التي تبنتها TED.
          <br />
          نحن نؤمن بشدة بالقول: "أفكار تستحق الإنتشار" ، لذلك يجب نشر أي فكرة تقدم على مسرحنا ونقلها في كل مكان.
          <br />
          ولحسن الحظ ، أن الذي سيعمل على نقل الفكرة سيكون أنت!
          أنت صندوق الأفكار ، وعليك أن تنشر الأفكار وأن تكون مسؤولاً عن الحفاظ على سلامتها للوصول والتعرف عليها في جميع انحاء العالم.



          <br />
        </p>
      </div>
      <div className="location-container">
        {/* Location Div*/}
        <div className="location-box">

          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span> Helwan University Hall </span>

        </div>
        {/* End Of Location Div*/}
        {/*Calender Div*/}
        <div className="location-box">
          <i className="fa fa-calendar" aria-hidden="true"> </i>
          <span>  April 20, 2018</span>
        </div>
        {/*End Of Calender Div*/}
        {/*Clock Div*/}
        <div className="location-box">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>09:30 A.M</span>
        </div>
        {/*End Of Clock Div*/}

      </div>
      <div class="container mt-40">

        <div className="latest-speakers">
          <span className="latest-speakers-title">Teleportation Speakers &  <span className="ted-color">Performers</span></span>
          <div className="latest-speakers-title-dash"><span>_____________</span></div>
        </div><div class="row mt-30">



          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-abdelrahmanalaa.png" />
              <h3 class="title">Abdulrahman Alaa</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    <a href=" https://youtu.be/Qc3SSgGjKjc" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See His Talk</button></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-kerilos.png" />
              <h3 class="title">Kirollos Rizk</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    <a href="https://youtu.be/-H_3rkcAo2Y" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See His Talk</button></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-moaz.png" />
              <h3 class="title">Mazen Moataz</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    <a href="https://youtu.be/Cb5ItMFTPEI" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See His Performace</button></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-mina.png" />
              <h3 class="title">Mina Henein</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    <a href="https://youtu.be/G2_fL3oHdxs" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See His Talk</button></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-mohamedelshorie.png" />
              <h3 class="title">Mohamed Al Sheraie</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    <a href="https://youtu.be/4AwY4jvFQOw" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See His Talk</button></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-nada.png" />
              <h3 class="title">Nada Khalil</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    <a href="https://youtu.be/zWjz5a_wrNw" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See Her Talk</button></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-nureen.png" />
              <h3 class="title">Naureen Youssef</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    <a href="https://youtu.be/jY80nrjMRBs" rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See Her Talk</button></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box8">
              <img src="\img\speakers\tele-reemnabil.png" />
              <h3 class="title">Reem Nabil</h3>
              <div class="box-content">
                <ul class="icon">
                  <div className="wrapper col-6">
                    {/*  eslint-disable-next-line  */}
                    {/* <a href="    " rel="noreferrer" target="_blank"><button type="submit" className=" btn--border btn-read btn--animated">See His Talk</button></a> */}
                  </div>
                </ul>
              </div>
            </div>
          </div>

        </div></div>

      <div className="brief-container"><br /></div>
      <div className="brief-container"><br /></div>
      <h2><span className="ted-color">Memories Of Teleportation</span></h2>
      <hr />
      <Gallery images={IMAGES} />



      <div className="brief-conatiner "></div><div className="brief-conatiner "></div>
    </div>
  );
}

export default Teleportation;
