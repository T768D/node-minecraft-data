export interface packet_keep_alive {
    keepAliveId: i32;
}

export interface packet_chat {
    message: string;
}

export interface packet_use_entity {
    target: i32;
    mouse: i8;
    x: f32 | undefined ;
    y: f32 | undefined ;
    z: f32 | undefined ;
}

export interface packet_flying {
    onGround: bool;
}

export interface packet_position {
    x: f64;
    stance: f64;
    y: f64;
    z: f64;
    onGround: bool;
}

export interface packet_look {
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

export interface packet_position_look {
    x: f64;
    stance: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

export interface packet_block_dig {
    status: i8;
    location: position_ibi;
    face: i8;
}

export interface packet_block_place {
    location: position_ibi;
    direction: i8;
    heldItem: slot;
    cursorX: i8;
    cursorY: i8;
    cursorZ: i8;
}

export interface packet_held_item_slot {
    slotId: i16;
}

export interface packet_arm_animation {
    entityId: i32;
    animation: i8;
}

export interface packet_entity_action {
    entityId: i32;
    actionId: i8;
    jumpBoost: i32;
}

export interface packet_steer_vehicle {
    sideways: f32;
    forward: f32;
    jump: bool;
    unmount: bool;
}

export interface packet_close_window {
    windowId: u8;
}

export interface packet_window_click {
    windowId: i8;
    slot: i16;
    mouseButton: i8;
    action: i16;
    mode: i8;
    item: slot;
}

export interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
}

export interface packet_set_creative_slot {
    slot: i16;
    item: slot;
}

export interface packet_enchant_item {
    windowId: i8;
    enchantment: i8;
}

export interface packet_update_sign {
    location: position_isi;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

export interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
}

export interface packet_tab_complete {
    text: string;
}

export interface packet_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: i8;
    chatColors: bool;
    difficulty: u8;
    showCape: bool;
}

export interface packet_client_command {
    payload: i8;
}

export interface packet_custom_payload {
    channel: string;
    data: Buffer;
}

export interface packet {
    name: packet_name_8;
    params: packet_keep_alive | packet_chat | packet_use_entity | packet_flying | packet_position | packet_look | packet_position_look | packet_block_dig | packet_block_place | packet_held_item_slot | packet_arm_animation | packet_entity_action | packet_steer_vehicle | packet_close_window | packet_window_click | packet_transaction | packet_set_creative_slot | packet_enchant_item | packet_update_sign | packet_abilities | packet_tab_complete | packet_settings | packet_client_command | packet_custom_payload ;
}