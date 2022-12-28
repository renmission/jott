import NoteForm from "./NoteForm";
import { useNote } from "./NoteLayout";
import { EditNoteProps } from '../lib/useNote';

export default function EditNote({
  onSubmit,
  onAddTag,
  availableTags,
}: EditNoteProps) {

  const note = useNote();

  return (
    <>
      <h1 className="mt-4 mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={data => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
