interface packet_set_protocol {
    protocolVersion: varint;
    serverHost: string;
    serverPort: u16;
    nextState: varint;
}

interface packet_legacy_server_list_ping {
    payload: u8;
}

interface packet {
    name: packet_name
}

