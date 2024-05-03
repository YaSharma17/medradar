import React from 'react';
import cn from 'classnames';


import section1Styles from './section1.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <h5 className={section1Styles.highlight}>{`Home>Hospitals`}</h5>
      <div className={section1Styles.box}>

        <h1 className={section1Styles.title_box}>
          <span className={section1Styles.title}>
            <span className={section1Styles.title_span0}>MΞD </span>
            <span className={section1Styles.title_span1}> RΔDΔЯ</span>
          </span>
        </h1>


        <h5 className={section1Styles.highlight12}>About Us</h5>
        <h5 className={section1Styles.highlight13}>Location</h5>
        <div className={section1Styles.rect1} />
        <button className={section1Styles.highlight14}>Login</button>
      </div>
      <img className={section1Styles.image3} src={'/assets/coverphoto.png'} alt="alt text" />
      <div className={section1Styles.rect2} />
      <h5
        className={
          section1Styles.highlight2
        }>{`Locate our nearest hospital to get your healthcare needs addressed. We're always there to take care of you!`}</h5>
      <h2 className={section1Styles.medium_title}>
        Near You: 7 Hospitals found
        <br />
      </h2>
      <h1 className={section1Styles.hero_title}>Delivering Care Nationwide</h1>
      <p className={section1Styles.desc}>
        Nationwide Care Services is dedicated to providing consistently safe, high quality, reliable care and support to
        people whether they are living in their own homes using our localised Domiciliary Care branches.
        <br />
        Our offices in the South and the Midlands provide a wide range of care and support services, tailored to each
        individual's requirements.
      </p>
      <div className={section1Styles.rect3} />
      <a rel="noreferrer" target="_blank" className={section1Styles.highlight3}
        href="mailto:yash.sharma2021@vitbhopal.ac.in">info@hospital.org</a>


      <img className={section1Styles.image4} src={'/assets/hospital1.png'} alt="alt text" />
      <h2 className={section1Styles.medium_title1}>Noida Multispeciality Hospital, sec-71, Greater Noida, UP-201222 </h2>
      <h5 className={section1Styles.highlight4}>Multi-Speciality ,  101 Beds  , 199 Doctors</h5>
      <h5 className={section1Styles.highlight5_box}>
        <span className={section1Styles.highlight5}>
          <span className={section1Styles.highlight5_span0}>
            +91 9934599345
            <br />
            <br />
          </span>

        </span>
      </h5>
      <h5 className={section1Styles.highlight6}>
        {`Consultation: Out-patient & In-patient`}
        <br />
        24/7Emergency Services
        <br />
        Pharmacy
        <br />
        Laboratory
        <br />
        Radiology
        <br />
        Ambulance
      </h5>
      <div className={section1Styles.rect4} />

      <button className={section1Styles.medium_title2}>VIEW</button>

      <img className={section1Styles.image6} src={'/assets/mail.png'} alt="alt text" />
      <div className={section1Styles.rect31} />

      <a rel="noreferrer" target="_blank" className={section1Styles.highlight31}
        href="mailto:yash.sharma2021@vitbhopal.ac.in">info@hospital.org</a>

      <h2 className={section1Styles.medium_title11}>Noida Multispeciality Hospital, sec-71, Greater Noida, UP-201222 </h2>
      <h5 className={section1Styles.highlight41}>Multi-Speciality ,   101 Beds   , 199 Doctors</h5>
      <h5 className={section1Styles.highlight5_box1}>

        <span className={section1Styles.highlight5_span0}>
          +91 9999199991
          <br />
          <br />
        </span>


      </h5>
      <h5 className={section1Styles.highlight61}>
        {`Consultation: Out-patient & In-patient`}
        <br />
        {`24/7 Emergency & Trauma Services`}
        <br />

        Blood Bank
        <br />
        Lab Services: Biochemistry, Microbiology, Haematology, Clinical Pathology, Serology, Tissue Repository, (Frozen Section)
        <br />
        Chemotherapy
      </h5>
      <div className={section1Styles.rect41} />

      <button className={section1Styles.medium_title21}>VIEW</button>


      <img className={section1Styles.image61} src={'/assets/mail.png'} alt="alt text" />
      <div className={section1Styles.rect32} />

      <a rel="noreferrer" target="_blank" className={section1Styles.highlight32}
        href="mailto:yash.sharma2021@vitbhopal.ac.in">info@hospital.org</a>
      <h2 className={section1Styles.medium_title12}> Kailash Hospital, sector-71, Noida, UP-201222 </h2>
      <h5 className={section1Styles.highlight42}>Multi-Speciality ,     101 Beds ,    199 Doctors</h5>
      <h5 className={section1Styles.highlight5_box2}>

        <span className={section1Styles.highlight5_span0}>
          +91 80001 80111
          <br />
          <br />
        </span>


      </h5>
      <h5 className={section1Styles.highlight62}>

        Pathology Lab
        <br />
        X-Ray
        <br />
        ECG
        <br />
        Echo
        <br />
        TMT
        <br />
        Ultrasound Scan
      </h5>
      <div className={section1Styles.rect42} />

      <button className={section1Styles.medium_title22}>VIEW</button>

      <img className={section1Styles.image62} src={'/assets/mail.png'} alt="alt text" />
      <img className={section1Styles.image7} src={'/assets/hospital3.png'} alt="alt text" />

      <select className={section1Styles.image8}>
        <option value="select Hospitals">select Hospitals</option>
        <option value="Noida Multispeciality Hospital">Noida Multispeciality Hospital</option>
        <option value="Kailash Hospital">Kailash Hospital</option>
        <option value="Emergency">Emergency</option>
        <option value="Hospitals">Hospitals</option>
      </select>

      <select className={section1Styles.image82}>
        <option value="select Treatments">select Treatments</option>
        <option value="Blood services">Blood services</option>
        <option value="X-ray">X-ray</option>
        <option value="Emergency">Emergency</option>
        <option value="Chemotherapy">Chemotherapy</option>

      </select>


      <div className={section1Styles.text11}>Hospitals/Clinics</div>

      <div className={section1Styles.text13}>Treatments</div>

      <h5 className={section1Styles.highlight51}>List Of Hospitals</h5>
      <img className={section1Styles.image9} src={'/assets/hospital2.png'} alt="alt text" />
      <div className={section1Styles.rect6} />
      <h3 className={section1Styles.subtitle11}>Your valuable Feedback!</h3>
      <h1 className={section1Styles.title_box1}>
        <span className={section1Styles.title}>
          <span className={section1Styles.title_span0}>MΞD</span>
          <span className={section1Styles.title_span2}>RΔDΔЯ</span>
        </span>
      </h1>
      <h3 className={section1Styles.subtitle12}>Connect With Us</h3>
      <img className={section1Styles.image10} src={'/assets/mail.png'} alt="alt text" />

      <a rel="noreferrer" target="_blank" className={section1Styles.highlight33}
        href="mailto:yash.sharma2021@vitbhopal.ac.in">info@query.medradar.org</a>

      <div className={section1Styles.rect7} />

      <a rel="noreferrer" target="_blank" className={section1Styles.subtitle21}
        href="mailto:yash.sharma2021@vitbhopal.ac.in">Enter your email ID</a>
      <img className={section1Styles.image11} src={'/assets/direction.png'} alt="alt text" />
      <h2 className={section1Styles.medium_title3_box}>
        <span className={section1Styles.medium_title3}>
          <span className={section1Styles.medium_title3_span0}>
            Patient Guide
            <br />
          </span>
          <span className={section1Styles.medium_title3_span1}>
            <br />
          </span>
          <span className={section1Styles.medium_title3_span2}>
            Find Doctors
            <br />
            Our Networks
            <br />
            Video Consultation
            <br />
            Make an Enquiry
            <br />
            Feedback
            <br />
            Health Check Package
          </span>
        </span>
      </h2>
      <h3 className={section1Styles.subtitle3}>Terms & Conditions    Privacy Policy </h3>


    </section>
  );
}

export default renderSection1;
