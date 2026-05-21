import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DraggablePost = React.memo(
  ({ post, index, handleDelete, handleEdit }) => {
    const thumbnailImage =
      post.mediaContent && post.mediaContent.length > 0
        ? post.mediaContent[0].imageUrl
        : post.imagePath && post.imagePath.length > 0
        ? post.imagePath[0]
        : "https://via.placeholder.com/150x200";

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
