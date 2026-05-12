export interface packet_disconnect {
    reason: string;
}

export interface packet_encryption_begin {
    serverId: string;
    // Unimplemented value
    publicKey: unknown;
    // Unimplemented value
    verifyToken: unknown;
}

export interface packet_success {
    uuid: string;
    username: string;
}

export interface packet_compress {
    threshold: varint;
}

export interface packet_login_plugin_request {
    messageId: varint;
    channel: string;
    data: restBuffer;
}

export interface packet {
    name: packet_name_5;
    params: packet_disconnect | packet_encryption_begin | packet_success | packet_compress | packet_login_plugin_request ;
}