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
    name: undefined;
    params: undefined;
}

