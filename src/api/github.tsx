const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN

const fetchData = async (body: any) => {
    try {
        const data = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const result = await data.json();
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default fetchData;
