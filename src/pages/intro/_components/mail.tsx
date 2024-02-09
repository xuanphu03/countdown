import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import bigFlower1 from '@/assets/image/big-flower.png';
import bigFlower2 from '@/assets/image/big-flower1.png';
import bigFlower3 from '@/assets/image/big-flower2.png';
import apricotBlossom from '@/assets/image/apricot-blossom.png';
import lanterns from '@/assets/image/lanterns.png';
import circularPattern from '@/assets/image/circular-pattern.png';
import bg1 from '@/assets/image/bg1.jpg';
import { MailIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Mail() {
  return (
    <Dialog>
      <DialogTrigger className="mail">
        <div className="box-mail flex items-center group">
          <p className="flex items-center px-2 group-hover:text-white">Nhấn tiếp vào đây!</p>
          <button className="group-hover:scale-110 group-hover:text-[#ffe100]">
            <MailIcon />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="slider3 z-[400] bg-transparent h-fit border-none hidden md:grid">
        <div className="box-content md:w-[800px]">
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
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <p>
                      Chúc cậu năm mới vui vẻ, thêm tươi trẻ, luôn mới mẻ và càng mạnh khỏe. Tiền vào như nước, rút ra
                      từ từ. Sức khỏe dồi dào, học tập không bị hành bởi đống Deadline nhó. Và tớ hy vọng sẽ được thấy
                      cậu kết thúc năm cũ bằng một tấm hình xuất sắc được cậu đăng lên Facebook còn không gửi riêng cho
                      tớ cũng được hehee!
                    </p>
                  </CarouselItem>
                  <CarouselItem>
                    <p>
                      Vậy là kết thúc một năm nữa rồi! Chúng ta biết nhau cũng được hơn 8 năm nhở. Khoảng thời gian trôi
                      nhanh thật đấy, tớ nhớ trước đây có nhiều lần cãi nhau, block nhau các kiểu thế mà vẫn còn chơi
                      với nhau đến bây giờ, quá là tuyệt vời luôn. Cậu biết gì không, Tớ rất thích được nghe cậu hát
                      nha, đã xinh còn hát hay mà biết chơi đàn nữa.
                    </p>
                  </CarouselItem>
                  <CarouselItem>
                    <p>
                      Một năm vừa qua Hặn đã làm được những gì rồi. Còn Phú thì cũng đã hoàn thành một vài dự án về UI
                      (tức là thiết kế giao diện website), cũng đã ra lại Hà Nội chơi nè. Nhưng lần đó điều tớ tiếc nhất
                      là vẫn chưa được gặp cậu, dù cho chúng ta đã rất gần nhau rồi. Không sao cả, những gì mình chưa
                      làm được năm vừa rồi thì sẽ cố gắng để năm sau thực hiện nếu không gặp vấn đề gì cản trở. Mặc dù
                      hiện giờ tớ vẫn chưa được oke lắm, nhưng tớ mong ngày mà được gặp cậu thì tớ cũng là gì đó ^^
                    </p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="fixedContent">
                <h3>Người gửi: Dương Xuân Phú</h3>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogContent className="slider3 z-[400] bg-transparent h-fit border-none md:hidden">
        <div className="w-screen bg-[#c71435] p-5">
          <div className="contentMobile bg-[#ffd88a] p-5 ">
            <div className="title mb-3">
              <h1>Tặng bạn Hặn iu dấu!!!</h1>
            </div>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <p>
                    Chúc cậu năm mới vui vẻ, thêm tươi trẻ, luôn mới mẻ và càng mạnh khỏe. Tiền vào như nước, rút ra từ
                    từ. Sức khỏe dồi dào, học tập không bị hành bởi đống Deadline nhó. Và tớ hy vọng sẽ được thấy cậu
                    kết thúc năm cũ bằng một tấm hình xuất sắc được cậu đăng lên Facebook còn không gửi riêng cho tớ
                    cũng được hehee!
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <p>
                    Vậy là kết thúc một năm nữa rồi! Chúng ta biết nhau cũng được hơn 8 năm nhở. Khoảng thời gian trôi
                    nhanh thật đấy, tớ nhớ trước đây có nhiều lần cãi nhau, block nhau các kiểu thế mà vẫn còn chơi với
                    nhau đến bây giờ, quá là tuyệt vời luôn. Cậu biết gì không, Tớ rất thích được nghe cậu hát nha, đã
                    xinh còn hát hay mà biết chơi đàn nữa.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <p>
                    Một năm vừa qua Hặn đã làm được những gì rồi. Còn Phú thì cũng đã hoàn thành một vài dự án về UI
                    (tức là thiết kế giao diện website), cũng đã ra lại Hà Nội chơi nè. Nhưng lần đó điều tớ tiếc nhất
                    là vẫn chưa được gặp cậu, dù cho chúng ta đã rất gần nhau rồi. Không sao cả, những gì mình chưa làm
                    được năm vừa rồi thì sẽ cố gắng để năm sau thực hiện nếu không gặp vấn đề gì cản trở. Mặc dù hiện
                    giờ tớ vẫn chưa được oke lắm, nhưng tớ mong ngày mà được gặp cậu thì tớ cũng là gì đó ^^
                  </p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="fixedContent my-3">
              <h3>Người gửi: Dương Xuân Phú</h3>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
