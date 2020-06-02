export type Action = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: string): Action => ({
  type: "ADD_NOTE",
  payload: note,
});
