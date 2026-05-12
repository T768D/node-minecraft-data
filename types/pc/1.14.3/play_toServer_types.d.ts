export interface packet_teleport_confirm {
    teleportId: varint;
}

export interface packet_query_block_nbt {
    transactionId: varint;
    location: position;
}

export interface packet_set_difficulty {
    newDifficulty: u8;
}

export interface packet_edit_book {
    new_book: slot;
    signing: bool;
    hand: varint;
}

export interface packet_query_entity_nbt {
    transactionId: varint;
    entityId: varint;
}

export interface packet_pick_item {
    slot: varint;
}

export interface packet_name_item {
    name: string;
}

export interface packet_select_trade {
    slot: varint;
}

export interface packet_set_beacon_effect {
    primary_effect: varint;
    secondary_effect: varint;
}

export interface packet_update_command_block {
    location: position;
    command: string;
    mode: varint;
    flags: u8;
}

export interface packet_update_command_block_minecart {
    entityId: varint;
    command: string;
    track_output: bool;
}

export interface packet_update_structure_block {
    location: position;
    action: varint;
    mode: varint;
    name: string;
    offset_x: i8;
    offset_y: i8;
    offset_z: i8;
    size_x: i8;
    size_y: i8;
    size_z: i8;
    mirror: varint;
    rotation: varint;
    metadata: string;
    integrity: f32;
    seed: varlong;
    flags: u8;
}

export interface packet_tab_complete {
    transactionId: varint;
    text: string;
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
    keepAliveId: i64;
}

export interface packet_lock_difficulty {
    locked: bool;
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

export interface packet_craft_recipe_request {
    windowId: i8;
    recipe: string;
    makeAll: bool;
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
    type: varint;
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

export interface packet_update_jigsaw_block {
    location: position;
    attachmentType: string;
    targetPool: string;
    finalState: string;
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
    hand: varint;
    location: position;
    direction: varint;
    cursorX: f32;
    cursorY: f32;
    cursorZ: f32;
    insideBlock: bool;
}

export interface packet_use_item {
    hand: varint;
}

export interface packet_advancement_tab {
    action: varint;
    tabId: string | undefined ;
}

export interface packet {
    name: packet_name_8;
    params: packet_teleport_confirm | packet_query_block_nbt | packet_set_difficulty | packet_edit_book | packet_query_entity_nbt | packet_pick_item | packet_name_item | packet_select_trade | packet_set_beacon_effect | packet_update_command_block | packet_update_command_block_minecart | packet_update_structure_block | packet_tab_complete | packet_chat | packet_client_command | packet_settings | packet_transaction | packet_enchant_item | packet_window_click | packet_close_window | packet_custom_payload | packet_use_entity | packet_keep_alive | packet_lock_difficulty | packet_position | packet_position_look | packet_look | packet_flying | packet_vehicle_move | packet_steer_boat | packet_craft_recipe_request | packet_abilities | packet_block_dig | packet_entity_action | packet_steer_vehicle | packet_crafting_book_data | packet_resource_pack_receive | packet_held_item_slot | packet_set_creative_slot | packet_update_jigsaw_block | packet_update_sign | packet_arm_animation | packet_spectate | packet_block_place | packet_use_item | packet_advancement_tab ;
}