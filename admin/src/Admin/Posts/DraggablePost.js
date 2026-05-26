import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DraggablePost = React.memo(
  ({ post, index, handleDelete, handleEdit, handleFlagChange }) => {
    const thumbnailImage =
      post.mediaContent && post.mediaContent.length > 0
        ? post.mediaContent[0].imageUrl
        : post.imagePath && post.imagePath.length > 0
        ? post.imagePath[0]
        : "https://via.placeholder.com/150x200";
    const isActive = post.isActive !== false;
    const isNewMod = post.isNewMod === true;

    return (
      <Draggable key={post._id} draggableId={post._id} index={index}>
        {(provided) => (
          <tr
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="admin-table-row"
          >
            <td>{post.order}</td>
            <td>
              <img
                className="admin-post-thumb"
                src={thumbnailImage}
                alt={post.title}
              />
            </td>
            <td className="admin-post-title">{post.title}</td>
            <td><span className="admin-category-pill">{post.category}</span></td>
            <td>
              <button
                type="button"
                className={`admin-status-pill ${isActive ? "active" : "inactive"}`}
                onClick={() => handleFlagChange(post._id, "isActive", !isActive)}
                aria-pressed={isActive}
              >
                <span className="admin-status-dot" />
                {isActive ? "Active" : "Inactive"}
              </button>
            </td>
            <td>
              <button
                type="button"
                className={`admin-status-pill new-mod ${isNewMod ? "active" : "muted"}`}
                onClick={() => handleFlagChange(post._id, "isNewMod", !isNewMod)}
                aria-pressed={isNewMod}
              >
                <span className="admin-status-dot" />
                {isNewMod ? "New Mod" : "Muted"}
              </button>
            </td>
            <td>
              <div className="admin-row-actions">
                <button type="button" className="admin-icon-btn danger" onClick={() => handleDelete(post._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <Link to={`/Admin/Post/Edit/${post._id}`} className="admin-icon-btn edit">
                <FontAwesomeIcon
                  icon={faPen}
                  onClick={() => handleEdit(post)}
                />
              </Link>
              </div>
            </td>
          </tr>
        )}
      </Draggable>
    );
  }
);

export default DraggablePost;
