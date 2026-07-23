const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about-hei", (req, res) => {
  res.render("about-hei");
});

// Overview reuses the same content as /about-hei
app.get("/about/overview", (req, res) => {
  res.render("about-hei");
});

// about HEI
const aboutPages = {
  'society': {
    title: 'Society',
    content: `
      <p class="college-para">
        <strong>Sri Sivani Educational Society</strong> was established in the year 2006 by the highly motivated and philanthropic personalities well noted in the Srikakulam district for their commitment and concern for the upliftment of education. The Society recognizes the vital need to produce competent pharmacy, engineering and techno-managerial professionals for the development of country.
      </p>
      <p class="college-para">
        <strong>Sri Sivani Group of Colleges</strong> have already created a sensation in Srikakulam District by imparting quality based technological and pharmaceutical education. Here the environment is free of all limitations and tensions and we put our best to get the best from on constant efforts. The institution aims at achieving excellence in engineering education, not only at basic level but also at advanced levels.
      </p>

      <h3 class="officials-heading">Society Office Bearers</h3>
      <div class="officials-table">
        <div class="officials-row">
          <div class="officials-label">Chairman</div>
          <div class="officials-value">Sri V.M.M. Sainath Reddy</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Vice Chairman</div>
          <div class="officials-value">Sri J. Surya Chandra Rao</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Secretary</div>
          <div class="officials-value">Sri K. Durga Srinivasa Rao</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Joint Secretary</div>
          <div class="officials-value">Sri P. Durga Prasad Raju</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Treasurer</div>
          <div class="officials-value">Sri D. Venkat Rao</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Correspondent</div>
          <div class="officials-value">Dr. S. Srinivasa Rao</div>
        </div>
      </div>
    `
  },
  'act-statutes-moa': {
    title: 'Act & Statutes of MoA',
    content: '<p class="college-para">Add content here.</p>'
  },
  'strategic-plan': {
    title: 'Strategic/Institutional Development Plan',
    content: '<p class="college-para">Add content here.</p>'
  },
  'vision-mission': {
    title: 'Vision & Mission',
    content: `
      <h3 class="vision-heading">VISION</h3>
      <p class="college-para">
        To be an Institute committed to create highly dedicated, globally skilled Pharmacy Professionals.
      </p>

      <h3 class="vision-heading">MISSION</h3>
      <ol class="mission-list">
        <li class="mission-list-item">To make pharmacy education more accessible to all the rural communities.</li>
        <li class="mission-list-item">To promote healthcare partnerships and industry programs and fulfill the requirements of industries.</li>
        <li class="mission-list-item">To promote and disseminate pharmaceutical knowledge through quality teaching and research to improve the health of everyone.</li>
        <li class="mission-list-item">To execute our mission, we employ creative and established educational methods to produce pharmacists with the skills and knowledge to serve society ethically and professionally.</li>
      </ol>
    `
  },
  'chairman-message': {
    title: "Chairman's Message",
    content: '<p class="college-para">Add content here.</p>'
  },
'secretary-message': {
  title: "SECRETARY & JOINT SECRETARY MESSAGE",
  content: `
    <h2>Secretary’s Message</h2>

    <img 
      src="/assets/secretary.jpg" 
      alt="Secretary"
      class="message-person-image"
    >

    <p class="college-para">
      We are dedicated to fostering an educational ecosystem that encourages excellence, innovation, and ethical responsibility in pharmacy education. By blending strong academic foundations with practical exposure and value-based learning, we aim to prepare students to meet the evolving challenges of the healthcare profession with confidence and competence. I extend my best wishes to all students as they pursue knowledge, professional growth, and meaningful service to society.
    </p>

    <p class="message-signature">
      ----<strong><em>Sri K. Durga Srinivasa Rao</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Secretary</em></strong>
    </p>

    <h2>Joint Secretary’s Message</h2>

    <img 
      src="/assets/joint-secretary.jpg" 
      alt="Joint Secretary"
      class="message-person-image"
    >

    <p class="college-para">
      At <strong>Sri Sivani College of Pharmacy</strong>, we believe in empowering students with knowledge, values, and vision to become competent and compassionate pharmacy professionals. Through excellence in education, research, and ethical practice, we strive to nurture innovation, leadership, and lifelong learning, enabling our students to contribute meaningfully to healthcare and society. I wish all our students a purposeful and successful academic journey with us.
    </p>

    <p class="message-signature">
      ---<strong><em>Sri K Durga Prasad Raju</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Joint Secretary</em></strong>
    </p>
  `
},
  'accreditation-ranking': {
    title: 'Accreditation & Ranking Status',
    content: '<p class="college-para">Add content here.</p>'
  },
  'correspondent-message': {
    title: "Correspondent's Message",
    content: `
      <div class="message-content-row">

        <div class="message-image">
          <img 
            src="/assets/correspondent.jpg" 
            alt="Correspondent"
            class="message-person-image"
          >
        </div>

        <div class="message-text">
          <p class="college-para">
            We are guided by a clear vision to build a centre of excellence in pharmacy education through quality assurance, academic integrity, and continuous institutional improvement. By adhering to accreditation frameworks, regulatory standards, and outcome-based education practices, we strive to create a dynamic learning ecosystem aligned with national priorities and global benchmarks. Our mission is to empower students with professional competence, ethical values, leadership qualities, and a passion for innovation and research, enabling them to face future healthcare challenges with confidence. We firmly believe that education should inspire purpose, nurture responsibility, and transform potential into performance. I encourage our students to dream ambitiously, uphold discipline and quality, and embrace lifelong learning as they progress toward meaningful professional achievement and service to society.
          </p>
        </div>

      </div>
    `
  },
  'treasurer-message': {
    title: "Treasurer's Message",
    content: `
        <h3>Secretary’s Message</h3>

    <img 
      src="/assets/treasurer.jpg" 
      alt="Treasurer"
      class="message-person-image"
    >

    <p class="college-para">
      We are dedicated to fostering an educational ecosystem that encourages excellence, innovation, and ethical responsibility in pharmacy education. By blending strong academic foundations with practical exposure and value-based learning, we aim to prepare students to meet the evolving challenges of the healthcare profession with confidence and competence. I extend my best wishes to all students as they pursue knowledge, professional growth, and meaningful service to society.
    </p>

    <p class="message-signature">
      ----<strong><em>Sri D. Venkata Rao</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Treasurer</em></strong>
    </p>`
    
  },
  'principal-message': {
    title: "Principal's Message",
    content: `
        <h2>Principal’s Message</h2>

    <img 
      src="/assets/principal.jpg" 
      alt="principal"
      class="message-person-image"
    >

    <p class="college-para">
      Sri Sivani College of Pharmacy proudly contributes to the health care system by providing fully pledged and ready pharma graduates in this remote area of Andhra Pradesh. The college is well established with laboratories, equipment and class rooms. Our faculty is experienced, qualified, and competent to make and mould students with strong pharmacy basics to the expectations of the Pharma industry today. In the coming days, our college will become the hub for Pharma-outsourced research activities by students and staff in this area. The overall growth of students in terms of productivity, character, and knowledge will be the motto of our college under the dynamic leadership of all the generous, talented academicians of the Sri Sivani Educational Society.    </p>

    <p class="message-signature">
      ----<strong><em>Dr K Rajkiran</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Professor & Principal</em></strong>
    </p>`
  },
  'annual-reports': {
    title: 'Annual Reports',
    content: '<p class="college-para">Add content here.</p>'
  },
  'financial-reports': {
    title: 'Financial Reports',
    content: '<p class="college-para">Add content here.</p>'
  }
};

