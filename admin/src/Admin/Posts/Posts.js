import AdminLayout from "../../layouts/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../layouts/Loading";
import Swal from "sweetalert2";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggablePost from './DraggablePost'; // Import the new memoized component

function PostsData({ postsData, currentPage, itemsPerPage, handleDelete, handleEdit, onDragEnd }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const postsToDisplay = postsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <DragDropContext onDragEnd={onDragEnd}>  {/* Pass onDragEnd here */}
          <Droppable droppableId="posts" direction="vertical">
            {(provided) => (
              <table className="min-w-full bg-white" ref={provided.innerRef} {...provided.droppableProps}>
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="w-1/5 py-2">Order</th>
                    <th className="w-1/5 py-2">Picture</th>
                    <th className="w-1/5 py-2">Title</th>
                    <th className="w-1/5 py-2">Category</th>
                    <th className="w-1/5 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {postsToDisplay.map((post, index) => (
                    <DraggablePost
                      key={post._id}          // Ensure each post has a unique key
                      post={post}             // Pass the post as a prop
                      index={index}           // Pass index as a prop
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}



function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 300;
  const [postsData, setPostsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://teamacecrafts.com/api/posts/new-all-post"); // Updated URL
      setPostsData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://teamacecrafts.com/api/posts/${postId}`);
      Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
      fetchPosts();  // Refresh the list of posts after successful deletion
    } catch (error) {
      Swal.fire('Error!', 'There was a problem deleting the post.', 'error');
      console.error('Error deleting post:', error);
    }
  };
  

  const handleEdit = (post) => {
    console.log("Editing Post:", post);
    return (
      <Link to={`/Admin/Post/Edit/${post._id}`} className="edit-link">Edit</Link>
    );
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
 // Define onDragEnd function
 const onDragEnd = async (result) => {
  const { destination, source } = result;
  if (!destination) return;  // If there's no destination, do nothing.

  // Create a new array to avoid direct mutation
  const reorderedPosts = Array.from(postsData); // Avoid direct mutation

  const [movedPost] = reorderedPosts.splice(source.index, 1);  // Remove the dragged post
  reorderedPosts.splice(destination.index, 0, movedPost);  // Insert it at the new position

  // Update the order in the database via API
  try {
    await axios.post("https://teamacecrafts.com/api/order/update", {
      draggedPostId: movedPost._id,
      targetPostId: reorderedPosts[destination.index]._id,
      newPosition: destination.index,
    });

    // Update local state with the new order
    setPostsData(reorderedPosts);  // Properly update state
  } catch (err) {
    console.error("Error updating order:", err);
  }
};

  const PostsContent = (
    <div className="p-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <Link
              to="/Admin/Post/New"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600"
            >
              <FontAwesomeIcon icon={faPlus} /> New Post
            </Link>
            <div className="flex items-center bg-white border rounded-lg shadow-md px-4 py-2">
              <FontAwesomeIcon icon={faSearch} className="text-indigo-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="outline-none bg-transparent"
              />
              {searchQuery && (
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 ml-2 cursor-pointer"
                />
              )}
            </div>
          </div>
          <PostsData
            postsData={filteredPosts}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            handleDelete={handleDelete}
          handleEdit={handleEdit}
          onDragEnd={onDragEnd}
          />
          <div className="flex justify-center mt-4">
            {totalPages > 1 && currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="mr-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Previous
              </button>
            )}
            <span>
              Page {currentPage} of {totalPages}
            </span>
            {totalPages > 1 && currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );

  return <AdminLayout Content={PostsContent} />;
}

export default Posts;
