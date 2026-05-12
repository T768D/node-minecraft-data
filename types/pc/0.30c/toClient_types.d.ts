export interface packet_server_identification {
    protocol_version: u8;
    server_name: string;
    server_motd: string;
    user_type: i8;
}

export interface packet_ping {
}

export interface packet_level_initialize {
}

export interface packet_level_data_chunk {
    chunk_data: byte_array;
    percent_complete: u8;
}

export interface packet_level_finalize {
    x_size: i16;
    y_size: i16;
    z_size: i16;
}

export interface packet_set_block {
    x: i16;
    y: i16;
    z: i16;
    block_type: u8;
}

export interface packet_spawn_player {
    player_id: i8;
    player_name: string;
    x: i16;
    y: i16;
    z: i16;
    yaw: u8;
    pitch: u8;
}

export interface packet_player_teleport {
    player_id: i8;
    x: i16;
    y: i16;
    z: i16;
    yaw: u8;
    pitch: u8;
}

export interface packet_position_and_orientation_update {
    player_id: i8;
    change_in_x: i8;
    change_in_y: i8;
    change_in_z: i8;
    yaw: i8;
    pitch: i8;
}

export interface packet_position_update {
    player_id: i8;
    change_in_x: i8;
    change_in_y: i8;
    change_in_z: i8;
}

export interface packet_orientation_update {
    player_id: i8;
    yaw: u8;
    pitch: u8;
}

export interface packet_despawn_player {
    player_id: i8;
}

export interface packet_message {
    player_id: i8;
    message: string;
}

export interface packet_disconnect_player {
    disconnect_reason: string;
}

export interface packet_update_user_type {
    user_type: u8;
}

export interface packet {
    name: packet_name_2;
    params: packet_server_identification | packet_ping | packet_level_initialize | packet_level_data_chunk | packet_level_finalize | packet_set_block | packet_spawn_player | packet_player_teleport | packet_position_and_orientation_update | packet_position_update | packet_orientation_update | packet_despawn_player | packet_message | packet_disconnect_player | packet_update_user_type ;
}