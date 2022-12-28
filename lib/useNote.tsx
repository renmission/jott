export type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

export type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNote[];
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
};

export type EditTagsModalProps = {
  show: boolean;
  handleClose: () => void;
  availableTags: Tag[];
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
};

export type Note = {
    id: string;
  } & NoteData;
  
  export type RawNote = {
    id: string;
  } & RawNoteData;
  
  export type RawNoteData = {
    title: string;
    markdown: string;
    tagIds: string[];
  };
  
  export type NoteData = {
    title: string;
    markdown: string;
    tags: Tag[];
  };
  
  export type Tag = {
    id: string;
    label: string;
  };

  export type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
  };
  
  export type NoteFormProps = {
    onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
  } & Partial<NoteData>

  export type NewNoteProps = {
    onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
  };