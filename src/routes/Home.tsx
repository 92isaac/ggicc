import { Link } from "react-router-dom";
import MarqSlider from "../components/MarqSlider";

export const Home = () => {
  return (
    <>
      <div className="md:flex justify-center gap-20 mt-10 mx-auto w-1/2 md:w-1/3 items-center">
        <button className="uppercase px-6 py-2 block w-full font-extrabold hover:bg-white text-[#72A407]">
          Our Partners
        </button>
      </div>
      <MarqSlider />

      <div className="my-10">
        <h1 className="px-5 md:px-10 md:font-extrabold text-3xl">About Us</h1>
        <div className=" lg:flex justify-center items-center w-full">
          <div className="lg:w-1/2 h-full">
            <p className="md:text-lg md:leading-10 md:px-10 px-5 text-justify first-letter:text-2xl">
              We are Regulated Canadian Immigration Consultant (RCIC). We have
              the in-depth knowledge of Canadian Immigration, Refugees, and
              Citizenship Law. As licensed practitioners, we apply the knowledge
              gained in Immigration law, the way it was interpreted and
              explained, and apply such in your individual unique cases. Coming
              to Canada is a project. No one wakes up today and get Visa same
              day without making prior arrangements. Time to make your
              immigration more green.
            </p>
            <button className="bottom-0 uppercase px-6 py-2 block w-full text-white bg-[#72A407] hover:bg-white hover:text-[#72A407]">
              <Link to='https://college-ic.ca/protecting-the-public/find-an-immigration-consultant?l=en-CA'>
              Find if we are authorised to represent you
              </Link>
            </button>
          </div>
          <div className="lg:w-1/2">
            <button className="px-6 py-2 block w-full text-white bg-[#72A407] hover:bg-white hover:text-[#72A407]">
              <Link
                to={
                  "https://www.cbc.ca/listen/live-radio/1-205-saskatchewan-weekend/clip/15990931-from-archives-june-13-2021"
                }
              >
                Interview with Canadian Broadcasting Corporation
              </Link>
            </button>
            <div>
              <img src="/WhatsApp Image 2023-07-29 at 11_09_40.webp" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h1 className="px-5 flex justify-center mx-auto md:px-10 md:font-extrabold text-3xl">Full Story</h1>
        <div className=" lg:flex justify-center gap-20 items-center w-full">
          <div className="lg:w-1/2">
            <img
              src="/c76a0d_843600964d6c429eaf85c694622ba3f1~mv2.png"
              alt=""
              className="w-full object-cover"
            />
            <button className="bottom-0 uppercase px-6 py-2 block w-full md:w-1/2 text-white bg-[#72A407] hover:bg-white hover:text-[#72A407]">
              Lead Consultant
            </button>
            <h1 className="font-bold text-lg">
              Ify Tony-Osondu <span className="text-sm">(Pronoun: She/Her)</span>
            </h1>
            <h3>
              HND, BSW, RSW, GDipICL, MBA,{" "}
              <strong className="text-[#DB00A1]">RCIC-IRB</strong>
            </h3>
          </div>
          <div className="lg:w-1/2 h-full">
            <p className="md:text-lg md:leading-8 md:px-4 px-1 text-justify md:first-letter:text-2xl first-letter:text-xl first-letter:ml-5">
              Having had a Master in Business Administration from the Delta
              State University, she later studied for four years bachelor’s
              degree at the prestigious University of Regina, where she
              graduated with an Academic Silver Prize Award. She later embarked
              on further studies at Queens University, Ontario, for a program in
              Immigration and Citizenship Law. She was Graded A in Refugees
              Protection, Economic Immigration, Temporary Entry, Enforcement,
              Foundational Knowledge, Family Class, Practice Management and
              Ethics, and professional responsibility. For the partial
              fulfillment of the award in Bachelor of Social Work (BSW) degree,
              she committed an unpaid 270 hours with the Canadian Mental Health
              Association (CMHA), where she wrote a paper titled “Tracing the
              Issues Affecting Mental Health of Canada’s Newcomers.” She later
              proceeded to the University of Regina International Services for
              her primary practicum and committed 450 unpaid hours. During her
              significant field practice, she assisted in creating and
              presenting various Mental Health Awareness and Sharing Circles
              series. She connected with international students and supported
              them with various programs and support that matched their
              Individual Unique needs using competency models and theories.
              Having worked with the international students’ services and
              written a paper on issues affecting newcomers, she formulated and
              championed various events for newcomers after the lockdown.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
