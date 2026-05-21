import AdminLayout from "../../layouts/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
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
    <div className="admin-table-card">
      <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="posts" direction="vertical">
            {(provided) => (
              <table className="admin-table" ref={provided.innerRef} {...provided.droppableProps}>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Picture</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {postsToDisplay.map((post, index) => (
                    <DraggablePost
                      key={post._id}
                      post={post}
                      index={index}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  ))}
                  {provided.placeholder}
                </tbody>
              </table>
            )}
          </Droppable>
        </DragDropContext>
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
    <section className="admin-page">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="admin-page-header">
            <div>
              <span className="admin-eyebrow">Catalog</span>
              <h1>Mods</h1>
              <p>Reorder listings, update product details, and keep the client storefront sharp.</p>
            </div>
            <div className="admin-stat-pill">
              <FontAwesomeIcon icon={faCubes} />
              <span>{filteredPosts.length} Mods</span>
            </div>
          </div>
          <div className="admin-toolbar">
            <Link
              to="/Admin/Post/New"
              className="admin-btn admin-btn-primary"
            >
              <FontAwesomeIcon icon={faPlus} /> New Mod
            </Link>
            <div className="admin-search">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search mods"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setSearchQuery("")}
                  className="admin-clear-search"
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
          <div className="admin-pagination">
            {totalPages > 1 && currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="admin-btn admin-btn-muted"
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
                className="admin-btn admin-btn-muted"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );

  return <AdminLayout Content={PostsContent} />;
}

export default Posts;
