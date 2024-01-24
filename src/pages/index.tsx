import { useSetTime } from '../hooks/useSetTime';

export default function Main() {
  useSetTime();

  return (
    <div className="relative flex justify-center items-center text-white w-full h-full">
      <div className="absolute flex justify-center items-center bg-[#2f363e] w-screen h-screen opacity-70 -z-30">
        <p className="flex flex-col h-screen justify-around sm:text-[100px] sm:gap-0 text-[50px] gap-60 font-bold text-slate-700 text-center"><span>2024</span> <span>COMING SOON...</span></p>
      </div>
      <div className="text-center space-y-10">
        <h1 className="font-Lobster text-5xl">Thời gian chỉ còn...</h1>
        <div className="time md:flex md:gap-20 grid grid-cols-2 gap-5">
          <div
            className="circle relative w-[150px] h-[150px] flex justify-center items-center"
            style={{ '--clr': '#fff' } as React.CSSProperties}
          >
            <div className="dots dayDot"></div>
            <svg className="relative w-[150px] h-[150px] rotate-[270deg]">
              <circle
                className="w-full h-full fill-transparent stroke-[#282828] translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
                strokeLinecap="round"
              ></circle>
              <circle
                id="dd"
                className="w-full h-full fill-transparent stroke-white translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
                strokeDasharray="440"
              ></circle>
            </svg>
            <div className="days absolute text-4xl">
              <p className="font-Caramel text-2xl">Ngày</p>
              <p className="font-Fredoka" id="days"></p>
            </div>
          </div>

          <div
            className="circle relative w-[150px] h-[150px] flex justify-center items-center"
            style={{ '--clr': '#ff2972' } as React.CSSProperties}
          >
            {/* fix style attribute */}
            <div className="dots hourDot"></div>
            <svg className="relative w-[150px] h-[150px] rotate-[270deg]">
              <circle
                className="w-full h-full fill-transparent stroke-[#282828] translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
              ></circle>
              <circle
                id="hh"
                className="w-full h-full fill-transparent stroke-white translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
                strokeDasharray="440"
              ></circle>
            </svg>
            <div className="days absolute text-4xl">
              <p className="font-Caramel text-2xl">Giờ</p>
              <p className="font-Fredoka" id="hours"></p>
            </div>
          </div>

          <div
            className="circle relative w-[150px] h-[150px] flex justify-center items-center"
            style={{ '--clr': '#fee800' } as React.CSSProperties}
          >
            {/* fix style attribute */}
            <div className="dots minuteDot"></div>
            <svg className="relative w-[150px] h-[150px] rotate-[270deg]">
              <circle
                className="w-full h-full fill-transparent stroke-[#282828] translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
              ></circle>
              <circle
                id="mm"
                className="w-full h-full fill-transparent stroke-white translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
                strokeDasharray="440"
              ></circle>
            </svg>
            <div className="days absolute text-4xl">
              <p className="font-Caramel text-2xl">Phút</p>
              <p className="font-Fredoka" id="minutes"></p>
            </div>
          </div>

          <div
            className="circle relative w-[150px] h-[150px] flex justify-center items-center"
            style={{ '--clr': '#04fc43' } as React.CSSProperties}
          >
            {/* fix style attribute */}
            <div className="dots secondDot"></div>
            <svg className="relative w-[150px] h-[150px] rotate-[270deg]">
              <circle
                className="w-full h-full fill-transparent stroke-[#282828] translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
              ></circle>
              <circle
                id="ss"
                className="w-full h-full fill-transparent stroke-white translate-x-[5px] translate-y-[5px]"
                cx={70}
                cy={70}
                r={70}
                strokeWidth={8}
                strokeDasharray="440"
              ></circle>
            </svg>
            <div className="days absolute text-4xl">
              <p className="font-Caramel text-2xl">Giây</p>
              <p className="font-Fredoka" id="seconds"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
