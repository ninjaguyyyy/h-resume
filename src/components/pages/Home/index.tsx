import './index.scss';

import Avatar from 'assets/images/avatar.png';
import QR from 'assets/images/qr.webp';
import UniversityLogo from 'assets/images/duy-tan.png';

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__side">
        <div className="home__side__wrapper relative">
          <div className="home__side__wrapper__circle"></div>
          <div className="home__side__wrapper__avatar">
            <img src={Avatar} alt="avatar" />
          </div>
          <div className="pt-[250px] px-4 text-black">
            <div className="text-center font-bold text-3xl">NHU HOA</div>
            <div className="text-center text-sm">SOFTWARE DEVELOPER</div>
            <div className="text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, soluta optio. Earum
              consectetur soluta delectus nesciunt adipisci facilm voluptates.
            </div>
            <div className="text-center mt-4 text-lg">MỤC TIÊU</div>
            <div className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni cumque et nostrum?
              Ipsa eius beatae repudiandae cupiditate deleniti arorum ad.
            </div>
          </div>
        </div>

        <div className="home__side__wrapper home__side__wrapper--full py-4">
          <div className="px-4 text-black">
            <div className="text-center text-xl">SỞ THÍCH</div>
            <div className="mt-2">
              <div className="flex items-center gap-4">
                <div className="rectangle"></div>
                <p>Nấu ăn</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="rectangle"></div>
                <p>Du lịch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__main-content">
        <div className="home__main-content__contact flex justify-between px-8 pt-10 items-center">
          <div className="">
            <p className="text-color-red text-lg">Thông tin liên lạc</p>
            <div className="text-xs mt-1">
              <p>Số điện thoại: (+84) 376 760 733</p>
              <p>Email: nguyenhuuchi3006@gmail.com</p>
              <p>Địa chỉ: 20 An Thượng 5, Đà Nẵng</p>
            </div>
          </div>
          <div>
            <img src={QR} alt="qr" width={100} height={100} />
          </div>
        </div>

        <div className="flex items-end px-8">
          <div className="line"></div>
          <p className="px-4 translate-y-1.5">KỸ NĂNG CỨNG</p>
          <div className="line"></div>
        </div>

        <div className="px-8">
          <div className="flex items-end">
            <div className="line"></div>
            <p className="px-4 translate-y-1.5">KỸ NĂNG MỀM</p>
            <div className="line"></div>
          </div>

          <div className="py-6">
            <div className="flex items-center gap-4">
              <div className="rectangle"></div>
              <p>Kỹ năng làm việc nhóm</p>
            </div>
          </div>
        </div>

        <div className="px-8">
          <div className="flex items-end">
            <div className="line"></div>
            <p className="px-4 translate-y-1.5">HỌC VẤN</p>
            <div className="line"></div>
          </div>

          <div className="py-6">
            <div className="flex items-center gap-12">
              <div>
                <img src={UniversityLogo} alt="duy-tan" width={110} />
              </div>
              <div>
                <p>Kỹ sư phần mềm</p>
                <p>Đại học Duy Tân</p>
                <p>GPA: 10/10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8">
          <div className="flex items-end">
            <div className="line"></div>
            <p className="px-4 translate-y-1.5">KINH NGHIỆM</p>
            <div className="line"></div>
          </div>

          <div className="py-6">
            <div className="flex gap-12">
              <div>
                <p className="text-sm">10/2021 - 05/2022</p>
              </div>
              <div>
                <p>GRAPHIC DESIGNER</p>
                <p>Làm gì làm gì đó</p>
                <p>Đạt được thành tưu gì gì đó</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
