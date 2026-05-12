export interface packet_ping_start {
}

export interface packet_ping {
    time: i64;
}

export interface packet {
    name: packet_name_4;
    params: packet_ping_start | packet_ping ;
}