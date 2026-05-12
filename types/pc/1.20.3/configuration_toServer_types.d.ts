export interface packet_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: varint;
    chatColors: bool;
    skinParts: u8;
    mainHand: varint;
    enableTextFiltering: bool;
    enableServerListing: bool;
}

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
    params: packet_settings | packet_custom_payload | packet_finish_configuration | packet_keep_alive | packet_pong | packet_resource_pack_receive ;
}