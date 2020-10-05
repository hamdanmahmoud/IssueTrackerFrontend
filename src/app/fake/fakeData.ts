import { Issue } from "app/models/Issue";
import { IssueStatus } from "app/models/IssueStatus";
import { Permission } from "app/models/Permission";
import { Project } from "app/models/Project";
import { ProjectCard } from "app/models/ProjectCard";
import { User } from "app/models/User";

export const mahmoud: User = new User(
  "4d3944fe-5861-477c-b50a-4eee542667d5",
  "Mahmoud-Tudor",
  "Hamdan",
  "hamdan.mahmoudtudor@gmail.com",
  "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg"
);

export const ana: User = new User(
  "dfefdd1f-1975-4795-8f38-dc77a849cc50",
  "Ana-Maria",
  "Tanase",
  "tanase.anamaria97@gmail.com",
  "https://resilientblog.co/wp-content/uploads/2019/07/sky-quotes.jpg"
);

export const hori: User = new User(
  "10204d49-4251-4219-945f-a2f4aaa7dd41",
  "George-Horatiu",
  "Niculae",
  "niculae.georgehoratiu@gmail.com",
  "https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
);

export const project1: Project = {
  title: "Frontend",
  summary: "This is the first part of the A project",
  issues: [],
  owner: mahmoud,
  collaborators: [hori, ana],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "9c7e86b2-b9dc-4a62-9229-d17c774d0460",
};

export const project2: Project = {
  title: "Backend",
  summary: "Short description for project with title B",
  issues: [],
  owner: mahmoud,
  collaborators: [ana],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "6f6b9331-b0e1-4ce3-845c-329897a7ca5e",
};

export const project3: Project = {
  title: "System design",
  summary: "Short description",
  issues: [],
  owner: mahmoud,
  collaborators: [],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "6108a364-6dbc-421f-a40e-ab3f8886c681",
};

export const project4: Project = {
  title: "Database configuration",
  summary: "Another short description for this last project",
  issues: [],
  owner: mahmoud,
  collaborators: [hori],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "d77de362-7804-4e9d-9b7c-ea338e80ec69",
};

export const collab1: Project = {
  title: "IssueTracker",
  summary: "This is the first part of the A project",
  issues: [],
  owner: ana,
  collaborators: [hori, mahmoud],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "9c7e86b2-b9dc-4a62-9229-d17c774d0460",
};

export const collab2: Project = {
  title: "Scheduler",
  summary: "Short description for project with title B",
  issues: [],
  owner: ana,
  collaborators: [mahmoud],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "6f6b9331-b0e1-4ce3-845c-329897a7ca5e",
};

export const collab3: Project = {
  title: "SystemsCorp",
  summary: "Short description",
  issues: [],
  owner: ana,
  collaborators: [mahmoud, hori],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "6108a364-6dbc-421f-a40e-ab3f8886c681",
};

export const collab4: Project = {
  title: "Client UI Management",
  summary: "Another short description for this last project",
  issues: [],
  owner: hori,
  collaborators: [ana, mahmoud],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "d77de362-7804-4e9d-9b7c-ea338e80ec69",
};

export const collab5: Project = {
  title: "Creative",
  summary: "Short description for project ",
  issues: [],
  owner: ana,
  collaborators: [mahmoud],
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  id: "6f6b9331-b0e1-4ce3-845c-329897a7ca5e",
};

const task1: Issue = {
  project: project1,
  summary: "Summary for this particular issue",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: mahmoud,
  assignees: [hori, ana],
  status: "CANCELED",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 60,
  type: "task",
  id: "9c7e86b2-b9dc-4a62-9229-d17c774d0460",
  selected: false,
};

const task2: Issue = {
  project: project4,
  summary: "Summary for this exact exact exact exact exact exact issue",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: hori,
  assignees: [ana],
  status: "RESOLVED",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 40,
  type: "task",
  id: "6f6b9331-b0e1-4ce3-845c-329897a7ca5e",
  selected: false,
};

const task3: Issue = {
  project: project3,
  summary: "Summary for this awesome issue",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: hori,
  assignees: [mahmoud, ana],
  status: "IN_REVIEW",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 90,
  type: "task",
  id: "6108a364-6dbc-421f-a40e-ab3f8886c681",
  selected: false,
};

const task4: Issue = {
  project: project2,
  summary: "Summary for this issue",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: ana,
  assignees: [mahmoud],
  status: "IN_PROGRESS",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 30,
  type: "task",
  id: "d77de362-7804-4e9d-9b7c-ea338e80ec69",
  selected: false,
};

const task5: Issue = {
  project: project4,
  summary: "Some very smart summary",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: ana,
  assignees: [hori, mahmoud],
  status: "IN_REVIEW",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 45,
  type: "bug",
  id: "6a5c48e5-b5ae-4bbc-90bf-d304d7fc746d",
  selected: false,
};

const task6: Issue = {
  project: project4,
  summary: "Another summary here",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam.`,
  reporter: hori,
  assignees: [mahmoud],
  status: "PENDING",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 55,
  type: "task",
  id: "3fbb8319-61c8-413d-8778-8dce95fc47ae",
  selected: false,
};

const task7: Issue = {
  project: project4,
  summary: "Summary for this issue",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam.`,
  reporter: mahmoud,
  assignees: [ana, hori],
  status: "RESOLVED",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 60,
  type: "task",
  id: "78c0014a-fd2f-411c-af98-3d574e4845df",
  selected: false,
};

const task8: Issue = {
  project: project4,
  summary: "Summary for this task",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: ana,
  assignees: [mahmoud, hori],
  status: "TO_DO",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 20,
  type: "task",
  id: "c2bfee57-6262-4b11-976a-1111c203b62e",
  selected: false,
};

