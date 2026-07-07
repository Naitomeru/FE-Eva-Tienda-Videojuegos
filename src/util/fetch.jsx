export async function loadData(path) {
    try {
        let response = await fetch(path);

        if (!response.ok) {
            console.log("HTTP Error: ", response.status);
            return;
        }

        let data = await response.json();
        return data;

    } catch (error) {
        console.log("Network error.");
    }
}
