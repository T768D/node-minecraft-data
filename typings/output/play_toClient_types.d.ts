interface SlotDisplay {
    type: SlotDisplay_type;
    data: undefined | varint | Slot | string  | 
{
    base: SlotDisplay;
    material: SlotDisplay;
    // Unimplemented value
    pattern: unknown;
} | 
{
    input: SlotDisplay;
    remainder: SlotDisplay;
};
}

interface RecipeDisplay {
    type: RecipeDisplay_type;
    data:   | 
{
    ingredients: SlotDisplay[];
    result: SlotDisplay;
    craftingStation: SlotDisplay;
} | 
{
    width: varint;
    height: varint;
    ingredients: SlotDisplay[];
    result: SlotDisplay;
    craftingStation: SlotDisplay;
} | 
{
    ingredient: SlotDisplay;
    fuel: SlotDisplay;
    result: SlotDisplay;
    craftingStation: SlotDisplay;
    duration: varint;
    experience: f32;
} | 
{
    ingredient: SlotDisplay;
    result: SlotDisplay;
    craftingStation: SlotDisplay;
} | 
{
    template: SlotDisplay;
    base: SlotDisplay;
    addition: SlotDisplay;
    result: SlotDisplay;
    craftingStation: SlotDisplay;
};
}

interface SpawnInfo {
    dimension: varint;
    name: string;
    hashedSeed: i64;
    gamemode: SpawnInfo_gamemode;
    previousGamemode: u8;
    isDebug: bool;
    isFlat: bool;
    death?: GlobalPos;
    portalCooldown: varint;
    seaLevel: varint;
}

interface packet_spawn_entity {
    entityId: varint;
    objectUUID: UUID;
    type: varint;
    x: f64;
    y: f64;
    z: f64;
    velocity: lpVec3;
    pitch: i8;
    yaw: i8;
    headPitch: i8;
    objectData: varint;
}

interface packet_animation {
    entityId: varint;
    animation: u8;
}

interface packet_statistics {
    entries: {
    categoryId: varint;
    statisticId: varint;
    value: varint;
}

}

interface packet_acknowledge_player_digging {
    sequenceId: varint;
}

interface packet_block_break_animation {
    entityId: varint;
    location: position;
    destroyStage: i8;
}

interface packet_tile_entity_data {
    location: position;
    action: varint;
    nbtData: anonOptionalNbt;
}

interface packet_block_action {
    location: position;
    byte1: u8;
    byte2: u8;
    blockId: varint;
}

interface packet_block_change {
    location: position;
    type: varint;
}

interface packet_boss_bar {
    entityUUID: UUID;
    action: varint;
    title: anonymousNbt | undefined ;
    health: f32 | undefined ;
    color: varint | undefined ;
    dividers: varint | undefined ;
    flags: u8 | undefined ;
}

interface packet_difficulty {
    difficulty: packet_difficulty_difficulty;
    difficultyLocked: bool;
}

interface packet_chunk_batch_finished {
    batchSize: varint;
}

interface packet_chunk_batch_start {
}

interface packet_chunk_biomes {
    biomes: {
    position: packedChunkPos;
    data: ByteArray;
}

}

interface packet_clear_titles {
    reset: bool;
}

interface packet_tab_complete {
    transactionId: varint;
    start: varint;
    length: varint;
    matches: {
    match: string;
    tooltip?: anonymousNbt;
}

}

interface packet_declare_commands {
    nodes: command_node[];
    rootIndex: varint;
}

interface packet_close_window {
    windowId: ContainerID;
}

interface packet_window_items {
    windowId: ContainerID;
    stateId: varint;
    items: Slot[];
    carriedItem: Slot;
}

interface packet_craft_progress_bar {
    windowId: ContainerID;
    property: i16;
    value: i16;
}

interface packet_set_slot {
    windowId: ContainerID;
    stateId: varint;
    slot: i16;
    item: Slot;
}

interface packet_set_cooldown {
    cooldownGroup: string;
    cooldownTicks: varint;
}

