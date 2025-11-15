import axios from axios;

export const classifyEmail = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/classify", formData);

    return response.data;
}