// academic pages
const academicsPages = {
  'principal-message': {
    title: 'Principal Message',
    content: `
      <div class="message-content-row">
        <div class="message-image">
          <img src="/assets/principal_photo.jpg" alt="Principal of Sri Sivani College of Pharmacy" class="message-person-image">
        </div>
        <div class="message-text">
          <p class="college-para">
            Sri Sivani College of Pharmacy proudly contributes to the health care system by providing fully pledged and ready pharma graduates in this remote area of Andhra Pradesh. The college is well established with laboratories and equipment. Our faculty is experienced, qualified, and competent to make and mould students with strong pharmacy basics to the expectations of the Pharma industry today. In the coming days, our college will become the hub for Pharma-outsourced research activities by students and staff in this area. The overall growth of students in terms of productivity, character, and knowledge will be the motto of our college under the dynamic leadership of all the generous, talented academicians of the Sri Sivani group of colleges.
          </p>
        </div>
      </div>
    `
  },
  'faculty': {
    title: 'List of Full Time Teachers',
    content: `
      <div class="faculty-table-wrapper">
        <table class="faculty-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>NAME OF THE TEACHER</th>
              <th>DESIGNATION</th>
              <th>QUALIFICATION</th>
              <th>SPECIALIZATION</th>
              <th>TOTAL EXPERIENCE<br>(YEARS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="faculty-sno">1</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/1.jpg" alt="Dr.K.Rajkiran" class="faculty-photo">
                <div class="faculty-name">Dr.K.Rajkiran</div>
                <div class="faculty-pci">PCI ID: BH-P-23-27733</div>
              </td>
              <td class="faculty-highlight">Principal/Professor</td>
              <td>M.Pharmacy, Ph.D</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">19</td>
            </tr>
            <tr>
              <td class="faculty-sno">2</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/2.jpg" alt="Dr.K.Rajarajeswari" class="faculty-photo">
                <div class="faculty-name">Dr.K.Rajarajeswari</div>
                <div class="faculty-pci">PCI ID: BH-P-24-713261</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, Ph.D</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">16.3</td>
            </tr>
            <tr>
              <td class="faculty-sno">3</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/3.jpg" alt="U.Upendra Rao" class="faculty-photo">
                <div class="faculty-name">U.Upendra Rao</div>
                <div class="faculty-pci">PCI ID: BH-P-23-38870</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">15.5</td>
            </tr>
            <tr>
              <td class="faculty-sno">4</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/4.jpg" alt="K.Jagadish" class="faculty-photo">
                <div class="faculty-name">K.Jagadish</div>
                <div class="faculty-pci">PCI ID: BH-P-23-31771</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmacognosy and Phytochemistry</td>
              <td class="faculty-exp">15</td>
            </tr>
            <tr>
              <td class="faculty-sno">5</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/5.jpg" alt="B.Murali Krishna" class="faculty-photo">
                <div class="faculty-name">B.Murali Krishna</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47746</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">13.6</td>
            </tr>
            <tr>
              <td class="faculty-sno">6</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/6.jpg" alt="G. Manoj Kumar" class="faculty-photo">
                <div class="faculty-name">G. Manoj Kumar</div>
                <div class="faculty-pci">PCI ID: BH-P-23-48012</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">11.5</td>
            </tr>
            <tr>
              <td class="faculty-sno">7</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/7.jpg" alt="U.Sri Venkatesh" class="faculty-photo">
                <div class="faculty-name">U.Sri Venkatesh</div>
                <div class="faculty-pci">PCI ID: BH-P-23-17182</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">7</td>
            </tr>
            <tr>
              <td class="faculty-sno">8</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/8.jpg" alt="T. Rajesh" class="faculty-photo">
                <div class="faculty-name">T. Rajesh</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47851</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">6.9</td>
            </tr>
            <tr>
              <td class="faculty-sno">9</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/9.jpg" alt="B. Santosh Kumar" class="faculty-photo">
                <div class="faculty-name">B. Santosh Kumar</div>
                <div class="faculty-pci">PCI ID: BH-P-23-20829</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">6.3</td>
            </tr>
            <tr>
              <td class="faculty-sno">10</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/10.jpg" alt="R.Krishna Priya" class="faculty-photo">
                <div class="faculty-name">R.Krishna Priya</div>
                <div class="faculty-pci">PCI ID: BH-P-25-23442</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">6</td>
            </tr>
            <tr>
              <td class="faculty-sno">11</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/11.jpg" alt="Moturu Devananda Kishore" class="faculty-photo">
                <div class="faculty-name">Moturu Devananda Kishore</div>
                <div class="faculty-pci">PCI ID: BH-P-24-0686793106</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">12</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/12.jpg" alt="K. Manjulatha" class="faculty-photo">
                <div class="faculty-name">K. Manjulatha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">13</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/13.jpg" alt="P.Pavani" class="faculty-photo">
                <div class="faculty-name">P.Pavani</div>
                <div class="faculty-pci">PCI ID: BH-P-25-22984</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">14</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/14.jpg" alt="D.PRAVREN KUMAR" class="faculty-photo">
                <div class="faculty-name">D.PRAVREN KUMAR</div>
                <div class="faculty-pci">PCI ID: BH-P-25-69529</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">15</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/15.jpg" alt="D.V.Padmavathi" class="faculty-photo">
                <div class="faculty-name">D.V.Padmavathi</div>
                <div class="faculty-pci">PCI ID: BH-P-25-20933</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">16</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/16.jpg" alt="I. Jhansi Laxmi" class="faculty-photo">
                <div class="faculty-name">I. Jhansi Laxmi</div>
                <div class="faculty-pci">PCI ID: BH-P-25-43580</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">17</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/17.jpg" alt="K.V.S.L.Kavya" class="faculty-photo">
                <div class="faculty-name">K.V.S.L.Kavya</div>
                <div class="faculty-pci">PCI ID: BH-P-25-17885</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">18</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/18.jpg" alt="K.Padmaja" class="faculty-photo">
                <div class="faculty-name">K.Padmaja</div>
                <div class="faculty-pci">PCI ID: BH-P-25-21140</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">19</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/19.jpg" alt="Ch.Neelima" class="faculty-photo">
                <div class="faculty-name">Ch.Neelima</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">3.6</td>
            </tr>
            <tr>
              <td class="faculty-sno">20</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/20.jpg" alt="I.Uma" class="faculty-photo">
                <div class="faculty-name">I.Uma</div>
                <div class="faculty-pci">PCI ID: BH-P-25-21281</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">3</td>
            </tr>
            <tr>
              <td class="faculty-sno">21</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/21.jpg" alt="B.Jagadiswari" class="faculty-photo">
                <div class="faculty-name">B.Jagadiswari</div>
                <div class="faculty-pci">PCI ID: BH-P-25-115371</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Chemistry</td>
              <td class="faculty-exp">3</td>
            </tr>
            <tr>
              <td class="faculty-sno">22</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/22.jpg" alt="P.Satish" class="faculty-photo">
                <div class="faculty-name">P.Satish</div>
                <div class="faculty-pci">PCI ID: BH-P-23-43567</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Chemistry</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">23</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/23.jpg" alt="P.Anusha" class="faculty-photo">
                <div class="faculty-name">P.Anusha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-43567</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">24</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/24.jpg" alt="G. Eksitha" class="faculty-photo">
                <div class="faculty-name">G. Eksitha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-20666</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">25</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/25.jpg" alt="T.Anusha" class="faculty-photo">
                <div class="faculty-name">T.Anusha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-44089</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">26</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/26.jpg" alt="M. Satyavani" class="faculty-photo">
                <div class="faculty-name">M. Satyavani</div>
                <div class="faculty-pci">PCI ID: BH-P-24-0916593336</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmacoinformatics</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">27</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/27.jpg" alt="S. Likitha" class="faculty-photo">
                <div class="faculty-name">S. Likitha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-21049</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">28</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/28.jpg" alt="S.Bindu Madhavi" class="faculty-photo">
                <div class="faculty-name">S.Bindu Madhavi</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">29</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/29.jpg" alt="R.Rusali Reddy" class="faculty-photo">
                <div class="faculty-name">R.Rusali Reddy</div>
                <div class="faculty-pci">PCI ID: BH-P-24-0219839015</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">30</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/30.jpg" alt="P. Anu" class="faculty-photo">
                <div class="faculty-name">P. Anu</div>
                <div class="faculty-pci">PCI ID: BH-P-24-1631361133</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">31</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/31.jpg" alt="Ch. Jaithri" class="faculty-photo">
                <div class="faculty-name">Ch. Jaithri</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">0.8</td>
            </tr>
            <tr>
              <td class="faculty-sno">32</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/32.jpg" alt="D.Sarath Chandra" class="faculty-photo">
                <div class="faculty-name">D.Sarath Chandra</div>
                <div class="faculty-pci">PCI ID: BH-P-123996</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Biotechnology</td>
              <td class="faculty-exp">0.6</td>
            </tr>
            <tr>
              <td class="faculty-sno">33</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/33.jpg" alt="B.Tatalu" class="faculty-photo">
                <div class="faculty-name">B.Tatalu</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Sc</td>
              <td class="faculty-highlight">Mathematics</td>
              <td class="faculty-exp">28</td>
            </tr>
            <tr>
              <td class="faculty-sno">34</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/34.jpg" alt="K.Ganeswararao" class="faculty-photo">
                <div class="faculty-name">K.Ganeswararao</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.A</td>
              <td class="faculty-highlight">English</td>
              <td class="faculty-exp">10</td>
            </tr>
            <tr>
              <td class="faculty-sno">35</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/35.jpg" alt="V.Ramaraju" class="faculty-photo">
                <div class="faculty-name">V.Ramaraju</div>
              </td>
              <td class="faculty-highlight">Librarian</td>
              <td>M.L.I.S</td>
              <td class="faculty-highlight">Library Science</td>
              <td class="faculty-exp">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'academic-calendars': {
    title: 'Academic Calenders',
    content: '<p class="college-para">Under Process.</p>'
  },
  'library': {
    title: 'Library',
    content: '<p class="college-para">Under Process.</p>'
  },
  'anti-ragging': {
    title: 'Anti Ragging',
    content: `
      <h3 class="vision-heading">Under Process</h3>
    `,
    parentLabel: 'Committee'
  },
  'committee-sc-st': {
    title: 'Commitee for SC/ST',
    content: `
      <p class="college-para">Under Process.</p>
    `,
    parentLabel: 'Committee'
  },
  'grievance-redressal': {
    title: 'Grievance Redressal Committee',
    content: `
      <p class="college-para">Under Process.</p>
    `,
    parentLabel: 'Committee'
  },
  'internal-complaint': {
    title: 'Internal Compliant Committee',
    content: `
      <p class="college-para">Under Process.</p>
    `,
    parentLabel: 'Committee'
  },
  'iqac': {
    title: 'Internal Quality Assurance Cell (IQAC)',
    content: '<p class="college-para">Under Process.</p>'
  },
  'academic-collaborations': {
    title: 'Academic Collaborations',
    content: '<p class="college-para">Under Process.</p>'
  },

  'bpharm-pos': {
    title: 'Program Outcomes',
    content: `<div class="pdf-card"><div class="pdf-card-label">B.PHARM PROGRAM OUTCOMES</div><a href="/assets/pdfs/b-pharm-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`,
    parentLabel: 'B.Pharm'
  },
  'bpharm-cos': {
    title: 'Course Outcomes',
    content: `<div class="pdf-card"><div class="pdf-card-label">B.PHARM COURSE OUTCOMES</div><a href="/assets/pdfs/b-pharm-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`,
    parentLabel: 'B.Pharm'
  },

  'mpharm-pa-cos':  { title: 'Course Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICAL ANALYSIS - COURSE OUTCOMES</div><a href="/assets/pdfs/mpharm-pa-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutical Analysis' },
  'mpharm-pa-pos':  { title: 'Program Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICAL ANALYSIS - PROGRAM OUTCOMES</div><a href="/assets/pdfs/mpharm-pa-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutical Analysis' },
  'mpharm-pcs-cos': { title: 'Course Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICS - COURSE OUTCOMES</div><a href="/assets/pdfs/mpharm-pcs-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutics' },
  'mpharm-pcs-pos': { title: 'Program Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICS - PROGRAM OUTCOMES</div><a href="/assets/pdfs/mpharm-pcs-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutics' },
  'mpharm-ra-cos':  { title: 'Course Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM REGULATORY AFFAIRS - COURSE OUTCOMES</div><a href="/assets/pdfs/mpharm-ra-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Regulatory Affairs' },
  'mpharm-ra-pos':  { title: 'Program Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM REGULATORY AFFAIRS - PROGRAM OUTCOMES</div><a href="/assets/pdfs/mpharm-ra-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Regulatory Affairs' }
};