interface packet_chat_suggestions {
    action: varint;
    entries: string[];
}

interface packet_custom_payload {
    channel: string;
    data: restBuffer;
}

interface packet_damage_event {
    entityId: varint;
    sourceTypeId: varint;
    sourceCauseId: varint;
    sourceDirectId: varint;
    sourcePosition?: vec3f64;
}

interface packet_debug_block_value {
    blockPos: position;
    update: DebugSubscriptionUpdate;
}

interface packet_debug_chunk_value {
    chunkPos: packedChunkPos;
    update: DebugSubscriptionUpdate;
}

interface packet_debug_entity_value {
    entityId: varint;
    update: DebugSubscriptionUpdate;
}

interface packet_debug_event {
    event: DebugSubscriptionEvent;
}

interface packet_debug_sample {
    sample: i64[];
    type: varint;
}

interface packet_hide_message {
    id: varint;
    signature: undefined ;
}

interface packet_kick_disconnect {
    reason: anonymousNbt;
}

interface ChatType {
    translationKey: string;
    parameters: ChatTypeParameterType[];
    style: anonymousNbt;
}

interface ChatTypes {
    chat: ChatType;
    narration: ChatType;
}

// Unimplemented value
type ChatTypesHolder = unknown;
interface packet_profileless_chat {
    message: anonymousNbt;
    type: ChatTypesHolder;
    name: anonymousNbt;
    target?: anonymousNbt;
}

interface packet_entity_status {
    entityId: i32;
    entityStatus: i8;
}

interface packet_sync_entity_position {
    entityId: varint;
    x: f64;
    y: f64;
    z: f64;
    dx: f64;
    dy: f64;
    dz: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
}

interface ExplosionParticleInfo {
    particle: Particle;
    scaling: f32;
    speed: f32;
}

interface ExplosionParticleEntry {
    data: ExplosionParticleInfo;
    weight: varint;
}

interface packet_explosion {
    center: vec3f64;
    radius: f32;
    blockCount: i32;
    playerKnockback?: vec3f64;
    explosionParticle: Particle;
    sound: ItemSoundHolder;
    blockParticles: ExplosionParticleEntry[];
}

interface packet_unload_chunk {
    chunkZ: i32;
    chunkX: i32;
}

interface packet_game_state_change {
    reason: packet_game_state_change_reason;
    gameMode: f32;
}

interface packet_game_test_highlight_pos {
    absolutePos: position;
    relativePos: position;
}

interface packet_open_horse_window {
    windowId: ContainerID;
    nbSlots: varint;
    entityId: i32;
}

interface packet_hurt_animation {
    entityId: varint;
    yaw: f32;
}

interface packet_initialize_world_border {
    x: f64;
    z: f64;
    oldDiameter: f64;
    newDiameter: f64;
    speed: varint;
    portalTeleportBoundary: varint;
    warningBlocks: varint;
    warningTime: varint;
}

interface packet_keep_alive {
    keepAliveId: i64;
}

interface packet_map_chunk {
    x: i32;
    z: i32;
    heightmaps: {
    type: packet_map_chunk_heightmaps_type;
    data: i64[];
}

    chunkData: ByteArray;
    blockEntities: chunkBlockEntity[];
    skyLightMask: i64[];
    blockLightMask: i64[];
    emptySkyLightMask: i64[];
    emptyBlockLightMask: i64[];
    skyLight: u8[];
    blockLight: u8[];
}

interface packet_world_event {
    effectId: i32;
    location: position;
    data: i32;
    global: bool;
}

interface packet_world_particles {
    longDistance: bool;
    alwaysShow: bool;
    x: f64;
    y: f64;
    z: f64;
    offsetX: f32;
    offsetY: f32;
    offsetZ: f32;
    velocityOffset: f32;
    amount: i32;
    particle: Particle;
}

interface packet_update_light {
    chunkX: varint;
    chunkZ: varint;
    skyLightMask: i64[];
    blockLightMask: i64[];
    emptySkyLightMask: i64[];
    emptyBlockLightMask: i64[];
    skyLight: u8[];
    blockLight: u8[];
}

