export interface packet_disconnect {
    reason: string;
}

export interface packet_encryption_begin {
    serverId: string;
    publicKey: Buffer;
    verifyToken: Buffer;
}

export interface packet_success {
    uuid: string;
    username: string;
}

export interface packet {
    name: packet_name_5;
    params: packet_disconnect | packet_encryption_begin | packet_success ;
}