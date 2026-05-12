export interface packet_spawn_entity {
    entityId: varint;
    objectUUID: UUID;
    type: i8;
    x: f64;
    y: f64;
    z: f64;
    pitch: i8;
    yaw: i8;
    objectData: i32;
    velocity: vec3i16;
}

export interface packet_spawn_entity_experience_orb {
    entityId: varint;
    x: f64;
    y: f64;
    z: f64;
    count: i16;
}

export interface packet_spawn_entity_weather {
    entityId: varint;
    type: i8;
    x: f64;
    y: f64;
    z: f64;
}

export interface packet_spawn_entity_living {
    entityId: varint;
    entityUUID: UUID;
    type: u8;
    x: f64;
    y: f64;
    z: f64;
    yaw: i8;
    pitch: i8;
    headPitch: i8;
    velocity: vec3i16;
    metadata: entityMetadata;
}

export interface packet_spawn_entity_painting {
    entityId: varint;
    entityUUID: UUID;
    title: string;
    location: position;
    direction: u8;
}

export interface packet_named_entity_spawn {
    entityId: varint;
    playerUUID: UUID;
    x: f64;
    y: f64;
    z: f64;
    yaw: i8;
    pitch: i8;
    metadata: entityMetadata;
}

export interface packet_animation {
    entityId: varint;
    animation: u8;
}

export interface packet_statistics {
    entries: {
    name: string;
    value: varint;
}

}

export interface packet_block_break_animation {
    entityId: varint;
    location: position;
    destroyStage: i8;
}

export interface packet_tile_entity_data {
    location: position;
    action: u8;
    nbtData: optionalNbt;
}

export interface packet_block_action {
    location: position;
    byte1: u8;
    byte2: u8;
    blockId: varint;
}

export interface packet_block_change {
    location: position;
    type: varint;
}

export interface packet_boss_bar {
    entityUUID: UUID;
    action: varint;
    title: string | undefined ;
    health: f32 | undefined ;
    color: varint | undefined ;
    dividers: varint | undefined ;
    flags: u8 | undefined ;
}

export interface packet_difficulty {
    difficulty: u8;
}

export interface packet_tab_complete {
    matches: string[];
}

export interface packet_chat {
    message: string;
    position: i8;
}

export interface packet_multi_block_change {
    chunkX: i32;
    chunkZ: i32;
    records: {
    horizontalPos: u8;
    y: u8;
    blockId: varint;
}

}

export interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
}

export interface packet_close_window {
    windowId: u8;
}

export interface packet_open_window {
    windowId: u8;
    inventoryType: string;
    windowTitle: string;
    slotCount: u8;
    entityId: i32 | undefined ;
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

export interface packet_set_slot {
    windowId: i8;
    slot: i16;
    item: slot;
}

export interface packet_set_cooldown {
    itemID: varint;
    cooldownTicks: varint;
}

export interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

export interface packet_named_sound_effect {
    soundName: string;
    soundCategory: varint;
    x: i32;
    y: i32;
    z: i32;
    volume: f32;
    pitch: u8;
}

export interface packet_kick_disconnect {
    reason: string;
}

export interface packet_entity_status {
    entityId: i32;
    entityStatus: i8;
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

export interface packet_unload_chunk {
    chunkX: i32;
    chunkZ: i32;
}

export interface packet_game_state_change {
    reason: u8;
    gameMode: f32;
}

export interface packet_keep_alive {
    keepAliveId: varint;
}

export interface packet_map_chunk {
    x: i32;
    z: i32;
    groundUp: bool;
    bitMap: varint;
    // Unimplemented value
    chunkData: unknown;
}

export interface packet_world_event {
    effectId: i32;
    location: position;
    data: i32;
    global: bool;
}

export interface packet_world_particles {
    particleId: i32;
    longDistance: bool;
    x: f32;
    y: f32;
    z: f32;
    offsetX: f32;
    offsetY: f32;
    offsetZ: f32;
    particleData: f32;
    particles: i32;
    data: undefined ;
}

export interface packet_login {
    entityId: i32;
    gameMode: u8;
    dimension: i8;
    difficulty: u8;
    maxPlayers: u8;
    levelType: string;
    reducedDebugInfo: bool;
}

export interface packet_map {
    itemDamage: varint;
    scale: i8;
    trackingPosition: bool;
    icons: {
    directionAndType: i8;
    x: i8;
    z: i8;
}

    columns: i8;
    rows: undefined | i8 ;
    x: undefined | i8 ;
    y: undefined | i8 ;
    data: undefined ;
}

export interface packet_rel_entity_move {
    entityId: varint;
    dX: i16;
    dY: i16;
    dZ: i16;
    onGround: bool;
}

export interface packet_entity_move_look {
    entityId: varint;
    dX: i16;
    dY: i16;
    dZ: i16;
    yaw: i8;
    pitch: i8;
    onGround: bool;
}

export interface packet_entity_look {
    entityId: varint;
    yaw: i8;
    pitch: i8;
    onGround: bool;
}

export interface packet_entity {
    entityId: varint;
}

export interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
}

export interface packet_open_sign_entity {
    location: position;
}

export interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
}

export interface packet_combat_event {
    event: varint;
    duration: varint | undefined ;
    playerId: varint | undefined ;
    entityId: i32 | undefined ;
    message: string | undefined ;
}

export interface packet_player_info {
    action: packet_player_info_action;
    data: {
    uuid: UUID;
}

}

export interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    flags: i8;
    teleportId: varint;
}

export interface packet_bed {
    entityId: varint;
    location: position;
}

export interface packet_entity_destroy {
    entityIds: varint[];
}

export interface packet_remove_entity_effect {
    entityId: varint;
    effectId: i8;
}

export interface packet_resource_pack_send {
    url: string;
    hash: string;
}

export interface packet_respawn {
    dimension: i32;
    difficulty: u8;
    gamemode: u8;
    levelType: string;
}

export interface packet_entity_head_rotation {
    entityId: varint;
    headYaw: i8;
}

export interface packet_world_border {
    action: varint;
    radius: f64 | undefined ;
    x: f64 | undefined ;
    z: f64 | undefined ;
    old_radius: f64 | undefined ;
    new_radius: f64 | undefined ;
    speed: varlong | undefined ;
    portalBoundary: varint | undefined ;
    warning_time: varint | undefined ;
    warning_blocks: varint | undefined ;
}

export interface packet_camera {
    cameraId: varint;
}

export interface packet_held_item_slot {
    slot: i8;
}

export interface packet_scoreboard_display_objective {
    position: i8;
    name: string;
}

export interface packet_entity_metadata {
    entityId: varint;
    metadata: entityMetadata;
}

export interface packet_attach_entity {
    entityId: i32;
    vehicleId: i32;
}

export interface packet_entity_velocity {
    entityId: varint;
    velocity: vec3i16;
}

export interface packet_entity_equipment {
    entityId: varint;
    slot: varint;
    item: slot;
}

export interface packet_experience {
    experienceBar: f32;
    level: varint;
    totalExperience: varint;
}

export interface packet_update_health {
    health: f32;
    food: varint;
    foodSaturation: f32;
}

export interface packet_scoreboard_objective {
    name: string;
    action: i8;
    displayText: string | undefined ;
    type: string | undefined ;
}

export interface packet_set_passengers {
    entityId: varint;
    passengers: varint[];
}

export interface packet_teams {
    team: string;
    mode: i8;
    name: string | undefined ;
    prefix: string | undefined ;
    suffix: string | undefined ;
    friendlyFire: i8 | undefined ;
    nameTagVisibility: string | undefined ;
    collisionRule: string | undefined ;
    color: i8 | undefined ;
    players: undefined ;
}

export interface packet_scoreboard_score {
    itemName: string;
    action: varint;
    scoreName: string;
    value: undefined | varint ;
}

export interface packet_spawn_position {
    location: position;
}

export interface packet_update_time {
    age: i64;
    time: i64;
}

export interface packet_title {
    action: varint;
    text: string | undefined ;
    fadeIn: i32 | undefined ;
    stay: i32 | undefined ;
    fadeOut: i32 | undefined ;
}

export interface packet_update_sign {
    location: position;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

export interface packet_sound_effect {
    soundId: varint;
    soundCategory: varint;
    x: i32;
    y: i32;
    z: i32;
    volume: f32;
    pitch: u8;
}

export interface packet_playerlist_header {
    header: string;
    footer: string;
}

export interface packet_collect {
    collectedEntityId: varint;
    collectorEntityId: varint;
}

export interface packet_entity_teleport {
    entityId: varint;
    x: f64;
    y: f64;
    z: f64;
    yaw: i8;
    pitch: i8;
    onGround: bool;
}

export interface packet_entity_update_attributes {
    entityId: varint;
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

export interface packet_entity_effect {
    entityId: varint;
    effectId: i8;
    amplifier: i8;
    duration: varint;
    hideParticles: i8;
}

export interface packet {
    name: packet_name_7;
    params: packet_spawn_entity | packet_spawn_entity_experience_orb | packet_spawn_entity_weather | packet_spawn_entity_living | packet_spawn_entity_painting | packet_named_entity_spawn | packet_animation | packet_statistics | packet_block_break_animation | packet_tile_entity_data | packet_block_action | packet_block_change | packet_boss_bar | packet_difficulty | packet_tab_complete | packet_chat | packet_multi_block_change | packet_transaction | packet_close_window | packet_open_window | packet_window_items | packet_craft_progress_bar | packet_set_slot | packet_set_cooldown | packet_custom_payload | packet_named_sound_effect | packet_kick_disconnect | packet_entity_status | packet_explosion | packet_unload_chunk | packet_game_state_change | packet_keep_alive | packet_map_chunk | packet_world_event | packet_world_particles | packet_login | packet_map | packet_rel_entity_move | packet_entity_move_look | packet_entity_look | packet_entity | packet_vehicle_move | packet_open_sign_entity | packet_abilities | packet_combat_event | packet_player_info | packet_position | packet_bed | packet_entity_destroy | packet_remove_entity_effect | packet_resource_pack_send | packet_respawn | packet_entity_update_attributes | packet_world_border | packet_camera | packet_held_item_slot | packet_scoreboard_display_objective | packet_entity_metadata | packet_attach_entity | packet_entity_velocity | packet_entity_equipment | packet_experience | packet_update_health | packet_scoreboard_objective | packet_set_passengers | packet_teams | packet_scoreboard_score | packet_spawn_position | packet_update_time | packet_title | packet_update_sign | packet_sound_effect | packet_playerlist_header | packet_collect | packet_entity_teleport | packet_entity_head_rotation | packet_entity_effect ;
}