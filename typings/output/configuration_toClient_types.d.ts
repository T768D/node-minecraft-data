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
    entries: {
    key: string;
    value?: anonymousNbt;
}

}

interface packet_feature_flags {
    features: string[];
}

interface packet_tags {
    tags: {
    tagType: string;
    tags: tags;
}

}

interface packet_show_dialog {
    dialog: anonymousNbt;
}

interface packet {
    name: packet_name_7;
    params: packet_common_cookie_request | packet_custom_payload | packet_disconnect | packet_finish_configuration | packet_keep_alive | packet_ping | packet_reset_chat | packet_registry_data | packet_common_remove_resource_pack | packet_common_add_resource_pack | packet_common_store_cookie | packet_common_transfer | packet_feature_flags | packet_tags | packet_common_select_known_packs | packet_common_custom_report_details | packet_common_server_links | packet_common_clear_dialog | packet_show_dialog | packet_code_of_conduct ;
}

