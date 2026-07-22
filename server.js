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
    content: '<p class="college-para">Add content here.</p>'
  },
  'treasurer-message': {
    title: "Treasurer's Message",
    content: '<p class="college-para">Add content here.</p>'
  },
  'principal-message': {
    title: "Principal's Message",
    content: '<p class="college-para">Add content here.</p>'
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


app.get('/about/:page', (req, res) => {
  const page = aboutPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', { pageTitle: page.title, content: page.content });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});