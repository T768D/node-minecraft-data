export interface packet_disconnect {
    reason: string;
}

export interface packet_encryption_begin {
    serverId: string;
    // Unimplemented value
    publicKey: unknown;
    // Unimplemented value
    verifyToken: unknown;
    shouldAuthenticate: bool;
}

export interface packet_success {
    uuid: UUID;
    username: string;
    properties: {
    name: string;
    value: string;
    signature?: string;
}

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
    params: packet_disconnect | packet_encryption_begin | packet_success | packet_compress | packet_login_plugin_request | packet_common_cookie_request ;
}