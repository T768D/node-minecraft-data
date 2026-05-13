export interface packet_teleport_confirm {
    teleportId: varint;
}

export interface packet_query_block_nbt {
    transactionId: varint;
    location: position;
}

export interface packet_select_bundle_item {
    slotId: varint;
    selectedItemIndex: varint;
}

export interface packet_set_difficulty {
    newDifficulty: packet_set_difficulty_newDifficulty;
}

export interface packet_change_gamemode {
    mode: packet_change_gamemode_mode;
}

export interface packet_message_acknowledgement {
    count: varint;
}

export interface packet_chat_command {
    command: string;
}

export interface packet_chat_command_signed {
    command: string;
    timestamp: i64;
    salt: i64;
    argumentSignatures: {
    argumentName: string;
    signature: Buffer;
};
    messageCount: varint;
    acknowledged: Buffer;
    checksum: i8;
}

export interface packet_chat_message {
    message: string;
    timestamp: i64;
    salt: i64;
    signature?: Buffer;
    offset: varint;
    acknowledged: Buffer;
    checksum: i8;
}

export interface packet_chat_session_update {
    sessionUUID: UUID;
    expireTime: i64;
    publicKey: ByteArray;
    signature: ByteArray;
}

export interface packet_chunk_batch_received {
    chunksPerTick: f32;
}

export interface packet_client_command {
    actionId: varint;
}

export interface packet_tick_end {
}

export interface packet_tab_complete {
    transactionId: varint;
    text: string;
}

export interface packet_configuration_acknowledged {
}

export interface packet_enchant_item {
    windowId: ContainerID;
    enchantment: i8;
}

export interface packet_window_click {
    windowId: ContainerID;
    stateId: varint;
    slot: i16;
    mouseButton: i8;
    mode: varint;
    changedSlots: {
    location: i16;
    item?: HashedSlot;
};
    cursorItem?: HashedSlot;
}

export interface packet_close_window {
    windowId: ContainerID;
}

export interface packet_set_slot_state {
    slot_id: varint;
    window_id: ContainerID;
    state: bool;
}

export interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

export interface packet_debug_sample_subscription {
    type: varint;
}

export interface packet_edit_book {
    hand: varint;
    pages: string[];
    title?: string;
}

export interface packet_query_entity_nbt {
    transactionId: varint;
    entityId: varint;
}

export interface packet_use_entity {
    target: varint;
    mouse: varint;
    x: f32 | undefined ;
    y: f32 | undefined ;
    z: f32 | undefined ;
    hand: varint | undefined ;
    sneaking: bool;
}

export interface packet_generate_structure {
    location: position;
    levels: varint;
    keepJigsaws: bool;
}

export interface packet_keep_alive {
    keepAliveId: i64;
}

export interface packet_lock_difficulty {
    locked: bool;
}

/**
 * Combine values from {@link MovementFlags_bitflags} using bitwise OR.
 * @example
 * ```ts
 *   const abc = MovementFlags_bitflags.a | MovementFlags_bitflags.b | MovementFlags_bitflags.c;
 * ```
 *
 * Check if value contains data using bitwise AND:
 * @example 
 * ```ts
 *   // This checks if the variable contains something and something2
 *   const containsSomething = (value & (MovementFlags_bitflags.something | MovementFlags_bitflags.something2)) !== 0;
 * ```
*/
export type MovementFlags = MovementFlags_bitflags;


export interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    flags: MovementFlags;
}

export interface packet_position_look {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    flags: MovementFlags;
}

export interface packet_look {
    yaw: f32;
    pitch: f32;
    flags: MovementFlags;
}

export interface packet_flying {
    flags: MovementFlags;
}

export interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

export interface packet_steer_boat {
    leftPaddle: bool;
    rightPaddle: bool;
}

export interface packet_pick_item_from_block {
    position: position;
    includeData: bool;
}

export interface packet_pick_item_from_entity {
    entityId: varint;
    includeData: bool;
}

export interface packet_ping_request {
    id: i64;
}

export interface packet_craft_recipe_request {
    windowId: ContainerID;
    recipeId: varint;
    makeAll: bool;
}

export interface packet_abilities {
    flags: i8;
}

export interface packet_block_dig {
    status: varint;
    location: position;
    face: i8;
    sequence: varint;
}