interface packet_login {
    entityId: i32;
    isHardcore: bool;
    worldNames: string[];
    maxPlayers: varint;
    viewDistance: varint;
    simulationDistance: varint;
    reducedDebugInfo: bool;
    enableRespawnScreen: bool;
    doLimitedCrafting: bool;
    worldState: SpawnInfo;
    enforcesSecureChat: bool;
}

interface packet_map {
    itemDamage: varint;
    scale: i8;
    locked: bool;
    icons?: {
    type: varint;
    x: i8;
    z: i8;
    direction: u8;
    displayName?: anonymousNbt;
}

    columns: u8;
    rows: undefined | u8 ;
    x: undefined | u8 ;
    y: undefined | u8 ;
    data: undefined ;
}

interface packet_trade_list {
    windowId: ContainerID;
    trades: {
    inputItem1: {
    itemId: varint;
    itemCount: varint;
    components: ExactComponentMatcher;
}

    outputItem: Slot;
    inputItem2?: {
    itemId: varint;
    itemCount: varint;
    components: ExactComponentMatcher;
}

    tradeDisabled: bool;
    nbTradeUses: i32;
    maximumNbTradeUses: i32;
    xp: i32;
    specialPrice: i32;
    priceMultiplier: f32;
    demand: i32;
}

    villagerLevel: varint;
    experience: varint;
    isRegularVillager: bool;
    canRestock: bool;
}

interface packet_rel_entity_move {
    entityId: varint;
    dX: i16;
    dY: i16;
    dZ: i16;
    onGround: bool;
}

interface packet_entity_move_look {
    entityId: varint;
    dX: i16;
    dY: i16;
    dZ: i16;
    yaw: i8;
    pitch: i8;
    onGround: bool;
}

interface packet_move_minecart {
    entityId: varint;
    steps: {
    position: vec3f;
    velocity: vec3f;
    yaw: f32;
    pitch: f32;
    weight: f32;
}

}

interface packet_entity_look {
    entityId: varint;
    yaw: i8;
    pitch: i8;
    onGround: bool;
}

interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
}

interface packet_open_book {
    hand: varint;
}

interface packet_open_window {
    windowId: varint;
    inventoryType: varint;
    windowTitle: anonymousNbt;
}

interface packet_open_sign_entity {
    location: position;
    isFrontText: bool;
}

interface packet_ping {
    id: i32;
}

interface packet_ping_response {
    id: i64;
}

interface packet_craft_recipe_response {
    windowId: ContainerID;
    recipeDisplay: RecipeDisplay;
}

interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
}

interface packet_player_chat {
    globalIndex: varint;
    senderUuid: UUID;
    index: varint;
    signature?: unknown;
    plainMessage: string;
    timestamp: i64;
    salt: i64;
    previousMessages: previousMessages;
    unsignedChatContent?: anonymousNbt;
    filterType: varint;
    filterTypeMask: undefined ;
    type: ChatTypesHolder;
    networkName: anonymousNbt;
    networkTargetName?: anonymousNbt;
}

interface packet_end_combat_event {
    duration: varint;
}

interface packet_enter_combat_event {
}

interface packet_death_combat_event {
    playerId: varint;
    message: anonymousNbt;
}

interface packet_player_remove {
    players: UUID[];
}

interface packet_player_info {
    // Unimplemented value
    action: unknown;
    data: {
    uuid: UUID;
    player: game_profile_name_prop | undefined ;
    chatSession: chat_session | undefined ;
    gamemode: varint | undefined ;
    listed: varint | undefined ;
    latency: varint | undefined ;
    displayName: undefined ;
    listPriority: varint | undefined ;
    showHat: bool | undefined ;
}

}

interface packet_face_player {
    feet_eyes: varint;
    x: f64;
    y: f64;
    z: f64;
    isEntity: bool;
    entityId: varint | undefined ;
    entity_feet_eyes: varint | undefined ;
}

