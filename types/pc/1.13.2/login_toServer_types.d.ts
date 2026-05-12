export interface packet_login_start {
    username: string;
}

export interface packet_encryption_begin {
    sharedSecret: Buffer;
    verifyToken: Buffer;
}

export interface packet_login_plugin_response {
    messageId: varint;
    data?: restBuffer;
}

export interface packet {
    name: packet_name_6;
    params: packet_login_start | packet_encryption_begin | packet_login_plugin_response ;
}