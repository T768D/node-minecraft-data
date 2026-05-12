export interface packet_login_start {
    username: string;
    signature?: {
    timestamp: i64;
    publicKey: Buffer;
    signature: Buffer;
}

}

export interface packet_encryption_begin {
    sharedSecret: Buffer;
    hasVerifyToken: bool;
    crypto:   | 
{
    verifyToken: Buffer;
} | 
{
    salt: i64;
    messageSignature: Buffer;
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