// Unimplemented value
type PositionUpdateRelatives = unknown;
interface packet_position {
    teleportId: varint;
    x: f64;
    y: f64;
    z: f64;
    dx: f64;
    dy: f64;
    dz: f64;
    yaw: f32;
    pitch: f32;
    flags: PositionUpdateRelatives;
}

interface packet_player_rotation {
    yaw: f32;
    relativeYaw: bool;
    pitch: f32;
    relativePitch: bool;
}

interface packet_recipe_book_add {
    entries: {
    recipe: {
    displayId: varint;
    display: RecipeDisplay;
    group: optvarint;
    category: packet_recipe_book_add_entries_recipe_category;
    craftingRequirements?: IDSet[];
}

    // Unimplemented value
    flags: unknown;
}

    replace: bool;
}

interface packet_recipe_book_remove {
    recipeIds: varint[];
}

interface RecipeBookSetting {
    open: bool;
    filtering: bool;
}

interface packet_recipe_book_settings {
    crafting: RecipeBookSetting;
    furnace: RecipeBookSetting;
    blast: RecipeBookSetting;
    smoker: RecipeBookSetting;
}

interface packet_entity_destroy {
    entityIds: varint[];
}

interface packet_remove_entity_effect {
    entityId: varint;
    effectId: varint;
}

interface packet_reset_score {
    entity_name: string;
    objective_name?: string;
}

interface packet_respawn {
    worldState: SpawnInfo;
    copyMetadata: u8;
}

interface packet_entity_head_rotation {
    entityId: varint;
    headYaw: i8;
}

interface packet_multi_block_change {
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * x : 0-21 : true
     * z : 22-43 : true
     * y : 44-63 : true
    */
    chunkCoordinates: number;
    records: varint[];
}

interface packet_select_advancement_tab {
    id?: string;
}

interface packet_server_data {
    motd: anonymousNbt;
    iconBytes?: ByteArray;
}

interface packet_action_bar {
    text: anonymousNbt;
}

interface packet_world_border_center {
    x: f64;
    z: f64;
}

interface packet_world_border_lerp_size {
    oldDiameter: f64;
    newDiameter: f64;
    speed: varint;
}

interface packet_world_border_size {
    diameter: f64;
}

interface packet_world_border_warning_delay {
    warningTime: varint;
}

interface packet_world_border_warning_reach {
    warningBlocks: varint;
}

interface packet_camera {
    cameraId: varint;
}

interface packet_update_view_position {
    chunkX: varint;
    chunkZ: varint;
}

interface packet_update_view_distance {
    viewDistance: varint;
}

interface packet_set_cursor_item {
    contents: Slot;
}

type packet_spawn_position = RespawnData;
interface packet_scoreboard_display_objective {
    position: varint;
    name: string;
}

interface packet_entity_metadata {
    entityId: varint;
    metadata: entityMetadata;
}

interface packet_attach_entity {
    entityId: i32;
    vehicleId: i32;
}

interface packet_entity_velocity {
    entityId: varint;
    velocity: lpVec3;
}

interface packet_entity_equipment {
    entityId: varint;
    // Unimplemented value
    equipments: unknown;
}

interface packet_experience {
    experienceBar: f32;
    level: varint;
    totalExperience: varint;
}

interface packet_update_health {
    health: f32;
    food: varint;
    foodSaturation: f32;
}

interface packet_held_item_slot {
    slot: varint;
}

interface packet_scoreboard_objective {
    name: string;
    action: i8;
    displayText: anonymousNbt | undefined ;
    type: varint | undefined ;
    number_format: undefined ;
    styling: undefined ;
}

interface packet_set_passengers {
    entityId: varint;
    passengers: varint[];
}

interface packet_set_player_inventory {
    slotId: varint;
    contents: Slot;
}

