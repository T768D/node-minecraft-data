interface packet_login_start {
    username: string;
    playerUUID: UUID;
}

interface packet_encryption_begin {
}

interface packet_login_plugin_response {
    messageId: varint;
}

interface packet_login_acknowledged {
}

interface packet {
    name: packet_name_6;
}

