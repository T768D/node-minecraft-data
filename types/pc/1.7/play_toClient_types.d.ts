export interface packet_keep_alive {
    keepAliveId: i32;
}

export interface packet_login {
    entityId: i32;
    gameMode: u8;
    dimension: i8;
    difficulty: u8;
    maxPlayers: u8;
    levelType: string;
}

export interface packet_chat {
    message: string;
}

export interface packet_update_time {
    age: i64;
    time: i64;
}

export interface packet_entity_equipment {
    entityId: i32;
    slot: i16;
    item: slot;
}

export interface packet_spawn_position {
    location: position_iii;
}

export interface packet_update_health {
    health: f32;
    food: i16;
    foodSaturation: f32;
}

export interface packet_respawn {
    dimension: i32;
    difficulty: u8;
    gamemode: u8;
    levelType: string;
}

export interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

export interface packet_held_item_slot {
    slot: i8;
}

export interface packet_bed {
    entityId: i32;
    location: position_ibi;
}

export interface packet_animation {
    entityId: varint;
    animation: u8;
}

export interface packet_named_entity_spawn {
    entityId: varint;
    playerUUID: string;
    playerName: string;
    data: {
    name: string;
    value: string;
    signature: string;
}

    x: i32;
    y: i32;
    z: i32;
    yaw: i8;
    pitch: i8;
    currentItem: i16;
    metadata: entityMetadata;
}

export interface packet_collect {
    collectedEntityId: i32;
    collectorEntityId: i32;
}

export interface packet_spawn_entity {
    entityId: varint;
    type: i8;
    x: i32;
    y: i32;
    z: i32;
    pitch: i8;
    yaw: i8;
    objectData: {
    intField: i32;
    velocityX: undefined | i16 ;
    velocityY: undefined | i16 ;
    velocityZ: undefined | i16 ;
}

}

export interface packet_spawn_entity_living {
    entityId: varint;
    type: u8;
    x: i32;
    y: i32;
    z: i32;
    yaw: i8;
    pitch: i8;
    headPitch: i8;
    velocity: vec3i16;
    metadata: entityMetadata;
}

export interface packet_spawn_entity_painting {
    entityId: varint;
    title: string;
    location: position_iii;
    direction: i32;
}

export interface packet_spawn_entity_experience_orb {
    entityId: varint;
    x: i32;
    y: i32;
    z: i32;
    count: i16;
}

export interface packet_entity_velocity {
    entityId: i32;
    velocity: vec3i16;
}

export interface packet_entity_destroy {
    entityIds: i32[];
}

export interface packet_entity {
    entityId: i32;
}

export interface packet_rel_entity_move {
    entityId: i32;
    dX: i8;
    dY: i8;
    dZ: i8;
}

export interface packet_entity_look {
    entityId: i32;
    yaw: i8;
    pitch: i8;
}

export interface packet_entity_move_look {
    entityId: i32;
    dX: i8;
    dY: i8;
    dZ: i8;
    yaw: i8;
    pitch: i8;
}

export interface packet_entity_teleport {
    entityId: i32;
    x: i32;
    y: i32;
    z: i32;
    yaw: i8;
    pitch: i8;
}

export interface packet_entity_head_rotation {
    entityId: i32;
    headYaw: i8;
}

export interface packet_entity_status {
    entityId: i32;
    entityStatus: i8;
}

export interface packet_attach_entity {
    entityId: i32;
    vehicleId: i32;
    leash: bool;
}

export interface packet_entity_metadata {
    entityId: i32;
    metadata: entityMetadata;
}

export interface packet_entity_effect {
    entityId: i32;
    effectId: i8;
    amplifier: i8;
    duration: i16;
}

export interface packet_remove_entity_effect {
    entityId: i32;
    effectId: i8;
}

export interface packet_experience {
    experienceBar: f32;
    level: i16;
    totalExperience: i16;
}

export interface packet_update_attributes {
    entityId: i32;
    properties: {
    key: string;
    value: f64;
    modifiers: {
    uuid: UUID;
    amount: f64;
    operation: i8;
}

}

}

export interface packet_map_chunk {
    x: i32;
    z: i32;
    groundUp: bool;
    bitMap: u16;
    addBitMap: u16;
    compressedChunkData: Buffer;
}

export interface packet_multi_block_change {
    chunkX: i32;
    chunkZ: i32;
    // Unimplemented value
    recordCount: unknown;
    dataLength: i32;
    records: {
    y: u8;
}

}

export interface packet_block_change {
    location: position_ibi;
    type: varint;
    metadata: u8;
}

export interface packet_block_action {
    location: position_isi;
    byte1: u8;
    byte2: u8;
    blockId: varint;
}

export interface packet_block_break_animation {
    entityId: varint;
    location: position_iii;
    destroyStage: i8;
}

