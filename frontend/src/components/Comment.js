import { connect } from "react-redux";
import authAction from "../redux/actions/authAction";

const Comment = (props) => {

  return (
    <>
      <div className="overflow-y-scroll p-2 scrollbarcomments">
        <div className="bg-purple-300 py-2 px-3 rounded-lg rounded-r-lg">
          <div className="flex items-center">
            <div className="flex items-center">
              {props.users.map((user, index) => (
                user.id === props.comment.userId
                ? 
                <span
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${user.photoURL})`,
                 
                }}
                key={index}
                className="w-14 h-14 flex items-center justify-center font-bold  rounded-full"
              >

              </span>
              : null 
              ))}
              {props.users.map((user, index) => (
                user.id === props.comment.userId
                ? 
                <span key={index} className="fw-bold text-purple-600 rubik pl-5">
                  {user.firstName} {user.lastName}
                  </span>
              : null 
              ))
              
              
              }
              
            </div>
            <div className="flex pl-96">
              <span>
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
              <span>
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
            </div>
          </div>
          <div name="comentarios" className="">
            <p className="text-purple-600 py-3 pl-5 fw-bold">
              {props.comment.commentary}
            </p>
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
