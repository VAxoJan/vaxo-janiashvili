const initData = async () => {
    const data = await fetch('./json.js').then(response => response.json());
    console.log(data.amount);
}