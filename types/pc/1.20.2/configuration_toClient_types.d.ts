export interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

export interface packet_disconnect {
    reason: string;
}

export interface packet_finish_configuration {
}

export interface packet_keep_alive {
    keepAliveId: i64;
}

export interface packet_ping {
    id: i32;
}

export interface packet_registry_data {
    codec: anonymousNbt;
}

export interface packet_resource_pack_send {
    url: string;
    hash: string;
    forced: bool;
    promptMessage?: string;
}

export interface packet_feature_flags {
    features: string[];
}

export interface packet_tags {
    tags: {
    tagType: string;
    tags: tags;
}

}

export interface packet {
    name: packet_name_7;
    params: packet_custom_payload | packet_disconnect | packet_finish_configuration | packet_keep_alive | packet_ping | packet_registry_data | packet_resource_pack_send | packet_feature_flags | packet_tags ;
}