app.get('/academics/:page', (req, res) => {
  const page = academicsPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: page.parentLabel || 'Academics',
    parentUrl: '#'
  });
});

const administrationPages = {
  'governing-body': {
    title: 'Governing Body',
    content: `
      <p class="college-para">
        <strong>SRI SIVANI EDUCATIONAL SOCIETY</strong> has got a strong base in the guise of its Governing Body members. The members have a great vision since they are seasoned academicians, reputed industrialists, and successful people in their fields. The institution's executive governing body is responsible for ensuring effective management of the institution and for planning its future development. The governing body looks after the institution's affairs and demonstrates the primary objectives of teaching and research. It includes considering and approving the institution's strategic plan, setting its academic aims and objectives, and identifying the financial, physical, and staffing strategies. The members have a great vision since they are seasoned academicians, reputed industrialists, and successful people in their fields.
      </p>

      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Member</th>
              <th>Designation</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sri V.M.M. Sai Nadh Reddy</td>
              <td>Chairman</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sri Jami Surya Chandra Rao</td>
              <td>Vice Chairman</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sri K. Durga Srinivasa Rao</td>
              <td>Secretary</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sri K. Durga Prasad Raju</td>
              <td>Joint Secretary</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sri D. Venkata Rao</td>
              <td>Treasurer</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Dr. Sanapala Srinivasa Rao</td>
              <td>Correspondent</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Dr G.Tulasi Rao</td>
              <td>Professor Dept of Commerce</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Dr.V. Raj Kumar</td>
              <td>R&D Head, Pellets Pharma Ltd.</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Dr.A. V. Papa Rao,</td>
              <td>Asst. Prof of Mathematics, CEV-JNTUGV</td>
              <td>University Nominee</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Dr. K. Rajkiran</td>
              <td>Principal</td>
              <td>Member Secretary</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Dr. G. Venkateswara Rao</td>
              <td>Professor</td>
              <td>Member</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    parentLabel: 'Adminstration'
  },
  'principal': {
    title: 'Principal',
    content: `
      <img src="/assets/administration/principal.jpg" alt="Principal - Prof. K. Rajkiran" class="principal-photo-full">

      <p class="college-para">
        Sri Sivani College of Pharmacy is committed to delivering high-quality education while fostering a culture of research, innovation, and ethical values. Under the visionary leadership of Prof. K. Rajkiran, the institution consistently achieves academic excellence, nurtures skilled professionals, bridges the gap between Industry and Academia, and makes significant contributions to the advancement of Pharmaceutical Sciences.
      </p>

      <h3 class="section-heading-blue">About Prof. K. Rajkiran</h3>
      <p class="college-para">
        Prof. K. Rajkiran currently serves as the Principal and Professor at Sri Sivani College of Pharmacy, Chilakapalem, Srikakulam, Andhra Pradesh. He holds Postgraduate and Doctoral degrees in Department of Pharmacology from AU College of Pharmaceutical Sciences, Andhra University. He earned his Bachelor of Pharmacy (B. Pharm) from Siddhartha Institute of Pharmaceutical Sciences, Vijayawada. With extensive knowledge and expertise in the field, Prof. Rajkiran plays a pivotal role in guiding the institution toward academic and research excellence.
      </p>

      <h3 class="section-heading-blue">Experience & Recognition</h3>
      <p class="college-para">
        Prof. K. Rajkiran has over 17 years of experience in teaching, research, and administration at colleges affiliated with JNTUK and JNTU-GV. He was honored with the Excellence in Leadership and Professional Development Award by CSC Academy in recognition of his dedication to leadership and fostering professional growth. He is also a life member of the Association of Pharmaceutical Teachers of India (APTI), further reflecting his unwavering commitment to the field of Pharmaceutical Education.
      </p>

      <h3 class="section-heading-blue">Research & Publications</h3>
      <p class="college-para">
        Prof. K. Rajkiran has authored over 50 research and review papers published in reputed journals, written two textbooks, and holds four patents. He has presented his research at various national seminars and conferences. As a subject evaluator and resource person, he has made significant contributions to academic discourse and evaluation processes.
      </p>

      <h3 class="section-heading-blue">Leadership Roles</h3>
      <p class="college-para">
        Prof. K. Rajkiran has served as a convenor for faculty development programs, seminars, conferences, workshops, and various institutional events. His leadership has been instrumental in promoting academic excellence and cultivating a research-oriented culture within the college.
      </p>
    `,
    parentLabel: 'Adminstration'
  },
  'finance-officer': {
    title: 'Finance Officer',
    content: '<p class="college-para">Under Proces.</p>'
  },
  'controller-of-examination': {
    title: 'Controller of Examination',
    content: '<p class="college-para">Under Process.</p>'
  },
  'chief-vigilance-officer': {
    title: 'Chief Vigilance Officer',
    content: '<p class="college-para">Under Process.</p>'
  },
  'ombudsperson': {
    title: 'Ombudsperson',
    content: '<p class="college-para">Under Process.</p>'
  },
  'internal-complaint-committee': {
    title: 'Internal Complaint Commitee',
    content: '<p class="college-para">Under Process.</p>'
  },
  'academic-leadership': {
    title: 'Academic Leadership',
    content: '<p class="college-para">Under Process.</p>'
  }
};

app.get('/administration/:page', (req, res) => {
  const page = administrationPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Administration',
    parentUrl: '#'
  });
});

app.get('/about/:page', (req, res) => {
  const page = aboutPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'About HEI',
    parentUrl: '/about-hei'
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});