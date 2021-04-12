import React from 'react'
import LocationCard from '../LocationCard/LocationCard'
function LocationSection() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="pb-5">Locations</h2>
            <div className="row justify-content-center">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            </div>
            
            </div>
            
        </section>
    )
}

export default LocationSection
