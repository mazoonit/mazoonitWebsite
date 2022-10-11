let color="#168aad";
color="#396EB0"
export const experiences = [
  {
    from: "Nov 2021",
    to: "Now",
    title: "Software Engineer",
    company: "Egyptian Armed Forces",
    positionX: 120,
    positionZ: 1200,
    color: color,
    modelName:"nov21.glb",
    component: () => (
      <>
        <p>
          <strong>Air Defense Information System Center - Currently -</strong>
        </p>
        <p>
          * Leading a team of software engineers to develop and refactor
          military-based apps.
        </p>
        <p>
          <strong>Innovation Center at Faculty Of Reserved Officers</strong>
        </p>
        <p>
          * Created a smart glasses to help the visually impaired using computer
          vision algorithms (YOLO,HOG,OCR) and mapping techniques to describe
          the surroundings through voice commands.
        </p>
        <p>
          * Managed to enhance the performance of the real-time mode from 3 fps
          to 28 fps through transferring the heavy computations from the
          raspberry pi to a server by Implementing WebSockets Client-Server
          Architecture using Python/Flask.
        </p>
      </>
    ),
  },
  {
    from: "Sep 2021",
    to: "Nov 2021",
    title: "Software Engineer",
    company: "Spiritude",
    positionX: -120,
    positionZ: 1100,
    color: color,
    modelName:"sep21.glb",
    component: () => (
      <>
        <p>
          * Developed a generic form generator using React to generate complex
          forms easier and faster.
        </p>
        <p>
          * Implemented an accounting module and integrated It with the other
          parts of the Company's off-the-shelf ERP.
        </p>
        <p>
          * Created custom yet integrated ERP modules to provide clients with a
          tailored work cycles to fit with their business needs.
        </p>{" "}
        <br />
        <p>
          <em>Using Node.js, React, MySQL and MongoDB.</em>
        </p>
      </>
    ),
  },
  {
    from: "Aug 2020",
    to: "Sep 2021",
    title: "Full-Stack Web Developer",
    company: "Kernelz",
    positionX: 120,
    positionZ: 1000,
    color: color,
    modelName:"aug20.glb",
    component: () => (
      <>
        <p>
          * Started my own software house, Recruited another full-time
          full-stack web developer to accelerate the delivery time.
        </p>
        <p>
          * Created an off-the-shelf ERP and POS web apps with a generic and
          easy to custom user interface using React and a generic back-end with
          a tolerant database design using Node.js and Sequelize.
        </p>
        <p>
          * Our apps have been sold to eight various clients with a different
          business logic but thanks to the generic code design It wasn't that
          hard to cope with the differences.
        </p>
        <br />
        <p>
          <em>
            Our Clients are Captain Ayman Driving School , Aluwalls , Taj Carpet
            , 2M Clothes Factory and ICS Gas Company.
          </em>
        </p>
      </>
    ),
  },
  {
    from: "Dec 2019",
    to: "May 2020",
    title: "Full-Stack Web Developer",
    company: "Etgo",
    positionX: -120,
    positionZ: 900,
    color: color,
    modelName:"dec19.glb",
    component: () => (
      <dev style={{ textAlign: "left" }}>
        <p>
          * Developed a customized point of sale web app using the PERN stack.
        </p>
        <p>* Integrated it with the company's GraphQL API.</p>
        <p>
          * Refactored some of the company's legacy code which was written using
          the MERN stack.
        </p>
        <p>
          * Improved the overall performance of the app, Some end points
          responses times dropped from 6.1 seconds to 121 milliseconds.
        </p>
      </dev>
    ),
  },
  {
    from: "Jan 2019",
    to: "Dec 2019",
    title: "Full-Stack Web Developer",
    company: "Freelance",
    positionX: 120,
    positionZ: 800,
    color: color,
    modelName:"jan19.glb",
    component: () => (
      <dev>
        <p>I had two major projects</p>
        <p>
          <strong>
            Custom Accounting and CRM web app for Egythai tourism company{" "}
          </strong>
        </p>
        <p>
          * The app delivers a custom detailed accounting and sales reports
          based on the day to day company's transactions It has been developed
          using Node.js,React and MySQL.
        </p>
        <p>
          <strong>
            ERP web app with booking features for Captain Ayman driving school
          </strong>
        </p>
        <p>
          * The app achieved an easier yet effective way to manage a time
          sensitive booking process across all the branches of the school and
          delivers the needed reports,It has been developed using Node.js,React
          ,MySQL and MongoDB.
        </p>
        <br />
        <p>
          <em>
            Both projects have been deployed on Ubuntu VPSs from Digital Ocean.
          </em>
        </p>
      </dev>
    ),
  },
  {
    from: "Aug 2017",
    to: "Jan 2018",
    title: "Software Engineer Intern",
    company: "Pinerium",
    positionX: -120,
    positionZ: 700,
    color: "#396EB0",
    modelName:"aug17.glb",
    component: () => (
      <dev style={{ textAlign: "left" }}>
        <p>
          <strong>
            * Participated in 'Egypt IoT Challenge' competition under the
            umbrella of the company.{" "}
          </strong>
        </p>
        <p>
          <strong>
            * Progammed a Smart traffic light control system my role was to
            develop the following
          </strong>
        </p>
        <p>
          - A computer vision code which recognizes cars and counts them in each
          lane using Python, OpenCV.
        </p>
        <p>
          - A code which connects each node to the central server over
          WebSockets protocol using Python and Tornado.
        </p>
        <p>
          - An interface that communicates with users using Node.js and Express
          which has been deployed to a raspberry pi.
        </p>
      </dev>
    ),
  },
];
