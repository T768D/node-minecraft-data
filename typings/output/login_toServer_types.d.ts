interface packet_login_start {
    username: string;
    playerUUID: UUID;
}

interface packet_encryption_begin {
    // Unimplemented value
    sharedSecret: unknown;
    // Unimplemented value
    verifyToken: unknown;
}

interface packet_login_plugin_response {
    messageId: varint;
    data?: restBuffer;
}

interface packet_login_acknowledged {
}

interface packet {
    name: packet_name_6;
    params: packet_login_start | packet_encryption_begin | packet_login_plugin_response | packet_login_acknowledged | packet_common_cookie_response ;
}