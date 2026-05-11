interface packet_teleport_confirm {
    teleportId: varint;
}

interface packet_query_block_nbt {
    transactionId: varint;
    location: position;
}

interface packet_select_bundle_item {
    slotId: varint;
    selectedItemIndex: varint;
}

interface packet_set_difficulty {
    newDifficulty: packet_set_difficulty_newDifficulty;
}

interface packet_change_gamemode {
    mode: packet_change_gamemode_mode;
}

interface packet_message_acknowledgement {
    count: varint;
}

interface packet_chat_command {
    command: string;
}

interface packet_chat_command_signed {
    command: string;
    timestamp: i64;
    salt: i64;
    messageCount: varint;
    checksum: i8;
}

interface packet_chat_message {
    message: string;
    timestamp: i64;
    salt: i64;
    offset: varint;
    checksum: u8;
}

interface packet_chat_session_update {
    sessionUUID: UUID;
    expireTime: i64;
    publicKey: ByteArray;
    signature: ByteArray;
}

interface packet_chunk_batch_received {
    chunksPerTick: f32;
}

interface packet_client_command {
    actionId: varint;
}

interface packet_tick_end {
}

interface packet_tab_complete {
    transactionId: varint;
    text: string;
}

interface packet_configuration_acknowledged {
}

interface packet_enchant_item {
    windowId: ContainerID;
    enchantment: i8;
}

interface packet_window_click {
    windowId: ContainerID;
    stateId: varint;
    slot: i16;
    mouseButton: i8;
    mode: varint;
}

interface packet_close_window {
    windowId: ContainerID;
}

interface packet_set_slot_state {
    slot_id: varint;
    window_id: ContainerID;
    state: bool;
}

interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

interface packet_debug_subscription_request {
}

interface packet_edit_book {
    hand: varint;
}

interface packet_query_entity_nbt {
    transactionId: varint;
    entityId: varint;
}

interface packet_use_entity {
    target: varint;
    mouse: varint;
    sneaking: bool;
}

interface packet_generate_structure {
    location: position;
    levels: varint;
    keepJigsaws: bool;
}

interface packet_keep_alive {
    keepAliveId: i64;
}

interface packet_lock_difficulty {
    locked: bool;
}

interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    flags: MovementFlags;
}

interface packet_position_look {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    flags: MovementFlags;
}

interface packet_look {
    yaw: f32;
    pitch: f32;
    flags: MovementFlags;
}

interface packet_flying {
    flags: MovementFlags;
}

interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

interface packet_steer_boat {
    leftPaddle: bool;
    rightPaddle: bool;
}

interface packet_pick_item_from_block {
    position: position;
    includeData: bool;
}

interface packet_pick_item_from_entity {
    entityId: varint;
    includeData: bool;
}

interface packet_ping_request {
    id: i64;
}

interface packet_craft_recipe_request {
    windowId: ContainerID;
    recipeId: varint;
    makeAll: bool;
}

interface packet_abilities {
    flags: i8;
}

interface packet_block_dig {
    status: varint;
    location: position;
    face: i8;
    sequence: varint;
}

interface packet_entity_action {
    entityId: varint;
    actionId: packet_entity_action_actionId;
    jumpBoost: varint;
}

interface packet_player_input {
}

interface packet_player_loaded {
}

interface packet_pong {
    id: i32;
}

interface packet_recipe_book {
    bookId: varint;
    bookOpen: bool;
    filterActive: bool;
}

interface packet_displayed_recipe {
    recipeId: varint;
}

interface packet_name_item {
    name: string;
}

interface packet_resource_pack_receive {
    uuid: UUID;
    result: varint;
}

interface packet_advancement_tab {
    action: varint;
}

interface packet_select_trade {
    slot: varint;
}

interface packet_set_beacon_effect {
}

interface packet_held_item_slot {
    slotId: i16;
}

interface packet_update_command_block {
    location: position;
    command: string;
    mode: varint;
    flags: u8;
}

interface packet_update_command_block_minecart {
    entityId: varint;
    command: string;
    track_output: bool;
}

interface packet_set_creative_slot {
    slot: i16;
    item: UntrustedSlot;
}

interface packet_update_jigsaw_block {
    location: position;
    name: string;
    target: string;
    pool: string;
    finalState: string;
    jointType: string;
    selection_priority: varint;
    placement_priority: varint;
}

interface packet_update_structure_block {
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

interface packet_set_test_block {
    position: position;
    mode: varint;
    message: string;
}

interface packet_update_sign {
    location: position;
    isFrontText: bool;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

interface packet_arm_animation {
    hand: varint;
}

interface packet_spectate {
    target: UUID;
}

interface packet_test_instance_block_action {
    pos: position;
    action: varint;
    data: {
    size: vec3i;
    rotation: varint;
    ignoreEntities: bool;
    status: varint;
}

;}

interface packet_block_place {
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

interface packet_use_item {
    hand: varint;
    sequence: varint;
    rotation: vec2f;
}

interface packet {
    name: packet_name;
}

