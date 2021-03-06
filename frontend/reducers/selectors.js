export const selectSpotHost = (state, spot) => {
    return spot ? state.entities.users[spot.host_id] : {}
} 

export const selectBookingSpot = (state, booking) => {
    return booking ? state.entities.spots[booking.spot_id] : {}
} 

export const selectReviewSpot = (state, review) => {
    return review ? state.entities.spots[review.spot_id] : {}
} 
