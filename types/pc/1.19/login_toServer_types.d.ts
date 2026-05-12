export interface packet_login_start {
    username: string;
    signature?: {
    timestamp: i64;
    // Unimplemented value
    publicKey: unknown;
    // Unimplemented value
    signature: unknown;
}

}

export interface packet_encryption_begin {
    // Unimplemented value
    sharedSecret: unknown;
    hasVerifyToken: bool;
    crypto:   | 
{
    // Unimplemented value
    verifyToken: unknown;
} | 
{
    salt: i64;
    // Unimplemented value
    messageSignature: unknown;
};
}

export interface packet_login_plugin_response {
    messageId: varint;
    data?: restBuffer;
}

export interface packet {
    name: packet_name_6;
    params: packet_login_start | packet_encryption_begin | packet_login_plugin_response ;
}