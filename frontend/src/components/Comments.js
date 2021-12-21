import { connect } from "react-redux";
import { useRef } from "react";
import authAction from "../redux/actions/authAction";
import Comment from "./Comment";
import commentAction from "../redux/actions/commentAction";
import Swal from "sweetalert2";
const Comments = ({
  comment,
  users,
  user,
  addComment,
  id,
  fetch,
  idCity,
  deleteComment,
  updateComment,
}) => {
  const input = useRef();

  const handleComment = async () => {
    let commentObj = {
      commentary: input.current.value,
    };
    const addComentAwait = await addComment(id, commentObj);
    input.current.value = "";
    console.log(addComentAwait);

    if (addComentAwait.success) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        confirmButtonColor: "#9333ea",
        background: "#9333ea",
        iconColor: "#e9d5ff",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `<span style="color:#FFF"> Comment added successfully!<span>`,
      });

      fetch(idCity);
    }
  };

  return (
    <>
      <div className="bg-purple-700 p-2 rounded-lg flex flex-col justify-center items-center ">
        <div className="overflow-y-scroll h-80 scrollbarcomments">
          {comment.length >= 1 ? (
            comment.map((comment, index) => {
              return (
                <Comment
                  updateComment={updateComment}
                  key={index}
                  comment={comment}
                  fetch={fetch}
                  idCity={idCity}
                  users={users}
                  id={id}
                  deleteComment={deleteComment}
                />
              );
            })
          ) : (
            <>
              <div className="bg-purple-300 py-2 rounded-lg rounded-r-lg px-32">
                <div name="comentarios" className="">
                  <p className="text-purple-600 py-3 pl-5 fw-bold">
                    There are no comments on this itinerary, be the first!
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* INPUT */}
        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-purple-300 rounded-lg mb-4 mt-3">
          <label className="flex -mr-px justify-center w-15 p-2" name="comment">
            <span className="flex items-center leading-normal  rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#7c3aed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </label>
          <input
            type="text"
            className="flex-shrink flex-grow text-purple-600 bg-purple-300 rubik leading-normal w-px  border-0 h-10 border-grey-light px-3 self-center relative  font-roboto text-base outline-none placeholder-purple-600"
            htmlFor="comment"
            placeholder="Enter your comment"
            ref={input}
            onKeyDown={(e) => {
              if(input.current.value !== "") {
                if (e.key === "Enter" || e.key === "EnterNumpad") {
                  handleComment();
                }
              } else {

              }
            }}
          />
          <div className="flex -mr-px bg-purple-300  rounded-r-lg">
            <span
              onClick={(e) => {
                if(input.current.value !== "") {
                  if (e.key === "Enter" || e.key === "EnterNumpad") {
                    handleComment();
                  }
                } else {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    confirmButtonColor: "#9333ea",
                    background: "#9333ea",
                    iconColor: "#e9d5ff",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });
            
                  Toast.fire({
                    icon: "error",
                    title: `<span style="color:#FFF"> Error!<span>`,
                  });
                }
                
                
              }}
              
              className="flex rotate-send items-center leading-normal border-0 px-3 whitespace-no-wrap text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                viewBox="0 0 20 20"
                fill="#7c3aed"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  accessWithToken: authAction.accessWithToken,
  accessAccount: authAction.accessAccount,
  SignOut: authAction.SignOut,
  addComment: commentAction.addComment,
  deleteComment: commentAction.deleteComment,
  updateComment: commentAction.updateComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
