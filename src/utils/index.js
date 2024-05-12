export const handleBookingAvailability = previousID =>{
  fetch(`${import.meta.env.VITE_API_URL}/rooms/${previousID}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({availability: "Yes"})
  })
    .then(res => res.json())
    .then(data => {
    console.log('Room availability Updated', data);
  })
}