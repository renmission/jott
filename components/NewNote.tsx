import { NewNoteProps } from "../lib/useNote";
import NoteForm from "./NoteForm";

export default function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mt-4 mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  );
}
