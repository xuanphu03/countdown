import bgr from '@/assets/image/bgr.jpg';
import circularPattern from '@/assets/image/circular-pattern.png';
import pattern from '@/assets/image/pattern.png';
import bigFlower1 from '@/assets/image/big-flower.png';
import bigFlower2 from '@/assets/image/big-flower1.png';
import bigFlower3 from '@/assets/image/big-flower2.png';
import dragon from '@/assets/image/dragon.png';
import flower from '@/assets/image/flower.png';
import flower1 from '@/assets/image/flower1.png';
import flower2 from '@/assets/image/flower2.png';
import lanterns from '@/assets/image/lanterns.png';
import cloud1 from '@/assets/image/cloud-red1.png';
import cloud2 from '@/assets/image/cloud-red2.png';
import lion1 from '@/assets/image/Lion-dance.gif';
import lion2 from '@/assets/image/Lion-dance2.gif';
import rim from '@/assets/image/rim1.png';
import textureClouds from '@/assets/image/texture-clouds.png';
import bigClouds1 from '@/assets/image/big-clouds1.png';
import bigClouds2 from '@/assets/image/big-clouds2.png';
import bigClouds3 from '@/assets/image/big-clouds3.png';
import apricotBlossom from '@/assets/image/apricot-blossom.png';
import bg1 from '@/assets/image/bg1.jpg';
import music from '@/assets/image/nhac.mp3';
import avt from '@/assets/image/avt.png';