interface packet_teams {
    team: string;
    mode: packet_teams_mode;
    undefined: undefined  | 
{
    name: anonymousNbt;
    // Unimplemented value
    flags: unknown;
    nameTagVisibility: add_nameTagVisibility;
    collisionRule: add_collisionRule;
    formatting: varint;
    prefix: anonymousNbt;
    suffix: anonymousNbt;
} | 
{
    name: anonymousNbt;
    // Unimplemented value
    flags: unknown;
    nameTagVisibility: change_nameTagVisibility;
    collisionRule: change_collisionRule;
    formatting: varint;
    prefix: anonymousNbt;
    suffix: anonymousNbt;
};
    players: undefined ;
}

interface packet_scoreboard_score {
    itemName: string;
    scoreName: string;
    value: varint;
    display_name?: anonymousNbt;
    number_format?: varint;
    styling: anonymousNbt | undefined ;
}

interface packet_simulation_distance {
    distance: varint;
}

interface packet_set_title_subtitle {
    text: anonymousNbt;
}

interface packet_update_time {
    age: i64;
    time: i64;
    tickDayTime: bool;
}

interface packet_set_title_text {
    text: anonymousNbt;
}

interface packet_set_title_time {
    fadeIn: i32;
    stay: i32;
    fadeOut: i32;
}

interface packet_entity_sound_effect {
    sound: ItemSoundHolder;
    soundCategory: soundSource;
    entityId: varint;
    volume: f32;
    pitch: f32;
    seed: i64;
}

interface packet_sound_effect {
    sound: ItemSoundHolder;
    soundCategory: soundSource;
    x: i32;
    y: i32;
    z: i32;
    volume: f32;
    pitch: f32;
    seed: i64;
}

interface packet_start_configuration {
}

interface packet_stop_sound {
    flags: i8;
    source: varint | undefined ;
    sound: string | undefined ;
}

interface packet_system_chat {
    content: anonymousNbt;
    isActionBar: bool;
}

interface packet_playerlist_header {
    header: anonymousNbt;
    footer: anonymousNbt;
}

interface packet_nbt_query_response {
    transactionId: varint;
    nbt: anonOptionalNbt;
}

interface packet_collect {
    collectedEntityId: varint;
    collectorEntityId: varint;
    pickupItemCount: varint;
}

interface packet_entity_teleport {
    entityId: varint;
    x: f64;
    y: f64;
    z: f64;
    yaw: i8;
    pitch: i8;
    onGround: bool;
}

interface packet_test_instance_block_status {
    status: anonymousNbt;
    size?: vec3i;
}

interface packet_set_ticking_state {
    tick_rate: f32;
    is_frozen: bool;
}

interface packet_step_tick {
    tick_steps: varint;
}

interface packet_advancements {
    reset: bool;
    advancementMapping: {
    key: string;
    value: {
    parentId?: string;
    displayData?: {
    title: anonymousNbt;
    description: anonymousNbt;
    icon: Slot;
    frameType: varint;
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-28 : false
     * hidden : 29-29 : false
     * show_toast : 30-30 : false
     * has_background_texture : 31-31 : false
    */
    flags: number;
    backgroundTexture: string | undefined ;
    xCord: f32;
    yCord: f32;
}

    requirements: string[];
    sendsTelemtryData: bool;
}

}

    identifiers: string[];
    progressMapping: {
    key: string;
    value: {
    criterionIdentifier: string;
    criterionProgress?: i64;
}

}

    showAdvancements: bool;
}

interface packet_entity_update_attributes {
    entityId: varint;
    properties: {
    key: packet_entity_update_attributes_properties_key;
    value: f64;
    modifiers: {
    uuid: string;
    amount: f64;
    operation: i8;
}

}

}

interface packet_entity_effect {
    entityId: varint;
    effectId: varint;
    amplifier: varint;
    duration: varint;
    flags: u8;
}

interface packet_declare_recipes {
    recipes: {
    name: string;
    items: varint[];
}

    stoneCutterRecipes: {
    input: IDSet;
    slotDisplay: SlotDisplay;
}

}

interface packet_tags {
    tags: {
    tagType: string;
    tags: tags;
}

}

