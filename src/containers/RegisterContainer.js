import { connect } from "react-redux";
import Register from "../components/Register.js";
import { setMessage, resetMessage, postRegister } from "../actions/userAction.js"



const mapDispatchProps = (dispatch) => ({
  
    setmessage: () => {
      dispatch(setMessage)
    },
    resetmessage: () => {
      dispatch(resetMessage)
    },
    postRegister: (values) => {
      dispatch(postRegister(values))
    } 

  
  

})

// export default RegisterContainer;

export default  connect(
  null,
  mapDispatchProps
)(Register)