export interface packet_player_identification {
    protocol_version: u8;
    username: string;
    verification_key: string;
    unused: i8;
}

export interface packet_set_block {
    x: i16;
    y: i16;
    z: i16;
    mode: u8;
    block_type: u8;
}

export interface packet_position {
    player_id: u8;
    x: i16;
    y: i16;
    z: i16;
    yaw: u8;
    pitch: u8;
}

export interface packet_message {
    unused: u8;
    message: string;
}

export interface packet {
    name: packet_name;
    params: packet_player_identification | packet_set_block | packet_position | packet_message ;
}