export interface packet_entity_action {
    entityId: varint;
    actionId: packet_entity_action_actionId;
    jumpBoost: varint;
}

export interface packet_player_input {
    /**
     * Combine values from {@link packet_player_input_inputs_bitflags} using bitwise OR.
     * @example
     * ```ts
     *   const abc = packet_player_input_inputs_bitflags.a | packet_player_input_inputs_bitflags.b | packet_player_input_inputs_bitflags.c;
     * ```
     *
     * Check if value contains data using bitwise AND:
     * @example 
     * ```ts
     *   // This checks if the variable contains something and something2
     *   const containsSomething = (value & (packet_player_input_inputs_bitflags.something | packet_player_input_inputs_bitflags.something2)) !== 0;
     * ```
    */
    inputs: packet_player_input_inputs_bitflags;
}

export interface packet_player_loaded {
}

export interface packet_pong {
    id: i32;
}

export interface packet_recipe_book {
    bookId: varint;
    bookOpen: bool;
    filterActive: bool;
}

export interface packet_displayed_recipe {
    recipeId: varint;
}

export interface packet_name_item {
    name: string;
}

export interface packet_resource_pack_receive {
    uuid: UUID;
    result: varint;
}

export interface packet_advancement_tab {
    action: varint;
    tabId: string | undefined ;
}

export interface packet_select_trade {
    slot: varint;
}

export interface packet_set_beacon_effect {
    primary_effect?: varint;
    secondary_effect?: varint;
}

export interface packet_held_item_slot {
    slotId: i16;
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

export interface packet_set_creative_slot {
    slot: i16;
    item: UntrustedSlot;
}

export interface packet_update_jigsaw_block {
    location: position;
    name: string;
    target: string;
    pool: string;
    finalState: string;
    jointType: string;
    selection_priority: varint;
    placement_priority: varint;
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
    seed: varint;
    flags: packet_update_structure_block_flags;
}

export interface packet_set_test_block {
    position: position;
    mode: varint;
    message: string;
}

export interface packet_update_sign {
    location: position;
    isFrontText: bool;
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

export interface packet_test_instance_block_action {
    pos: position;
    action: varint;
    data: {
    test?: string;
    size: vec3i;
    rotation: varint;
    ignoreEntities: bool;
    status: varint;
    errorMessage?: anonymousNbt;
};
}

export interface packet_block_place {
    hand: varint;
    location: position;
    direction: varint;
    cursorX: f32;
    cursorY: f32;
    cursorZ: f32;
    insideBlock: bool;
    worldBorderHit: bool;
    sequence: varint;
}

export interface packet_use_item {
    hand: varint;
    sequence: varint;
    rotation: vec2f;
}

export interface packet {
    name: packet_name_10;
    params: packet_teleport_confirm | packet_query_block_nbt | packet_select_bundle_item | packet_set_difficulty | packet_change_gamemode | packet_message_acknowledgement | packet_chat_command | packet_chat_command_signed | packet_chat_message | packet_chat_session_update | packet_chunk_batch_received | packet_client_command | packet_tick_end | packet_common_settings | packet_tab_complete | packet_configuration_acknowledged | packet_enchant_item | packet_window_click | packet_close_window | packet_set_slot_state | packet_common_cookie_response | packet_custom_payload | packet_debug_sample_subscription | packet_edit_book | packet_query_entity_nbt | packet_use_entity | packet_generate_structure | packet_keep_alive | packet_lock_difficulty | packet_position | packet_position_look | packet_look | packet_flying | packet_vehicle_move | packet_steer_boat | packet_pick_item_from_block | packet_pick_item_from_entity | packet_ping_request | packet_craft_recipe_request | packet_abilities | packet_block_dig | packet_entity_action | packet_player_input | packet_player_loaded | packet_pong | packet_recipe_book | packet_displayed_recipe | packet_name_item | packet_resource_pack_receive | packet_advancement_tab | packet_select_trade | packet_set_beacon_effect | packet_held_item_slot | packet_update_command_block | packet_update_command_block_minecart | packet_set_creative_slot | packet_update_jigsaw_block | packet_update_structure_block | packet_set_test_block | packet_update_sign | packet_arm_animation | packet_spectate | packet_test_instance_block_action | packet_block_place | packet_use_item | packet_common_custom_click_action ;
}