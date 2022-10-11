const projectsList = [
  {
    title: "Project finder",
    desc: " It is the project created using github api to search varios projects. Special feature here is you can bookmark the project for later view.",
  },
  {
    title: "Diabetes Explorer",
    desc: " It is the project created using github api to search various projects. Special feature here is you can bookmark the project for later view.",
  },
  {
    title: "Futsa",
    desc: " It is a futsal booking system created using mern stack and mobile app using flutter.",
  },
];

let projectsPlaceholder = document.querySelector("#projects");

projectsList.map((item, _) => {
  const project = document.createElement("div");
  project.classList.add("project");

  const title = document.createElement("h1");
  const titleContent = document.createTextNode(item.title);
  title.appendChild(titleContent);

  const desc = document.createElement("p");
  const descContent = document.createTextNode(item.desc);
  desc.appendChild(descContent);

  project.appendChild(title);
  project.appendChild(desc);
  projectsPlaceholder.appendChild(project);
});
