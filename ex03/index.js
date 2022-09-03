function Hotel (name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

var batesHotel = new Hotel ('Bates', 40, 34);