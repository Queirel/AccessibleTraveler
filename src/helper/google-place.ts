const key = 'AIzaSyARzhJXy7VYFW_MJ16-J55rS8REHWwc7c0';
const inputtype = 'textquery';

export async function googlePlaceGetId(body) {
  try {
    const response1 = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=${inputtype}&input=${body.address}&key=${key}`,
    );
    if (!response1.ok) {
      throw new Error('Hubo un problema al realizar la primera solicitud.');
    }
    const id = await response1.json();
    const placeid = id.candidates[0].place_id;

    const response2 = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&fields=name%2Cformatted_address%2Cgeometry&key=${key}`,
    );
    if (!response2.ok) {
      throw new Error('Hubo un problema al realizar la segunda solicitud.');
    }
    const data = await response2.json();

    return {
      lat: data.result.geometry.location.lat,
      long: data.result.geometry.location.lng,
    };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function googlePlaceGetById(body) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${body.placeid}&fields=name%2Cformatted_address%2Cgeometry&key=${key}`,
    );
    if (!response.ok) {
      throw new Error('Hubo un problema al realizar la segunda solicitud.');
    }
    const data = await response.json();
    console.log(data);

    return {
      lat: data.result.geometry.location.lat,
      long: data.result.geometry.location.lng,
      name: data.result.formatted_address
    };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
