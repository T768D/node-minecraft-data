export interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

export interface packet_finish_configuration {
}

export interface packet_keep_alive {
    keepAliveId: i64;
}

export interface packet_pong {
    id: i32;
}

export interface packet_resource_pack_receive {
    uuid: UUID;
    result: varint;
}

export interface packet {
    name: packet_name_8;
    params: packet_common_settings | packet_common_cookie_response | packet_custom_payload | packet_finish_configuration | packet_keep_alive | packet_pong | packet_resource_pack_receive | packet_common_select_known_packs ;
}