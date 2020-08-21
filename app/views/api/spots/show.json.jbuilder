json.spot do 
    json.extract! @spot, :id, :name, :spot_type, :park, :host_id, :description, :lat, :lng, :price_per_night, :minimum_nights, :maximum_occupancy, :nearby_attractions, :bring_your_own_tents, :sites, :guests_per_site, :park_at_listing, :ada_access, :toilet_available, :campfires, :picnic_table_available, :potable_water, :kitchen, :showers, :wifi, :bins_available, :laundry, :electrical_hookup, :water_hookup, :generator_allowed, :sewage_hookup, :tv_hookup, :pull_in_site, :surface_type, :max_length, :surface_levelness, :slideouts, :lodging_type, :biking, :hiking, :boating, :fishing, :paddling, :swimming, :snow_sports, :wildlife_watching, :climbing, :horseback_riding, :off_roading, :mountainous, :forest, :desert, :coastal, :weather, :elevation, :distance, :check_in_details, :check_out_details, :cancellation_policy, :on_arrival, :booking_acceptance     
end 

json.host do 
    json.partial! "api/users/user", user: @spot.host
end 