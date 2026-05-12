export interface packet_server_info {
    response: string;
}

export interface packet_ping {
    time: i64;
}

export interface packet {
    name: packet_name_3;
    params: packet_server_info | packet_ping ;
}