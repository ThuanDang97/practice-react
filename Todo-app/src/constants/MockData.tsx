import status from './Enum';
const todos = [
  {
    id: 1,
    text: 'todo 1',
    isCompleted: true,
    status: 'Completed',
  },
  {
    id: 2,
    text: 'todo 2',
    isCompleted: false,
    status: 'Active',
  },
  {
    id: 3,
    text: 'todo 3',
    isCompleted: true,
    status: 'Completed',
  },
];
const filterBtns = [
  {
    id: 1,
    title: status.all,
    isActived: true,
    onClick: () => {},
  },
  {
    id: 2,
    title: status.active,
    isActived: false,
    onClick: () => {},
  },
  {
    id: 3,
    title: status.completed,
    isActived: false,
    onClick: () => {},
  },
];

export { filterBtns, todos };