export interface packet_map_chunk_bulk {
    // Unimplemented value
    chunkColumnCount: unknown;
    // Unimplemented value
    dataLength: unknown;
    skyLightSent: bool;
    // Count: dataLength
    compressedChunkData: Buffer;
    meta: {
    x: i32;
    z: i32;
    bitMap: u16;
    addBitMap: u16;
}

}

export interface packet_explosion {
    x: f32;
    y: f32;
    z: f32;
    radius: f32;
    affectedBlockOffsets: {
    x: i8;
    y: i8;
    z: i8;
}

    playerMotionX: f32;
    playerMotionY: f32;
    playerMotionZ: f32;
}

export interface packet_world_event {
    effectId: i32;
    location: position_ibi;
    data: i32;
    global: bool;
}

export interface packet_named_sound_effect {
    soundName: string;
    x: i32;
    y: i32;
    z: i32;
    volume: f32;
    pitch: u8;
}

export interface packet_world_particles {
    particleName: string;
    x: f32;
    y: f32;
    z: f32;
    offsetX: f32;
    offsetY: f32;
    offsetZ: f32;
    particleData: f32;
    particles: i32;
}

export interface packet_game_state_change {
    reason: u8;
    gameMode: f32;
}

export interface packet_spawn_entity_weather {
    entityId: varint;
    type: i8;
    x: i32;
    y: i32;
    z: i32;
}

export interface packet_open_window {
    windowId: u8;
    inventoryType: u8;
    windowTitle: string;
    slotCount: u8;
    useProvidedTitle: bool;
    entityId: i32 | undefined ;
}

export interface packet_close_window {
    windowId: u8;
}

export interface packet_set_slot {
    windowId: i8;
    slot: i16;
    item: slot;
}

export interface packet_window_items {
    windowId: u8;
    items: slot[];
}

export interface packet_craft_progress_bar {
    windowId: u8;
    property: i16;
    value: i16;
}

export interface packet_transaction {
    windowId: u8;
    action: i16;
    accepted: bool;
}

export interface packet_update_sign {
    location: position_isi;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

export interface packet_map {
    itemDamage: varint;
    data: Buffer;
}

export interface packet_tile_entity_data {
    location: position_isi;
    action: u8;
    nbtData: compressedNbt;
}

export interface packet_open_sign_entity {
    location: position_iii;
}

export interface packet_statistics {
    entries: {
    name: string;
    value: varint;
}

}

export interface packet_player_info {
    playerName: string;
    online: bool;
    ping: i16;
}

export interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
}

export interface packet_tab_complete {
    matches: string[];
}

export interface packet_scoreboard_objective {
    name: string;
    displayText: string;
    action: i8;
}

export interface packet_scoreboard_score {
    itemName: string;
    action: i8;
    scoreName: undefined | string ;
    value: undefined | i32 ;
}

export interface packet_scoreboard_display_objective {
    position: i8;
    name: string;
}

export interface packet_scoreboard_team {
    team: string;
    mode: i8;
    name: string | undefined ;
    prefix: string | undefined ;
    suffix: string | undefined ;
    friendlyFire: i8 | undefined ;
    players: undefined ;
}

export interface packet_custom_payload {
    channel: string;
    data: Buffer;
}

export interface packet_kick_disconnect {
    reason: string;
}

export interface packet {
    name: packet_name_7;
    params: packet_keep_alive | packet_login | packet_chat | packet_update_time | packet_entity_equipment | packet_spawn_position | packet_update_health | packet_respawn | packet_position | packet_held_item_slot | packet_bed | packet_animation | packet_named_entity_spawn | packet_collect | packet_spawn_entity | packet_spawn_entity_living | packet_spawn_entity_painting | packet_spawn_entity_experience_orb | packet_entity_velocity | packet_entity_destroy | packet_entity | packet_rel_entity_move | packet_entity_look | packet_entity_move_look | packet_entity_teleport | packet_entity_head_rotation | packet_entity_status | packet_attach_entity | packet_entity_metadata | packet_entity_effect | packet_remove_entity_effect | packet_experience | packet_update_attributes | packet_map_chunk | packet_multi_block_change | packet_block_change | packet_block_action | packet_block_break_animation | packet_map_chunk_bulk | packet_explosion | packet_world_event | packet_named_sound_effect | packet_world_particles | packet_game_state_change | packet_spawn_entity_weather | packet_open_window | packet_close_window | packet_set_slot | packet_window_items | packet_craft_progress_bar | packet_transaction | packet_update_sign | packet_map | packet_tile_entity_data | packet_open_sign_entity | packet_statistics | packet_player_info | packet_abilities | packet_tab_complete | packet_scoreboard_objective | packet_scoreboard_score | packet_scoreboard_display_objective | packet_scoreboard_team | packet_custom_payload | packet_kick_disconnect ;
}