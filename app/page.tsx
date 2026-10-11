import Image from 'next/image';

const research = [
  { title: 'Tactile simulation for physical interaction', date: 'Feb – Apr 2026', text: 'Investigated tactile simulators and data collection for robot manipulation, including TactiSim. Studied MuJoCo and compared hydroelastic, Flex, rigid-body contact, and data-driven approaches to contact simulation.', tags: ['Tactile sensing', 'MuJoCo', 'Contact simulation'] },
  { title: 'Visuotactile learning for robotic grasping', date: 'Sep 2025 – Feb 2026', text: 'Helped build an imitation-learning data collection system integrating a RealMan arm, two depth cameras, tactile skin, and an electric gripper. Collected over 400 grasping demonstrations and investigated visual encoders, UMI-style handheld collection, and manipulation dataset conventions.', tags: ['Imitation learning', 'Visuotactile perception', 'Data collection'] },
];
const projects = [
  { number: '01', title: 'Wearable multimodal navigation assistant', name: '白喉莺', date: 'Nov 2024 – Aug 2025', role: 'Project lead', text: 'An edge–cloud robotic assistant for people with visual impairments. I designed the robot structure and hardware, developed the ROS 2 control framework, and integrated indoor mapping, route planning, and multimodal interaction.', detail: 'The project combined long- and short-range navigation with RTAB-Map indoor mapping, semantic understanding, and vibration feedback. We developed four hardware iterations and collaborated with the Wuhan Disabled Persons’ Federation and assistive-technology partners.', result: 'National Second Prize · Chinese Collegiate Computing Competition', tags: ['ROS 2', 'RTAB-Map', 'Human–robot interaction'] },
  { number: '02', title: 'Hummingbird: a household object assistant', name: '蜂鸟管家', date: 'Nov 2024 – Aug 2025', role: 'System design & development', text: 'A household robot for personalized object registration and management. I worked on its mechanical design, hardware integration, and upper-level system using ROS 2, behavior trees, FoundationPose, and Qwen2.5-VL.', detail: 'Developed an object-recognition and spatial-localization pipeline using Qwen2.5-VL and YOLOv8. The project progressed through four physical prototypes and was recognized as a provincial undergraduate innovation project.', result: 'National Second Prize · China Collegiate Intelligent Robot Creative Competition', tags: ['Vision–language models', 'FoundationPose', 'Behavior trees'] },
  { number: '03', title: 'From flight control to an unmanned surface vessel', name: 'FMT / MarineSIM', date: 'Sep – Nov 2024', role: 'Undergraduate project lead', text: 'Adapted the FMT open-source flight-control workflow for an unmanned boat model at HUST’s Underwater Robotics Laboratory, connecting mechanical design, simulation, and control development.', detail: 'Contributed to boat measurements and simulation definitions, test-bench connectors, MATLAB visual logic modules, control-algorithm adaptation, and debugging. Wrote deployment and operating instructions for the MarineSIM experimental documentation.', result: 'Experimental platform development · Underwater Robotics Laboratory, HUST', tags: ['Control systems', 'MATLAB', 'Mechanical design'] },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#about" className="wordmark" aria-label="Can Gong home">CG<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#research">Research</a><a href="#projects">Projects</a><a href="#background">Background</a><a href="mailto:u2579279465@hust.edu.cn">Contact ↗</a></nav>
      </header>
      <main id="main">
        <section className="intro" id="about" aria-labelledby="name">
          <div className="intro-copy">
            <p className="eyebrow">Huazhong University of Science and Technology</p>
            <h1 id="name">Can Gong <span lang="zh-CN">龚灿</span></h1>
            <p className="position">Undergraduate · Naval Architecture & Ocean Engineering</p>
            <p>I am an undergraduate at <a href="https://www.hust.edu.cn/" target="_blank" rel="noreferrer">Huazhong University of Science and Technology (HUST)</a>, with a background in naval architecture and ocean engineering and hands-on experience in robotics.</p>
            <p>My interests center on <strong>robot manipulation, visuotactile perception, and human–robot interaction</strong>. My projects span imitation-learning data collection, tactile simulation, assistive navigation, and household robotics.</p>
            <div className="intro-links"><a href="mailto:u2579279465@hust.edu.cn">Email ↗</a><span aria-hidden="true">/</span><a href="#research">Research experience ↓</a></div>
          </div>
          <figure className="portrait"><Image src="/portrait.png?v=anime" alt="Illustrated anime avatar" width={600} height={800} priority /><figcaption>Can Gong <span lang="zh-CN">/ 龚灿</span></figcaption></figure>
        </section>
        <section id="research" aria-labelledby="research-title">
          <div className="section-heading"><h2 id="research-title">Research experience</h2><span>01 / RESEARCH</span></div>
          <p className="section-intro">Learning how robots perceive contact and act in the physical world.</p>
          {research.map(item => <article className="research-row" key={item.title}>
            <div className="entry-meta"><p>{item.date}</p><span>Research contributor</span></div>
            <div><h3>{item.title}</h3><p className="affiliation">Research group of Assoc. Prof. Yiqun Li · HUST</p><p>{item.text}</p><ul className="tags" aria-label="Research topics">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
          </article>)}
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><h2 id="projects-title">Selected projects</h2><span>02 / PROJECTS</span></div>
          {projects.map(item => <article className="project-row" key={item.number}>
            <div className="project-index" aria-hidden="true">{item.number}<span></span></div>
            <div><div className="project-top"><span className="project-name">{item.name}</span><span>{item.date}</span></div>
              <h3>{item.title}</h3><p className="affiliation">{item.role}</p><p>{item.text}</p>
              <p className="recognition">↳ {item.result}</p>
              <ul className="tags" aria-label="Project technologies">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <details><summary>More about this project</summary><p>{item.detail}</p></details>
            </div>
          </article>)}
        </section>
        <section id="background" aria-labelledby="background-title">
          <div className="section-heading"><h2 id="background-title">Education & recognition</h2><span>03 / BACKGROUND</span></div>
          <div className="education"><span className="entry-meta">Enrolled Sep 2023</span><div><h3>Huazhong University of Science and Technology</h3><p>Undergraduate, School of Naval Architecture and Ocean Engineering</p><p className="affiliation">Excellence Program <span lang="zh-CN">· 卓越班</span></p></div></div>
          <div className="background-grid">
            <div><h3 className="small-heading">Selected honors</h3><ul className="honors">
              <li><strong>National Second Prize</strong><span>Chinese Collegiate Computing Competition</span></li>
              <li><strong>National Second Prize</strong><span>China Collegiate Intelligent Robot Creative Competition</span></li>
              <li><strong>National Third Prize</strong><span>China Robot and Artificial Intelligence Competition</span></li>
              <li><strong>Two National Second Prizes · A1</strong><span>National Marine Vehicle Design and Construction Competition, 13th & 14th editions</span></li>
              <li><strong>University scholarships & recognition</strong><span>Merit Student Scholarship (2024); Outstanding Student Leader (2025)</span></li>
            </ul></div>
            <div><h3 className="small-heading">Technical toolkit</h3><dl className="toolkit"><dt>Programming</dt><dd>Python · C++ · MATLAB · MJCF</dd><dt>Robotics & simulation</dt><dd>ROS 2 · MuJoCo · FMT · Arduino</dd><dt>Design & engineering</dt><dd>SolidWorks · AutoCAD · ANSYS</dd></dl>
              <h3 className="small-heading service-heading">Beyond research</h3><p className="service">Served as a class academic representative and led student publicity and academic-development activities. Contributed 144 hours of volunteer service.</p>
            </div>
          </div>
        </section>
        <footer><span>© {new Date().getFullYear()} Can Gong</span><a href="mailto:u2579279465@hust.edu.cn">u2579279465@hust.edu.cn ↗</a><a href="#about">Back to top ↑</a></footer>
      </main>
    </>
  );
}
