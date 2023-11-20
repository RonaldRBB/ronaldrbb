class cv {
    static async getJsonData(filename: string) {
        try {
            const response = await fetch(`${(process.env as any).PUBLIC_URL}/${filename}`);
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error fetching JSON data:', error);
            throw error;
        }
    }
}

export default cv;