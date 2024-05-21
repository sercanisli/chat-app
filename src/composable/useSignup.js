import { ref } from 'vue';
import { projectAuth } from "../firebase/config";

const error = ref(null);
const signup = async (email, password, displayName) => {
    error.value = null
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!response) {
            throw new Error("Could not complete the signup!")
        }
        console.log(response.user)
    } catch (err) {
        error.value = err.message;
    }
}


const useSignup = () => {
    return {error, signup}
}


export default useSignup;