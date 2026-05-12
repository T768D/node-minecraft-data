export interface packet_set_protocol {
    protocolVersion: varint;
    serverHost: string;
    serverPort: u16;
    nextState: varint;
}

export interface packet_legacy_server_list_ping {
    payload: u8;
}

export interface packet {
    name: packet_name_2;
    params: packet_set_protocol | packet_legacy_server_list_ping ;
}