import React, { useState } from "react";
// import "./TagsTypes.css";

const TagsTypes = () => {
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const handleCreate = (e) => {
    e.preventDefault();
    setTags([...tags, { name, description }]);
    setName("");
    setDescription("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newTags = [...tags];
    newTags[selectedTag] = { name, description };
    setTags(newTags);
    setSelectedTag(null);
    setName("");
    setDescription("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const newTags = [...tags];
    newTags.splice(selectedTag, 1);
    setTags(newTags);
    setSelectedTag(null);
  };

  return (
    <div className="tags-types-container">
      <h1>TAGS</h1>
      <form
        className="tags-types-form"
        onSubmit={selectedTag === null ? handleCreate : handleEdit}
      >
        <h2>{selectedTag === null ? "Create Tag" : "Edit Tag"}</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        {selectedTag === null ? (
          <button className="create-button" type="submit">
            Create
          </button>
        ) : (
          <button className="edit-button" type="submit">
            Edit
          </button>
        )}
      </form>
      <div className="tags-list-container">
        <label htmlFor="select-tag">Select a Tag</label>
        <select className="tags-types-select"
          id="select-tag"
          value={selectedTag === null ? -1 : selectedTag}
          onChange={(e) => {
            const index = parseInt(e.target.value);
            setSelectedTag(index === -1 ? null : index);
            setName(index === -1 ? "" : tags[index].name);
            setDescription(index === -1 ? "" : tags[index].description);
          }}
        >
          <option value={-1}>None</option>
          {tags.map((tag, index) => (
            <option key={index} value={index}>
              {tag.name}
            </option>
          ))}
        </select>
        {selectedTag !== null && (
          <div className="delete-tag-container">
            <h2>Delete Tag</h2>
            <p>Are you sure you want to delete this tag?</p>
            <p>{tags[selectedTag].name}</p>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagsTypes;
