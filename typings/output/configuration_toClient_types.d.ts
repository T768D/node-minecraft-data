interface packet_code_of_conduct {
    contents: string;
}

interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

interface packet_disconnect {
    reason: anonymousNbt;
}

interface packet_finish_configuration {
}

interface packet_keep_alive {
    keepAliveId: i64;
}

interface packet_ping {
    id: i32;
}

interface packet_reset_chat {
}

interface packet_registry_data {
    id: string;
    entries: undefined;
}

interface packet_feature_flags {
    features: undefined;
}

interface packet_tags {
    tags: undefined;
}

interface packet_show_dialog {
    dialog: anonymousNbt;
}

interface packet {
    name: undefined;
    params: undefined;
}