interface packet_set_projectile_power {
    id: varint;
    accelerationPower: f64;
}

interface packet_tracked_waypoint {
    operation: packet_tracked_waypoint_operation;
    waypoint: {
    hasUUID: bool;
    undefined:   | 
{
    uuid: UUID;
} | 
{
    id: string;
};
    icon: {
    style: string;
    color?: {
    red: u8;
    green: u8;
    blue: u8;
}

}

    type: packet_tracked_waypoint_waypoint_type;
    data: vec3i | f32  | 
{
    chunkX: varint;
    chunkZ: varint;
};
}

}

interface packet_show_dialog {
    // Unimplemented value
    dialog: unknown;
}

interface packet {
    name: packet_name_9;
    params: undefined | packet_spawn_entity | packet_animation | packet_statistics | packet_acknowledge_player_digging | packet_block_break_animation | packet_tile_entity_data | packet_block_action | packet_block_change | packet_boss_bar | packet_difficulty | packet_chunk_batch_finished | packet_chunk_batch_start | packet_chunk_biomes | packet_clear_titles | packet_tab_complete | packet_declare_commands | packet_close_window | packet_window_items | packet_craft_progress_bar | packet_set_slot | packet_common_cookie_request | packet_set_cooldown | packet_chat_suggestions | packet_custom_payload | packet_damage_event | packet_debug_block_value | packet_debug_chunk_value | packet_debug_entity_value | packet_debug_event | packet_debug_sample | packet_hide_message | packet_kick_disconnect | packet_profileless_chat | packet_entity_status | packet_sync_entity_position | packet_explosion | packet_unload_chunk | packet_game_state_change | packet_game_test_highlight_pos | packet_open_horse_window | packet_hurt_animation | packet_initialize_world_border | packet_keep_alive | packet_map_chunk | packet_world_event | packet_world_particles | packet_update_light | packet_login | packet_map | packet_trade_list | packet_rel_entity_move | packet_entity_move_look | packet_move_minecart | packet_entity_look | packet_vehicle_move | packet_open_book | packet_open_window | packet_open_sign_entity | packet_ping | packet_ping_response | packet_craft_recipe_response | packet_abilities | packet_player_chat | packet_end_combat_event | packet_enter_combat_event | packet_death_combat_event | packet_player_remove | packet_player_info | packet_face_player | packet_position | packet_player_rotation | packet_recipe_book_add | packet_recipe_book_remove | packet_recipe_book_settings | packet_entity_destroy | packet_remove_entity_effect | packet_reset_score | packet_common_remove_resource_pack | packet_common_add_resource_pack | packet_respawn | packet_entity_head_rotation | packet_multi_block_change | packet_select_advancement_tab | packet_server_data | packet_action_bar | packet_world_border_center | packet_world_border_lerp_size | packet_world_border_size | packet_world_border_warning_delay | packet_world_border_warning_reach | packet_camera | packet_update_view_position | packet_update_view_distance | packet_set_cursor_item | packet_held_item_slot | packet_spawn_position | packet_scoreboard_display_objective | packet_entity_metadata | packet_attach_entity | packet_entity_velocity | packet_entity_equipment | packet_experience | packet_update_health | packet_scoreboard_objective | packet_set_passengers | packet_set_player_inventory | packet_teams | packet_scoreboard_score | packet_simulation_distance | packet_set_title_subtitle | packet_update_time | packet_set_title_text | packet_set_title_time | packet_entity_sound_effect | packet_sound_effect | packet_start_configuration | packet_stop_sound | packet_common_store_cookie | packet_system_chat | packet_playerlist_header | packet_nbt_query_response | packet_collect | packet_entity_teleport | packet_test_instance_block_status | packet_set_ticking_state | packet_step_tick | packet_common_transfer | packet_advancements | packet_entity_update_attributes | packet_entity_effect | packet_declare_recipes | packet_tags | packet_set_projectile_power | packet_common_custom_report_details | packet_common_server_links | packet_tracked_waypoint | packet_common_clear_dialog | packet_show_dialog ;
}