/* eslint-disable prettier/prettier */
import './index.scss';

import Avatar from 'assets/images/avatar.png';
import QR from 'assets/images/qr.png';
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
            <div className="text-center font-bold text-3xl">NHƯ HÒA</div>
            <div className="text-center font-semibold">KIỂM DUYỆT VIÊN NỘI DUNG</div>
            <div className="text-xs mt-2">
              Với thế mạnh làm việc trong môi trường F&B và 3 năm kinh nghiệm làm việc tại nhà hàng
              fine dinning. Bên cạnh đó, 6 tháng gần đây em có thử sức mình ở môi trường khác là bất
              động sản với vị trí nhân viên kinh doanh (sale ).
            </div>
            <div className="text-center mt-4 text-lg">MỤC TIÊU</div>
            <div className="text-xs pb-4">
              Mong muốn của em là đóng góp những thế mạnh của bản thân cho sự phát triển của Quý
              công ty, được học hỏi trau dồi và phát huy hết khả năng của bản thân vào công việc để
              tích lũy và đảm nhiệm những vị trí cao hơn trong tổ chức.
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

              <div className="flex items-center gap-4 my-2">
                <div className="rectangle"></div>
                <p>Du lịch</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rectangle"></div>
              <p>Chụp ảnh</p>
            </div>

            <div className="text-center text-xl mt-4">HOẠT ĐỘNG & CHỨNG CHỈ</div>
            <div className="mt-2">
              <div className="flex items-center gap-4">
                <div className="rectangle"></div>
                <p>TOEIC 450</p>
              </div>

              <div className="flex items-start gap-4 my-2">
                <div className="rectangle"></div>
                <p>Tin học văn phòng cơ bản</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rectangle min-w-[20px]"></div>
                <p>Thiện nguyện "Áo ấm cho em" Nam Trà My</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__main-content">
        <div className="home__main-content__contact flex justify-between px-8 pt-10 items-center">
          <div className="">
            <p className="text-color-red text-xl font-semibold">THÔNG TIN LIÊN LẠC</p>
            <div className="mt-1">
              <p>Số điện thoại: 0969 331 438</p>
              <p>Email: nhuhoa240299@gmail.com</p>
              <p>Địa chỉ: 20 An Thượng 5, TP. Đà Nẵng</p>
            </div>
          </div>
          <div>
            <img src={QR} alt="qr" width={60} height={60} />
          </div>
        </div>

        <div className="px-8">
          <div className="flex items-end">
            <div className="line"></div>
            <p className="px-4 translate-y-1.5 text-xl">KỸ NĂNG CỨNG</p>
            <div className="line"></div>
          </div>

          <div className="py-6 flex gap-36">
            <div>
              <div className="flex items-start gap-4">
                <div className="rectangle"></div>
                <p>Lễ tân Nhà hàng</p>
              </div>

              <div className="flex items-start gap-4 mt-2">
                <div className="rectangle min-w-[20px]"></div>
                <p>Take care, thu ngân và pha chế</p>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="rectangle min-w-[20px]"></div>
                <p>Tư vấn và chạy quảng cáo Facebook, Zalo</p>
              </div>

              <div className="flex items-start gap-4 mt-2">
                <div className="rectangle min-w-[20px]"></div>
                <p>Tin học văn phòng (Word, Excel)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8">
          <div className="flex items-end">
            <div className="line"></div>
            <p className="px-4 translate-y-1.5 text-xl">KỸ NĂNG MỀM</p>
            <div className="line"></div>
          </div>

          <div className="py-6 flex gap-32">
            <div>
              <div className="flex items-start gap-4">
                <div className="rectangle"></div>
                <p>Kỹ năng làm việc nhóm</p>
              </div>

              <div className="flex items-start gap-4 my-2">
                <div className="rectangle"></div>
                <p>Chỉnh sửa video đơn giản</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rectangle min-w-[20px]"></div>
                <p>Lập kế hoạch và quản lý thời gian</p>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="rectangle"></div>
                <p>Kỹ năng thuyết trình</p>
              </div>

              <div className="flex items-start gap-4 mt-2">
                <div className="rectangle min-w-[20px]"></div>
                <p>Phản ứng và xử lý tình huống linh hoạt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8">
          <div className="flex items-end">
            <div className="line"></div>
            <p className="px-4 translate-y-1.5 text-xl">HỌC VẤN</p>
            <div className="line"></div>
          </div>

          <div className="py-6">
            <div className="flex items-center gap-12">
              <div>
                <img src={UniversityLogo} alt="duy-tan" width={110} />
              </div>
              <div>
                <p>Quản trị Du lịch và Khách sạn</p>
                <p>Đại học Duy Tân</p>
                <p>Xếp loại: Khá</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8">
          <div className="flex items-end">
            <div className="line"></div>
            <p className="px-4 translate-y-1.5 text-xl">KINH NGHIỆM</p>
            <div className="line"></div>
          </div>

          <div className="py-6">
            <div className="flex gap-12">
              <div>
                <p className="text-sm min-w-[120px]">08/2022 - 02/2023</p>
              </div>
              <div>
                <p className="font-bold">Công ty cổ phần tập đoàn địa ốc SCD GROUP</p>
                <p className="italic mt-2">
                  Vị trí công việc: <span className="not-italic pl-2">Nhân viên kinh doanh.</span>
                </p>
                <p className="italic">Mô tả công việc:</p>
                <ul className="list-disc pl-6">
                  <li>
                    Tìm kiếm khách hàng, tư vấn và hỗ trợ thông tin về các dự án đang triển khai.
                  </li>
                  <li>Chăm sóc khách hàng.</li>
                  <li>Cập nhập thông tin thị trường.</li>
                  <li>Lập chiến dịch chạy quảng cáo trên Facebook, Zalo.</li>
                </ul>
                <p className="italic mt-2">Kỹ năng & Thành tựu đạt được:</p>
                <ul className="list-disc pl-6">
                  <li>Rèn luyện kỹ năng thuyết trình và tư vấn khách hàng.</li>
                  <li>Lập chiến dịch chạy quảng cáo trên Facebook.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className="flex gap-12">
              <div>
                <p className="text-sm min-w-[120px]">10/2019 - 07/2022</p>
              </div>
              <div>
                <p className="font-bold">Nhà hàng Pizza 4P's Đà Nẵng</p>
                <p className="italic">
                  Vị trí công việc: <span className="not-italic pl-2">Senior service.</span>
                </p>
                <p className="italic mt-2">Mô tả công việc:</p>
                <ul className="list-disc pl-6">
                  <li>Waitress của bộ phận service.</li>
                  <li>
                    Set up, take care khách hàng, tiếp nhận và xử lí các thông tin, yêu cầu từ khách
                    hàng.
                  </li>
                  <li>Đảm nhận một số vị trí khác như lễ tân, thu ngân, pha chế.</li>
                  <li>Đào tạo nhân viên mới.</li>
                  <li>
                    QA của bộ phận service: quản lí chất lượng kiểm tra label thực phẩm. Ghi chép
                    lại hàng hóa nhập vào hằng ngày.
                  </li>
                  <li>Thiết kế thiệp, trang trí nhà hàng mỗi dịp lễ.</li>
                </ul>
                <p className="italic mt-2">Kỹ năng & Thành tựu đạt được:</p>
                <ul className="list-disc pl-6">
                  <li>Đạt thành tích 2 lần nhân viên xuất sắc nhất tháng.</li>
                  <li>Phản ứng linh hoạt các tình huống phát sinh trong quá trình làm việc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
