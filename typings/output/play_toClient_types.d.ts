interface SlotDisplay {
    type: undefined;
    data: undefined;
}

interface RecipeDisplay {
    type: undefined;
    data: undefined;
}

interface SpawnInfo {
    dimension: varint;
    name: string;
    hashedSeed: i64;
    gamemode: undefined;
    previousGamemode: u8;
    isDebug: bool;
    isFlat: bool;
    death: undefined;
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
    entries: undefined;
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
    title: undefined;
    health: undefined;
    color: undefined;
    dividers: undefined;
    flags: undefined;
}

interface packet_difficulty {
    difficulty: undefined;
    difficultyLocked: bool;
}

interface packet_chunk_batch_finished {
    batchSize: varint;
}

interface packet_chunk_batch_start {
}

interface packet_chunk_biomes {
    biomes: undefined;
}

interface packet_clear_titles {
    reset: bool;
}

interface packet_tab_complete {
    transactionId: varint;
    start: varint;
    length: varint;
    matches: undefined;
}

interface packet_declare_commands {
    nodes: undefined;
    rootIndex: varint;
}

interface packet_close_window {
    windowId: ContainerID;
}

interface packet_window_items {
    windowId: ContainerID;
    stateId: varint;
    items: undefined;
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
    entries: undefined;
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
    sourcePosition: undefined;
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
    sample: undefined;
    type: varint;
}

interface packet_hide_message {
    id: varint;
    signature: undefined;
}

interface packet_kick_disconnect {
    reason: anonymousNbt;
}

// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey
type ChatTypeParameterType = unknown;interface ChatType {
    translationKey: string;
    parameters: undefined;
    style: anonymousNbt;
}

interface ChatTypes {
    chat: ChatType;
    narration: ChatType;
}

interface packet_profileless_chat {
    message: anonymousNbt;
    type: ChatTypesHolder;
    name: anonymousNbt;
    target: undefined;
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
    playerKnockback: undefined;
    explosionParticle: Particle;
    sound: ItemSoundHolder;
    blockParticles: undefined;
}

interface packet_unload_chunk {
    chunkZ: i32;
    chunkX: i32;
}

interface packet_game_state_change {
    reason: undefined;
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
    heightmaps: undefined;
    chunkData: ByteArray;
    blockEntities: undefined;
    skyLightMask: undefined;
    blockLightMask: undefined;
    emptySkyLightMask: undefined;
    emptyBlockLightMask: undefined;
    skyLight: undefined;
    blockLight: undefined;
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
    skyLightMask: undefined;
    blockLightMask: undefined;
    emptySkyLightMask: undefined;
    emptyBlockLightMask: undefined;
    skyLight: undefined;
    blockLight: undefined;
}

interface packet_login {
    entityId: i32;
    isHardcore: bool;
    worldNames: undefined;
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
    icons: undefined;
    columns: u8;
    rows: undefined;
    x: undefined;
    y: undefined;
    data: undefined;
}

interface packet_trade_list {
    windowId: ContainerID;
    trades: undefined;
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
    steps: undefined;
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
    signature: undefined;
    plainMessage: string;
    timestamp: i64;
    salt: i64;
    previousMessages: previousMessages;
    unsignedChatContent: undefined;
    filterType: varint;
    filterTypeMask: undefined;
    type: ChatTypesHolder;
    networkName: anonymousNbt;
    networkTargetName: undefined;
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
    players: undefined;
}

interface packet_player_info {
    action: undefined;
    data: undefined;
}

interface packet_face_player {
    feet_eyes: varint;
    x: f64;
    y: f64;
    z: f64;
    isEntity: bool;
    entityId: undefined;
    entity_feet_eyes: undefined;
}

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
    entries: undefined;
    replace: bool;
}

interface packet_recipe_book_remove {
    recipeIds: undefined;
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
    entityIds: undefined;
}

interface packet_remove_entity_effect {
    entityId: varint;
    effectId: varint;
}

interface packet_reset_score {
    entity_name: string;
    objective_name: undefined;
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
    chunkCoordinates: undefined;
    records: undefined;
}

interface packet_select_advancement_tab {
    id: undefined;
}

interface packet_server_data {
    motd: anonymousNbt;
    iconBytes: undefined;
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

type packet_spawn_position = unknown;
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
    equipments: undefined;
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
    displayText: undefined;
    type: undefined;
    number_format: undefined;
    styling: undefined;
}

interface packet_set_passengers {
    entityId: varint;
    passengers: undefined;
}

interface packet_set_player_inventory {
    slotId: varint;
    contents: Slot;
}

interface packet_teams {
    team: string;
    mode: undefined;
    players: undefined;
}

interface packet_scoreboard_score {
    itemName: string;
    scoreName: string;
    value: varint;
    display_name: undefined;
    number_format: undefined;
    styling: undefined;
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
    source: undefined;
    sound: undefined;
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
    size: undefined;
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
    advancementMapping: undefined;
    identifiers: undefined;
    progressMapping: undefined;
    showAdvancements: bool;
}

interface packet_entity_update_attributes {
    entityId: varint;
    properties: undefined;
}

interface packet_entity_effect {
    entityId: varint;
    effectId: varint;
    amplifier: varint;
    duration: varint;
    flags: u8;
}

interface packet_declare_recipes {
    recipes: undefined;
    stoneCutterRecipes: undefined;
}

interface packet_tags {
    tags: undefined;
}

interface packet_set_projectile_power {
    id: varint;
    accelerationPower: f64;
}

interface packet_tracked_waypoint {
    operation: undefined;
    waypoint: undefined;
}

interface packet_show_dialog {
    dialog: undefined;
}

interface packet {
    name: undefined;
    params: undefined;
}

