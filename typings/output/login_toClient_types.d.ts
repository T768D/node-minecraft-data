interface packet_disconnect {
    reason: string;
}

interface packet_encryption_begin {
    serverId: string;
    publicKey: undefined;
    verifyToken: undefined;
    shouldAuthenticate: bool;
}

interface packet_success {
    uuid: UUID;
    username: string;
    properties: undefined;
}

interface packet_compress {
    threshold: varint;
}

interface packet_login_plugin_request {
    messageId: varint;
    channel: string;
    data: restBuffer;
}

interface packet {
    name: undefined;
    params: undefined;
}

