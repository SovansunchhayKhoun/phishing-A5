import za from "./assets/icons/zachan.jpg";
import NavBar from "./components/NavBar";
import { useAuthContext } from "./context/AuthContext";
import Login from "./views/Login";
import logi from "./assets/icons/footerlogo.svg";
import { Toast } from "./components/Toast";
import { useEffect } from "react";

function App() {
  const { logoutSuccess, loginSuccess, setLoginModalOpen, loginModalOpen } = useAuthContext();
  return (
    <div>
      {loginSuccess && <Toast text={"You have been hacked :) Have a nice dayy"}/>}
      {logoutSuccess && <Toast text={"Log out successful!"}/>}
      <NavBar />
      {/* self intro div*/}
      <div className="flex items-center justify-center p-[40px] px-[30px] pt-[90px] ">
        <div className="pl-[60px]">
          <img
            className="rounded-[50px] shadow-[20px_20px_0px_10px_#104962] w-[70%]"
            src={za}
          />
        </div>

        <div
          className=" flex flex-col gap-2 pt-[5px] pl-[30px] w-[60%]"
          style={{ fontFamily: "IBM Plex Sans" }}
        >
          <h1 className="font-semibold text-[55px]">
            Chan Liza ~ Graphic Designer
          </h1>
          <h2 className="font-semibold text-[45px] "></h2>
          <p1 className="text-[20px]">
            Creative and detail-oriented graphic designer with 3 years of
            experience in designing logos, brochures, and websites. Proficient
            in Adobe Creative Suite, Sketch, and Figma. Passionate about
            creating visually appealing designs that communicate the client’s
            message effectively
          </p1>
          <p2 className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            praesentium non reiciendis impedit molestias soluta repellendus
            iste. Cum, non expedita. Cupiditate aperiam laudantium neque
            voluptate corporis? Voluptatibus id unde nisi.
          </p2>
        </div>
      </div>

      {/* this is the second dev with experience details section*/}
      <div className="flex flex-col">
        <h1 className="text-[40px]  p-[30px] ml-[40px] font-bold">
          Experience
        </h1>
        <div className="flex item-center justify-between px-[100px] py-[80px] bg-[#013567] text-white">
          <ExperienceCard
            workYear={"2018-2019"}
            desc={
              "Work with Khmer Tech in designing software applications and web-base platform"
            }
          />
          <ExperienceCard
            workYear={"2020-2021"}
            desc={
              "Head Manager of Design Team at Siem Reap Tech Company, work as design coordinator and project manager"
            }
          />
          <ExperienceCard
            workYear={"2021-2023"}
            desc={"become senior design manager at Battambong Techko"}
          />
        </div>
      </div>

      {/*contact and education div*/}
      <div className="flex flex-col justify-between">
        <div className="flex justify-between text-[40px]  p-[30px] ml-[40px] font-bold">
          <h1>Contact Details</h1>
          <h2>Education Background</h2>
        </div>

        <div className="flex justify-between text-white">
          <div className="flex flex-col px-[100px] bg-[#2D57EB] pt-[10px] rounded-r-[40px] pb-[35px] shadow-[10px_13px_0px_10px_#262A88]">
            {/*how do i target all the header at once?*/}
            <div className="flex flex-col text-[20px] pb-[13px] pt-[40px]">
              <h1 className="text-[25px] font-semibold">Phone</h1>
              <p1>+855 39 384 143 </p1>
              <p1>+855 39 384 143 </p1>
            </div>
            <div className="flex flex-col text-[20px] pb-[13px]">
              <h2 className="text-[25px] font-semibold">Emails</h2>
              <p2 className>kakzachan@gmail.com</p2>
            </div>
            <div className="flex flex-col text-[20px] pb-[13px]">
              <h3 className="text-[25px] font-semibold">Address</h3>
              <p3 className="w-[250px]">
                Str. 143 Borey Vimean Phnom Penh Chomka doung district phnom
                penh
              </p3>
            </div>
          </div>

          <div className="flex flex-col pr-[120px] pl-[90px] rounded-l-[40px] py-[50px] text-[20px] text-white bg-[#262A88]">
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2009-2021</h1>
              <p1>
                Studied and graduate from SontherMok National School with a
                Diploma grade B+
              </p1>
            </div>
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2019-2020</h1>
              <p1>
                Graduated with certificate in English Pacific Asia school with
                English bachelor
              </p1>
            </div>
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2009-2021</h1>
              <p1>Studied and Graduated with Bachelor of Computer Science</p1>
            </div>
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2009-2021</h1>
              <p1>
                Gradute from France Design school bachelor of graphic design
              </p1>
            </div>
          </div>
        </div>
      </div>
      {/* Skills / past projects and language div */}
      <div className="flex flex-col justify-between">
        <div className="flex justify-between text-[40px]  p-[30px] ml-[40px] font-bold">
          <h1>Skills</h1>
          <h2>Projects</h2>
        </div>
        <div className="flex item-center justify-between">
          {/* skills and language div */}
          <div className="flex flex-col">
            <div className="flex flex-col text-[23px] font-semibold pl-[100px] pr-[40px] leading-[45px] py-[50px] bg-[#6A44A9] rounded-r-[40px] text-white shadow-[10px_13px_0px_10px_#104962]">
              <p1>Graphic Design Certified 2021</p1>
              <p2>Design Researcher Certified</p2>
              <p3>Hacker CFO</p3>
              <p4>Digital Marketing</p4>
            </div>
            <div className="flex justify-between text-[40px]  p-[30px] ml-[40px] font-bold">
              <h1>Language</h1>
            </div>
            <div className="flex flex-col text-[23px] font-semibold text-white px-[100px] leading-[50px] py-[50px] bg-[#81A0C5] rounded-r-[40px] shadow-[10px_13px_0px_10px_#013567]">
              <p1>Khmer</p1>
              <p2>English</p2>
              <p3>French</p3>
              <p4>Chinese</p4>
            </div>
          </div>
          {/* project div */}
          <div className="flex-col w-[60%]">
            <div className="flex items-center justify-between text-[35px]">
              <div className="pr-[60px] pl-[25px] pt-[25px] pb-[190px] bg-[#2DB2EB] text-white rounded-tl-[40px]">
                <h1>CADT CANTEEN WEB DESIGN</h1>
                <ViewMoreBtn setLoginModalOpen={setLoginModalOpen} />
              </div>
              <div className="pl-[25px] pt-[25px] pb-[190px] bg-[#2DB2EB] text-white">
                <h1>CAMTECH WEB MINI GAME DESIGN</h1>
                <ViewMoreBtn setLoginModalOpen={setLoginModalOpen} />
              </div>
            </div>
            <div className="flex items-center justify-between text-[35px]">
              <div className="pr-[60px] pl-[25px] pt-[25px] pb-[190px] bg-[#013567] rounded-bl-[40px] text-white">
                <h1>CADT CANTEEN WEB DESIGN</h1>
                <ViewMoreBtn setLoginModalOpen={setLoginModalOpen} />
              </div>
              <div className="pl-[25px] pt-[25px] pb-[190px] bg-[#013567] text-white">
                <h1>CAMTECH WEB MINI GAME DESIGN</h1>
                <ViewMoreBtn setLoginModalOpen={setLoginModalOpen} />
              </div>
            </div>
            {/* <Login modalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen}/> */}
          </div>
        </div>
      </div>

      <div className="flex bg-[#20007B] mt-[40px] justify-between">
        <div className="flex flex-col text-[35px] text-white font-semibold pl-[60px]">
          <div className="pt-[30px] pb-[25px] text-[#FFD600]">
            <h1>My CV Resume</h1>
          </div>

          <div className="text-[20px] pb-[40px]">
            <p>Start Creating Your CV now!</p>
            <p>Create Accounts</p>
            <p>Login</p>
            <p>Follow us!</p>
          </div>
        </div>
        <div className=" text-white font-semibold pl-[60px] text-[20px] pb-[40px] pt-[100px]">
          <p>Lok Kru trov Phish</p>
          <p>Learn to create phishing cv</p>
          <p>Login</p>
          <p>Follow us!</p>
        </div>
        <div className="p-[50px]">
          <img className="w-[175px]" src={logi} />
        </div>
      </div>
    </div>
  );
}

const ViewMoreBtn = ({ setLoginModalOpen }) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        setLoginModalOpen(true);
      }}
      className={"hover:underline hover:underline-offset-2 text-[20px]"}
    >
      View More
    </button>
  );
};
const ExperienceCard = ({ workYear, desc }) => {
  return (
    <div>
      <h1 className="text-[30px]">{workYear}</h1>
      <p className="w-[350px] text-[20px]">{desc}</p>
    </div>
  );
};

export default App;
