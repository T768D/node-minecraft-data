interface packet_ping_start {
}

interface packet_ping {
    time: i64;
}

interface packet {
    name: packet_name_4;
    params: packet_ping_start | packet_ping ;
}