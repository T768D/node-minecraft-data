interface packet_login_start {
    username: string;
    playerUUID: UUID;
}

interface packet_encryption_begin {
    sharedSecret: undefined;
    verifyToken: undefined;
}

interface packet_login_plugin_response {
    messageId: varint;
    data: undefined;
}

interface packet_login_acknowledged {
}

interface packet {
    name: undefined;
    params: undefined;
}

