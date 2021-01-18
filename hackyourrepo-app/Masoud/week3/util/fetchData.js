export async function fetchData(url) {
  const Data = await fetch(url);
  return Data.json();

};