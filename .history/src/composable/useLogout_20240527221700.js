import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const logout = async () => {

  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.message);
  }
};

const useLogout = () => {
  return { logout };
};

export default useLogout;