export default function Happynewyear() {
  const buttonActive = () => {
    const boxFlower = document.querySelector('.flower-img:nth-child(1)');
    const boxFlower2 = document.querySelector('.flower-img:nth-child(2)');
    const boxFlower3 = document.querySelector('.flower-img:nth-child(3)');
    const boxFlower4 = document.querySelector('.flower-img:nth-child(4)');
    const boxFlower5 = document.querySelector('.flower-img:nth-child(5)');
    const boxFlower6 = document.querySelector('.flower-img:nth-child(6)');
    const circleActive = document.querySelector('.circle');
    const boxsliderimg1 = document.querySelector('.box-slider_img1');
    const dragonActive = document.querySelector('.dragon');
    const numberActive = document.querySelector('.box-number');
    const buttonDisplay = document.querySelector('.button');
    const rhombus1 = document.querySelector('.rhombus:nth-child(1)');
    const rhombus2 = document.querySelector('.rhombus:nth-child(2)');
    const rhombusImg = document.querySelector('.rhombus-img');
    const mailActive = document.querySelector('.mail');
    const mySong = document.getElementById('song') as HTMLAudioElement ;

    boxFlower!.classList.toggle('active');
    boxFlower2!.classList.toggle('active');
    boxFlower3!.classList.toggle('active');
    boxFlower4!.classList.toggle('active');
    boxFlower5!.classList.toggle('active');
    boxFlower6!.classList.toggle('active');
    circleActive!.classList.toggle('active');
    boxsliderimg1!.classList.toggle('active');
    dragonActive!.classList.toggle('active');
    numberActive!.classList.toggle('active');
    buttonDisplay!.classList.toggle('active');
    rhombus1!.classList.toggle('active');
    rhombus2!.classList.toggle('active');
    rhombusImg!.classList.toggle('active');
    mailActive!.classList.toggle('active');
    if(mySong.paused) mySong.play();

  };

  const slider3 = document.querySelector('.slider3');
  const mail = () => {
    slider3!.classList.add('active');
  };

  const closeMail = () => {
    slider3!.classList.remove('active');
  }
  return (
    <div className="relative w-full h-full">
      <div className="box-slider">
        <div className="slider1">
          <img src={bgr} alt="" />
          <div className="happynewyear">
            <div className="textHappynewyear">
              <div className="box-span">
                <span></span>
              </div>
              <div className="box-span">
                <span></span>
              </div>
              <div className="box-span">
                <span></span>
              </div>
              <div className="box-span">
                <span></span>
              </div>
            </div>
          </div>
          <div className="box-button">
            <div className="button">
              <button onClick={buttonActive}>Ấn vào đây nè!</button>
              <span>
                <i className="fa-solid fa-heart"></i>
              </span>
            </div>
          </div>
          <div className="box-slider_img1">
            <div className="slider-img1">
              <img src={circularPattern} alt="" />
            </div>
            <div className="pattern">
              <img src={pattern} alt="" />
            </div>
          </div>
          <div className="circle">
            <span></span>
          </div>
          <div className="box-flower">
            <div className="flower-img">
              <img src={flower} alt="" />
            </div>
            <div className="flower-img">
              <img src={flower} alt="" />
            </div>
            <div className="flower-img">
              <img src={flower1} alt="" />
            </div>
            <div className="flower-img">
              <img src={flower1} alt="" />
            </div>
            <div className="flower-img">
              <img src={flower2} alt="" />
            </div>
            <div className="flower-img">
              <img src={flower2} alt="" />
            </div>
          </div>
          <div className="box-slider_img2">
            <div className="box-slider-img2">
              <div className="slider-img2">
                <img src={lanterns} alt="" />
              </div>
            </div>
            <div className="box-slider-img3">
              <div className="slider-img3">
                <img src={lanterns} alt="" />
              </div>
            </div>
            <div className="box-slider-img4">
              <div className="slider-img4">
                <img src={lanterns} alt="" />
              </div>
            </div>
            <div className="box-slider-img5">
              <div className="slider-img5">
                <img src={lanterns} alt="" />
              </div>
            </div>
          </div>
          <div className="slider-img6">
            <img src={cloud1} alt="" />
            <img src={cloud2} alt="" />
            <img src={cloud2} alt="" />
          </div>
          <div className="box-lion_dance">
            <div className="lion_dance1 before:w-80">
              <img src={lion1} alt="" />
            </div>
            <div className="lion_dance2">
              <img src={lion2} alt="" />
            </div>
          </div>
          <div className="dragon">
            <img src={dragon} alt="" />
          </div>
          <div className="box-number">
            <div className="number2023">
              <div className="number">
                <span>2</span>
              </div>
              <div className="number">
                <span>0</span>
              </div>
              <div className="number">
                <span>2</span>
              </div>
              <div className="number">
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="box-rim">
            <div className="rim1">
              <img src={rim} alt="" />
            </div>
            <div className="rim2">
              <img src={rim} alt="" />
            </div>
          </div>
          <div className="box-texture_clouds">
            <div className="texture_clouds1">
              <img src={textureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={textureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={textureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={textureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={textureClouds} alt="" />
            </div>
          </div>
          <div className="box-big_clouds">
            <div className="big_clouds1">
              <img src={bigClouds1} alt="" />
            </div>
            <div className="big_clouds2">
              <img src={bigClouds2} alt="" />
            </div>
            <div className="big_clouds3">
              <img src={bigClouds3} alt="" />
            </div>
          </div>
        </div>
        <div className="slider2">
          <div className="rhombus"></div>
          <div className="rhombus"></div>
          <div className="rhombus-img">
            {/* image avt */}
            <img src={avt} alt="" />
          </div>
          <div className="mail" onClick={mail}>
            <button>
              <i className="fa-regular fa-envelope">Hihi</i>
            </button>
            <span className="heart">
              <i className="fa-solid fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="slider3">
          <div className="box-content">
            <div className="left">
              <img src={bg1} alt="" />
              <div className="center"></div>
              <div className="lanterns-content">
                <img src={lanterns} alt="" />
              </div>
              <div className="box-big_flowers">
                <img src={bigFlower1} alt="" />
                <img src={bigFlower1} alt="" />
                <img src={bigFlower1} alt="" />
                <img src={bigFlower2} alt="" />
                <img src={bigFlower2} alt="" />
                <img src={bigFlower3} alt="" />
                <img src={bigFlower3} alt="" />
                <img src={bigFlower3} alt="" />
              </div>
              <div className="box-circle_left">
                <div className="circle_left">
                  <img src={circularPattern} alt="" />
                  <div className="text-content">
                    <h2>Happy New</h2>
                    <h1>Year</h1>
                    <span>2024</span>
                  </div>
                </div>
              </div>
              <div className="apricot_blossom">
                <img src={apricotBlossom} alt="" />
                <img src={apricotBlossom} alt="" />
                <img src={apricotBlossom} alt="" />
                <img src={apricotBlossom} alt="" />
                <img src={apricotBlossom} alt="" />
                <img src={apricotBlossom} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="content">
                <div className="title">
                  <h1>Tặng bạn Hặn iu dấu!!!</h1>
                </div>
                <p> const buttonSong = document.querySelec tor('.button');</p>
                <div className="fixedContent">
                  <h3>Người gửi: Dương Xuân Phú</h3>
                </div>
              </div>
            </div>
          </div>
          <i onClick={closeMail} className="fa-solid fa-xmark font-bold">
            X
          </i>
        </div>
      </div>

      <audio id="song">
        <source src={music} type="audio/mp3" />
      </audio>
    </div>
  );
}
