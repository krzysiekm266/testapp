export interface Task {
  id?: number;
  name: string;
  status: boolean;
  create_at?: Date;
  complete_at?:Date;
}

export const TASKS = [
  {
    id:1,
    name:'zadanie testowe ',
    status:false,
    create_at: new Date()
  },
  {
    id:2,
    name:'zkosic trawnik ',
    status:false,
    create_at: new Date()
  },
  {
    id:3,
    name:'wyniesc smieci',
    status:false,
    create_at: new Date()
  }
];
