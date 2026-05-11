type varint = number;
type varlong = bigint;
type optvarint = varint;
type pstring = string;
type buffer = Buffer;
type u8 = number;
type u16 = number;
type u32 = number;
type u64 = bigint;
type i8 = number;
type i16 = number;
type i32 = number;
type i64 = bigint;
type bool = boolean;
type f32 = number;
type f64 = number;
type UUID = string;
type option = unknown;
type entityMetadataLoop = unknown[];
type topBitSetTerminatedArray = unknown[];
type bitfield = number;
type bitflags = number;
type container = Record<string, unknown>;
type array = unknown[];
type restBuffer = Buffer;
type anonymousNbt = unknown;
type anonOptionalNbt = unknown | null;
type registryEntryHolder = unknown;
type registryEntryHolderSet = unknown[];
type lpVec3 = { x: number; y: number; z: number };
interface vec2f {
    x: f32;
    y: f32;
}

interface vec3f {
    x: f32;
    y: f32;
    z: f32;
}

interface vec4f {
    x: f32;
    y: f32;
    z: f32;
    w: f32;
}

interface vec3f64 {
    x: f64;
    y: f64;
    z: f64;
}

interface vec3i {
    x: varint;
    y: varint;
    z: varint;
}

interface vec3i32 {
    x: i32;
    y: i32;
    z: i32;
}

type ContainerID = varint;
const enum SlotComponentType {
    custom_data = 0,
    max_stack_size = 1,
    max_damage = 2,
    damage = 3,
    unbreakable = 4,
    use_effects = 5,
    custom_name = 6,
    minimum_attack_charge = 7,
    damage_type = 8,
    item_name = 9,
    item_model = 10,
    lore = 11,
    rarity = 12,
    enchantments = 13,
    can_place_on = 14,
    can_break = 15,
    attribute_modifiers = 16,
    custom_model_data = 17,
    tooltip_display = 18,
    repair_cost = 19,
    creative_slot_lock = 20,
    enchantment_glint_override = 21,
    intangible_projectile = 22,
    food = 23,
    consumable = 24,
    use_remainder = 25,
    use_cooldown = 26,
    damage_resistant = 27,
    tool = 28,
    weapon = 29,
    attack_range = 30,
    enchantable = 31,
    equippable = 32,
    repairable = 33,
    glider = 34,
    tooltip_style = 35,
    death_protection = 36,
    blocks_attacks = 37,
    piercing_weapon = 38,
    kinetic_weapon = 39,
    swing_animation = 40,
    stored_enchantments = 41,
    dyed_color = 42,
    map_color = 43,
    map_id = 44,
    map_decorations = 45,
    map_post_processing = 46,
    charged_projectiles = 47,
    bundle_contents = 48,
    potion_contents = 49,
    potion_duration_scale = 50,
    suspicious_stew_effects = 51,
    writable_book_content = 52,
    written_book_content = 53,
    trim = 54,
    debug_stick_state = 55,
    entity_data = 56,
    bucket_entity_data = 57,
    block_entity_data = 58,
    instrument = 59,
    provides_trim_material = 60,
    ominous_bottle_amplifier = 61,
    jukebox_playable = 62,
    provides_banner_patterns = 63,
    recipes = 64,
    lodestone_tracker = 65,
    firework_explosion = 66,
    fireworks = 67,
    profile = 68,
    note_block_sound = 69,
    banner_patterns = 70,
    base_color = 71,
    pot_decorations = 72,
    container = 73,
    block_state = 74,
    bees = 75,
    lock = 76,
    container_loot = 77,
    break_sound = 78,
    villager_variant = 79,
    wolf_variant = 80,
    wolf_sound_variant = 81,
    wolf_collar = 82,
    fox_variant = 83,
    salmon_size = 84,
    parrot_variant = 85,
    tropical_fish_pattern = 86,
    tropical_fish_base_color = 87,
    tropical_fish_pattern_color = 88,
    mooshroom_variant = 89,
    rabbit_variant = 90,
    pig_variant = 91,
    cow_variant = 92,
    chicken_variant = 93,
    zombie_nautilus_variant = 94,
    frog_variant = 95,
    horse_variant = 96,
    painting_variant = 97,
    llama_variant = 98,
    axolotl_variant = 99,
    cat_variant = 100,
    cat_collar = 101,
    sheep_color = 102,
    shulker_color = 103,
}

interface SlotComponent {
    type: SlotComponentType;
    data: undefined;
}

interface ItemSoundEvent {
    soundName: string;
    fixedRange: undefined;
}

interface ItemFireworkExplosion {
    shape: undefined;
    colors: undefined;
    fadeColors: undefined;
    hasTrail: bool;
    hasTwinkle: bool;
}

interface ItemEffectDetail {
    amplifier: varint;
    duration: varint;
    ambient: bool;
    showParticles: bool;
    showIcon: bool;
    hiddenEffect: undefined;
}

interface ItemPotionEffect {
    id: varint;
    details: ItemEffectDetail;
}

interface ItemBlockProperty {
    name: string;
    isExactMatch: bool;
    value: undefined;
}

interface DataComponentMatchers {
    exactMatchers: ExactComponentMatcher;
    partialMatchers: undefined;
}

interface ItemBlockPredicate {
    blockSet: undefined;
    properties: undefined;
    nbt: anonOptionalNbt;
    components: DataComponentMatchers;
}

interface ItemBookPage {
    content: string;
    filteredContent: undefined;
}

interface ItemWrittenBookPage {
    content: anonymousNbt;
    filteredContent: anonOptionalNbt;
}

