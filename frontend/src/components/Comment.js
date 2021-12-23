import { connect } from "react-redux";
import authAction from "../redux/actions/authAction";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const Comment = (props) => {
  const [editMode, setEditMode] = useState(false);

  const input = useRef();

  const handleEditComment = async () => {
    let commentEdited = {
      commentary: input.current.value,
    };
    const updateCommentAwait = await props.updateComment(
      props.comment._id,
      commentEdited
    );
    setEditMode(!editMode);
    if (updateCommentAwait.success) {
      props.fetch(props.idCity);
    }
  };

  const handleDeleteComment = async () => {
    const deleteCommentAwait = await props.deleteComment(
      props.id,
      props.comment._id
    );
    if (deleteCommentAwait.success) {
      props.fetch(props.idCity);
    }
  };

  return (
    <>
      <div className="overflow-y-scroll p-2 scrollbarcomments">
        <div className="bg-purple-300 py-2 px-3 rounded-lg rounded-r-lg">
          <div className="flex items-center">
            <div className="flex items-center">
              {props.users.map((user, index) =>
                user.id === props.comment.userId ? (
                  <span
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(${user.photoURL})`,
                    }}
                    key={index}
                    className="w-14 h-14 flex items-center justify-center font-bold  rounded-full"
                  ></span>
                ) : null
              )}
              {props.users.map((user, index) =>
                user.id === props.comment.userId ? (
                  <span
                    key={index}
                    className="fw-bold text-purple-600 rubik pl-5"
                  >
                    {user.firstName} {user.lastName}
                  </span>
                ) : null
              )}
            </div>
            <div className="flex pl-3 md:pl-96 flex-col  md:flex-row">
              {props.comment.userId === props.user._id ? (
                <>
                  <span onClick={() => setEditMode(!editMode)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#7c3aed"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </span>
                  <span
                    onClick={() => {
                      Swal.fire({
                        title: `<span style="color:#FFF"> Are you sure?<span>`,
                        html: `<span style="color:#FFF"> You won't be able to revert this!<span>`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#a78bfa",
                        cancelButtonColor: "#a78bfa",
                        background: "#9333ea",
                        iconColor: "#e9d5ff",
                        confirmButtonText: `<span style="color:#fff"> Yes, delete it! </span>`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            background: "#9333ea",
                            iconColor: "#e9d5ff",
                            confirmButtonColor: "#a78bfa",
                            icon: "success",
                            title: `<span style="color:#FFF">Deleted!<span>`,
                            html: `<span style="color:#FFF">Our commentary has been deleted.<span>`,
                          });

                          handleDeleteComment();
                        } else if (
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          Swal.fire({
                            background: "#9333ea",
                            iconColor: "#e9d5ff",
                            confirmButtonColor: "#a78bfa",
                            icon: "error",
                            title: `<span style="color:#FFF">Cancelled!<span>`,
                            html: `<span style="color:#FFF">Your commentary is safe.<span>`,
                          });
                        }
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#7c3aed"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </span>
                </>
              ) : null}
            </div>
          </div>
          <div name="comentarios" className="">
            {editMode ? (
              <>
                <div className="flex flex-col">
                  <input
                    className="mt-2 mb-1 py-2 rounded-full text-white pl-5 bg-purple-600 w-full focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
                    defaultValue={props.comment.commentary}
                    ref={input}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === "EnterNumpad") {
                        if (input.current.value !== "") {
                          Swal.fire({
                            position: "bottom-center",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                            iconColor: "#e9d5ff",
                            background: "#9333ea",
                            title: `<span style="color:#FFF"> The comment was edited successfully <span>`,
                          });

                          handleEditComment();
                        }
                      }
                    }}
                  />
                  <div className="mt-2">
                    <button
                      className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center py-3"
                      onClick={() => {
                        if (input.current.value !== "") {
                          Swal.fire({
                            position: "bottom-center",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                            iconColor: "#e9d5ff",
                            background: "#9333ea",
                            title: `<span style="color:#FFF"> The comment was edited successfully <span>`,
                          });

                          handleEditComment();
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit comment
                    </button>

                    <button
                      className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center ml-3 py-3"
                      onClick={() => {
                        Swal.fire({
                          position: "bottom-center",
                          icon: "error",
                          showConfirmButton: false,
                          timer: 1500,
                          iconColor: "#e9d5ff",
                          background: "#9333ea",
                          title: `<span style="color:#FFF"> The comment was not edited <span>`,
                        });

                        setEditMode(!editMode);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-purple-600 py-3 pl-5 fw-bold">
                {props.comment.commentary}
              </p>
            )}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
