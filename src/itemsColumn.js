import uuid from "uuid/v4";

// reason for mutliple items is to have separate uuid otherwise the code was malfunctioning.
const itemsColumn1 = [
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
];
const itemsColumn2 = [
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
];
const itemsColumn3 = [
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
];
const itemsColumn4 = [
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
  {
    id: uuid(),
    taskTitle: "Write a blogpost for DAOHelper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er",
    taskReward: "$5",
    taskTime: "2 days",
  },
];

export const columnsFromBackend = {
  [uuid()]: {
    name: "OPEN BOUNTIES",
    items: itemsColumn1,
    color: "#C4C4C4",
    textColor: "#000000",
  },
  [uuid()]: {
    name: "ASSIGNED/IN PROGRESS",
    items: itemsColumn2,
    color: "#4287F5",
    textColor: "#FFFFFF",
  },
  [uuid()]: {
    name: "UNDER REVIEW",
    items: itemsColumn3,
    color: "#A516B9",
    textColor: "#FFFFFF",
  },
  [uuid()]: {
    name: "CLOSE / REWARDED",
    items: itemsColumn4,
    color: "#06DBAC",
    textColor: "#FFFFFF",
  },
};
