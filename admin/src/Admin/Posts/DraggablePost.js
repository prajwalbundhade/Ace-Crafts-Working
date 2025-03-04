import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DraggablePost = React.memo(({ post, index, handleDelete, handleEdit }) => {
  return (
    <Draggable key={post._id} draggableId={post._id} index={index}>
      {(provided) => (
        <tr
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="text-center border-b"
        >
        <td className="py-2 text-center">{post.order}</td>
          <td className="py-2">
            <img className="w-20 mx-auto" src={post.imagePath} alt={post.title} />
          </td>
          <td className="py-2 truncate">{post.title}</td>
          <td className="py-2">{post.category}</td>
          <td className="py-2 flex justify-around">
            <FontAwesomeIcon
              className="text-red-500 cursor-pointer"
              icon={faTrash}
              onClick={() => handleDelete(post._id)}
            />
            <Link to={`/Admin/Post/Edit/${post._id}`}>
              <FontAwesomeIcon className="text-yellow-500" icon={faPen} onClick={() => handleEdit(post)} />
            </Link>
          </td>
        </tr>
      )}
    </Draggable>
  );
});

export default DraggablePost;
