export interface packet_teleport_confirm {
    teleportId: varint;
}

export interface packet_prepare_crafting_grid {
    windowId: u8;
    actionNumber: u16;
    returnEntry: {
    item: slot;
    craftingSlot: u8;
    playerSlot: u8;
};
    prepareEntry: {
    item: slot;
    craftingSlot: u8;
    playerSlot: u8;
};
}

export interface packet_tab_complete {
    text: string;
    assumeCommand: bool;
    lookedAtBlock?: position;
}

export interface packet_chat {
    message: string;
}

export interface packet_client_command {
    actionId: varint;
}

export interface packet_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: varint;
    chatColors: bool;
    skinParts: u8;
    mainHand: varint;
}

export interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
}

export interface packet_enchant_item {
    windowId: i8;
    enchantment: i8;
}

export interface packet_window_click {
    windowId: u8;
    slot: i16;
    mouseButton: i8;
    action: i16;
    mode: i8;
    item: slot;
}

export interface packet_close_window {
    windowId: u8;
}

export interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

export interface packet_use_entity {
    target: varint;
    mouse: varint;
    x: f32 | undefined ;
    y: f32 | undefined ;
    z: f32 | undefined ;
    hand: varint | undefined ;
}

export interface packet_keep_alive {
    keepAliveId: varint;
}

export interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    onGround: bool;
}

export interface packet_position_look {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

export interface packet_look {
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

export interface packet_flying {
    onGround: bool;
}

export interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
}

export interface packet_steer_boat {
    leftPaddle: bool;
    rightPaddle: bool;
}

export interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
}

export interface packet_block_dig {
    status: varint;
    location: position;
    face: i8;
}

export interface packet_entity_action {
    entityId: varint;
    actionId: varint;
    jumpBoost: varint;
}

export interface packet_steer_vehicle {
    sideways: f32;
    forward: f32;
    jump: u8;
}

export interface packet_crafting_book_data {
    type: i32;
}

export interface packet_resource_pack_receive {
    result: varint;
}

export interface packet_held_item_slot {
    slotId: i16;
}

export interface packet_set_creative_slot {
    slot: i16;
    item: slot;
}

export interface packet_update_sign {
    location: position;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

export interface packet_arm_animation {
    hand: varint;
}

export interface packet_spectate {
    target: UUID;
}

export interface packet_block_place {
    location: position;
    direction: varint;
    hand: varint;
    cursorX: f32;
    cursorY: f32;
    cursorZ: f32;
}

export interface packet_use_item {
    hand: varint;
}

export interface packet {
    name: packet_name_8;
    params: packet_teleport_confirm | packet_prepare_crafting_grid | packet_tab_complete | packet_chat | packet_client_command | packet_settings | packet_transaction | packet_enchant_item | packet_window_click | packet_close_window | packet_custom_payload | packet_use_entity | packet_keep_alive | packet_position | packet_position_look | packet_look | packet_flying | packet_vehicle_move | packet_steer_boat | packet_abilities | packet_block_dig | packet_entity_action | packet_steer_vehicle | packet_crafting_book_data | packet_resource_pack_receive | packet_held_item_slot | packet_set_creative_slot | packet_update_sign | packet_arm_animation | packet_spectate | packet_block_place | packet_use_item ;
}