interface ItemConsumeEffect {
    type: undefined;
}

interface ArmorTrimMaterial {
    assetBase: string;
    overrideArmorAssets: undefined;
    description: anonymousNbt;
}

interface ArmorTrimPattern {
    assetId: string;
    description: anonymousNbt;
    decal: bool;
}

interface InstrumentData {
    soundEvent: ItemSoundHolder;
    useDuration: f32;
    range: f32;
    description: anonymousNbt;
}

interface JukeboxSongData {
    soundEvent: ItemSoundHolder;
    description: anonymousNbt;
    lengthInSeconds: f32;
    comparatorOutput: varint;
}

interface BannerPattern {
    assetId: string;
    translationKey: string;
}

interface BannerPatternLayer {
    pattern: undefined;
    colorId: varint;
}

interface DamageTypeData {
    msgId: string;
    scaling: undefined;
    exhaustion: f32;
    effects: undefined;
    deathMessageType: undefined;
}

interface KineticWeaponCondition {
    maxDurationTicks: varint;
    minSpeed: f32;
    minRelativeSpeed: f32;
}

interface UntrustedSlotComponent {
    type: SlotComponentType;
    data: ByteArray;
}

interface UntrustedSlot {
    itemCount: varint;
}

interface Slot {
    itemCount: varint;
}

interface HashedSlot {
    itemId: varint;
    itemCount: varint;
    components: undefined;
    removeComponents: undefined;
}

interface RespawnData {
    globalPos: GlobalPos;
    yaw: f32;
    pitch: f32;
}

interface GlobalPos {
    dimensionName: string;
    location: position;
}

interface DebugStructureInfo {
    boundingBoxMin: position;
    boundingBoxMax: position;
    pieces: undefined;
}

interface Node {
    position: vec3i32;
    walkedDistance: f32;
    costMalus: f32;
    closed: bool;
    type: undefined;
    f: f32;
}

interface PathDebugData {
    openSet: undefined;
    closedSet: undefined;
    targetNodes: undefined;
}

interface Path {
    reached: bool;
    nextNodeIndex: i32;
    target: position;
    nodes: undefined;
    debugData: PathDebugData;
}

const enum DebugSubscriptionDataType {
    DedicatedServerTickTime = 0,
    Bees = 1,
    Brains = 2,
    Breezes = 3,
    GoalSelectors = 4,
    EntityPaths = 5,
    EntityBlockIntersections = 6,
    BeeHives = 7,
    Pois = 8,
    RedstoneWireOrientations = 9,
    VillageSections = 10,
    Raids = 11,
    Structures = 12,
    GameEventListeners = 13,
    NeighborUpdates = 14,
    GameEvents = 15,
}

interface DebugSubscriptionUpdate {
    type: DebugSubscriptionDataType;
}

interface DebugSubscriptionEvent {
    type: DebugSubscriptionDataType;
    value: undefined;
}

interface Particle {
    type: undefined;
    data: undefined;
}

const enum soundSource {
    master = 0,
    music = 1,
    record = 2,
    weather = 3,
    block = 4,
    hostile = 5,
    neutral = 6,
    player = 7,
    ambient = 8,
    voice = 9,
    ui = 10,
}

interface packedChunkPos {
    z: i32;
    x: i32;
}

interface entityMetadataEntry {
    key: u8;
    type: undefined;
    value: undefined;
}

interface EntityMetadataPaintingVariant {
    width: i32;
    height: i32;
    assetId: string;
    title: undefined;
    author: undefined;
}

interface chunkBlockEntity {
    y: i16;
    type: varint;
    nbtData: anonOptionalNbt;
}

interface game_profile_name_prop {
    name: string;
    properties: undefined;
}

interface GameProfile {
    uuid: UUID;
    name: string;
    properties: undefined;
}

interface PartialResolvableProfile {
    name: undefined;
    uuid: undefined;
    properties: undefined;
}

interface GameProfileProperty {
    name: string;
    value: string;
    signature: undefined;
}

interface ResolvableProfile {
    type: undefined;
    skinPatch: PlayerSkinPatch;
}

interface PlayerSkinPatch {
    body: undefined;
    cape: undefined;
    elytra: undefined;
    model: undefined;
}

interface command_node {
    flags: undefined;
    children: undefined;
    redirectNode: undefined;
    extraNodeData: undefined;
}

interface packet_common_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: varint;
    chatColors: bool;
    skinParts: u8;
    mainHand: varint;
    enableTextFiltering: bool;
    enableServerListing: bool;
    particleStatus: undefined;
}

interface packet_common_cookie_request {
    cookie: string;
}

interface packet_common_store_cookie {
    key: string;
    value: ByteArray;
}

interface packet_common_transfer {
    host: string;
    port: varint;
}

interface packet_common_cookie_response {
    key: string;
    value: undefined;
}

interface packet_common_select_known_packs {
    packs: undefined;
}

interface packet_common_custom_report_details {
    details: undefined;
}

interface packet_common_remove_resource_pack {
    uuid: undefined;
}

interface packet_common_add_resource_pack {
    uuid: UUID;
    url: string;
    hash: string;
    forced: bool;
    promptMessage: undefined;
}

const enum ServerLinkType {
    bug_report = 0,
    community_guidelines = 1,
    support = 2,
    status = 3,
    feedback = 4,
    community = 5,
    website = 6,
    forums = 7,
    news = 8,
    announcements = 9,
}

interface packet_common_server_links {
    links: undefined;
}

interface packet_common_clear_dialog {
}

interface packet_common_custom_click_action {
    id: string;
    nbt: undefined;
}

