export interface packet_login_start {
    username: string;
}

export interface packet_encryption_begin {
    // Unimplemented value
    sharedSecret: unknown;
    // Unimplemented value
    verifyToken: unknown;
}

export interface packet {
    name: packet_name_6;
    params: packet_login_start | packet_encryption_begin ;
}