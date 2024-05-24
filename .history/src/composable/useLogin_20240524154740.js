import { ref } from 'vue';
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
    error.value = null;

    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
        console.log(response);
        return response;
    } catch (err) {
        console.log(err.value);
        error.value = 'Incorrect email or password';
    }
}