const task9: Issue = {
  project: project4,
  summary: "Summary for this issue right here.",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: mahmoud,
  assignees: [ana, hori],
  status: "DONE",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 30,
  type: "task",
  id: "86501f3c-856e-4938-8f74-6d95ab33b8f9",
  selected: false,
};

export const tasks: Issue[] = [
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
];

const bug1: Issue = {
  project: project1,
  summary: "Summary for this particular issue",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: hori,
  assignees: [mahmoud, ana],
  status: "PENDING",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 80,
  type: "bug",
  id: "4d3944fe-5861-477c-b50a-4eee542667d5",
  selected: false,
};

const bug2: Issue = {
  project: project2,
  summary: "Summary for this backend issue",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: mahmoud,
  assignees: [],
  status: "TO_DO",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 50,
  type: "bug",
  id: "2e48e03d-c5f4-4596-a201-0e98a38d60e3",
  selected: false,
};

const bug3: Issue = {
  project: project3,
  summary: "Don't forget about db schema",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur.`,
  reporter: ana,
  assignees: [mahmoud],
  status: "RESOLVED",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 70,
  type: "bug",
  id: "1873b77a-1c61-4a6e-956f-43832fe4c021",
  selected: false,
};

const bug4: Issue = {
  project: project4,
  summary: "Some very smart summary",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: ana,
  assignees: [hori, mahmoud],
  status: "IN_REVIEW",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 35,
  type: "bug",
  id: "4e7c3eeb-fe7a-4acd-b565-79d0ad73eba9",
  selected: false,
};

const bug5: Issue = {
  project: project4,
  summary: "Some very smart summary for this bug",
  description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  reporter: ana,
  assignees: [hori, mahmoud],
  status: "CANCELED",
  created: new Date(Date.now() + Math.round(Math.random() * 10000)),
  priority: 70,
  type: "bug",
  id: "320c739e-025a-46e5-905d-5c2f0013286c",
  selected: false,
};

export const bugs: Issue[] = [bug1, bug2, bug3, bug4, bug4, bug5];

export const allIssues: Issue[] = [...tasks, ...bugs];

export const columnsToDisplayForIssues: string[] = [
  "select",
  "project",
  "summary",
  "reporter",
  "assignees",
  "status",
  "created",
  "priority",
  "edit",
  "remove",
];

export const columnsToDisplayForMyProjects: string[] = [
  "select",
  "title",
  "summary",
  "owner",
  "collaborators",
  "created",
  "edit",
  "remove",
];

export const columnsToDisplayForCollaborations: string[] = [
  "title",
  "summary",
  "owner",
  "collaborators",
  "created",
];

export const allPermissions: Permission[] = [
  Permission.ADD_COMMENTS,
  Permission.ADMINISTER_ROLES,
  Permission.ASSIGN_ISSUES,
  Permission.CANCEL_ISSUES,
  Permission.CLOSE_ISSUES,
  Permission.CREATE_ISSUES,
  Permission.DELETE_ALL_COMMENTS,
  Permission.DELETE_ISSUES,
  Permission.DELETE_OWN_COMMENTS,
  Permission.EDIT_ALL_COMMENTS,
  Permission.EDIT_ISSUES,
  Permission.EDIT_OWN_COMMENTS,
];

export const statusOptions: IssueStatus[] = [
  IssueStatus.PENDING,
  IssueStatus.TO_DO,
  IssueStatus.IN_PROGRESS,
  IssueStatus.IN_REVIEW,
  IssueStatus.RESOLVED,
  IssueStatus.CANCELED,
  IssueStatus.DONE,
];

export const projectsCreatedByMe: Project[] = [
  project1,
  project2,
  project3,
  project4,
];

export const collaborations: Project[] = [
  collab1,
  collab2,
  collab3,
  collab4,
  collab5,
];

export const allProjects: Project[] = [
  ...projectsCreatedByMe,
  ...collaborations,
];

export const dashboardProjects: ProjectCard[] = allProjects
  .map((project) => {
    return new ProjectCard().fromProjectToCard(project);
  })
  .map((project) => project.setIssues(allIssues));

// export const dashboardProjects: ProjectCard[] = [
//   {
//     title: "Frontend",
//     summary: "This is the first part of the A project",
//     urgentIssues: 3,
//     assignedToMe: 2,
//     allOpen: 7,
//     id: "9c7e86b2-b9dc-4a62-9229-d17c774d0460",
//   },
//   {
//     title: "Backend",
//     summary: "Short description for project with title B",
//     urgentIssues: 2,
//     assignedToMe: 2,
//     allOpen: 5,
//     id: "6f6b9331-b0e1-4ce3-845c-329897a7ca5e",
//   },
//   {
//     title: "System design",
//     summary: "Short description",
//     urgentIssues: 0,
//     assignedToMe: 2,
//     allOpen: 4,
//     id: "6108a364-6dbc-421f-a40e-ab3f8886c681",
//   },
//   {
//     title: "Database configuration",
//     summary: "Another short description for this last project",
//     urgentIssues: 0,
//     assignedToMe: 2,
//     allOpen: 3,
//     id: "d77de362-7804-4e9d-9b7c-ea338e80ec69",
//   },
// ];

export const profileDescription: string = `Don't be scared of the truth because we 
need to restart the human 
foundation in truth And I love you like Kanye loves Kanye I love 
Rick Owens’ bed design but the back is...`;

export const profileName: string = "Mahmoud Hamdan";

export const profileTitle: string = "Software engineer";

export function getIssueById(id: string) {
  return allIssues.find((issue) => issue.id === id);
}
