export default class Cv {
    async getData() {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/files/cv_es.json`);
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error fetching JSON data:', error);
            throw error;
        }
    }
}