import React from "react";

const ImproveSkills = () => {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <div className="section hero-section">
      <div className="col img">
        <img src="/img/gallery/img_13.jpg" alt="" />
      </div>

      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index)=>(
          <p className="skill-item" key={index}>{item}</p>
        ))}
        <p className="info"></p>
        <button className="btn">signup now</button>
      </div>
    </div>
  );
};

export default ImproveSkills;
