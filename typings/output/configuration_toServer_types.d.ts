interface packet_accept_code_of_conduct {
}

interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

interface packet_finish_configuration {
}

interface packet_keep_alive {
    keepAliveId: i64;
}

interface packet_pong {
    id: i32;
}

interface packet_resource_pack_receive {
    uuid: UUID;
    result: varint;
}

interface packet {
    name: packet_name_8;
    params: packet_common_settings | 
packet_common_cookie_response | 
packet_custom_payload | 
packet_finish_configuration | 
packet_keep_alive | 
packet_pong | 
packet_resource_pack_receive | 
packet_common_select_known_packs | 
packet_common_custom_click_action | 
packet_accept_code_of_conduct}

