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
type ByteArray = Buffer;


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

interface vec3i16 {
    x: i16;
    y: i16;
    z: i16;
}

// Unimplemented value
type IDSet = unknown;


type ContainerID = varint;
interface SlotComponent {
    type: SlotComponentType;
    data: anonymousNbt | varint | undefined | string | bool | Slot | i32 | f32 | ItemFireworkExplosion | ItemSoundHolder  | 
{
    enchantments: {
    id: varint;
    level: varint;
};
} | 
{
    predicates: ItemBlockPredicate[];
} | 
{
    predicates: ItemBlockPredicate[];
} | 
{
    floats: f32[];
    flags: bool[];
    strings: string[];
    colors: i32[];
} | 
{
    hideTooltip: bool;
    hiddenComponents: varint[];
} | 
{
    blockDelaySeconds: f32;
    disableCooldownScale: f32;
    damageReductions: {
    horizontalBlockingAngle: f32;
    type?: IDSet;
    base: f32;
    factor: f32;
};
    itemDamage: {
    threshold: f32;
    base: f32;
    factor: f32;
};
    bypassedBy?: string;
    blockSound?: ItemSoundHolder;
    disableSound?: ItemSoundHolder;
} | 
{
    nutrition: varint;
    saturationModifier: f32;
    canAlwaysEat: bool;
} | 
{
    consume_seconds: f32;
    animation: consumable_animation;
    sound: ItemSoundHolder;
    makes_particles: bool;
    effects: ItemConsumeEffect[];
} | 
{
    seconds: f32;
    cooldownGroup?: string;
} | 
{
    rules: {
    blocks: IDSet;
    speed?: f32;
    correctDropForBlocks?: bool;
};
    defaultMiningSpeed: f32;
    damagePerBlock: varint;
    canDestroyBlocksInCreative: bool;
} | 
{
    itemDamagePerAttack: varint;
    disableBlockingForSeconds: f32;
} | 
{
    slot: equippable_slot;
    sound: ItemSoundHolder;
    model?: string;
    cameraOverlay?: string;
    allowedEntities?: IDSet;
    dispensable: bool;
    swappable: bool;
    damageable: bool;
    equipOnInteract: bool;
} | 
{
    items: IDSet;
} | 
{
    effects: ItemConsumeEffect[];
} | 
{
    enchantments: {
    id: varint;
    level: varint;
};
} | 
{
    projectiles: Slot[];
} | 
{
    contents: Slot[];
} | 
{
    potionId?: varint;
    customColor?: i32;
    customEffects: ItemPotionEffect[];
    customName?: string;
} | 
{
    effects: {
    effect: varint;
    duration: varint;
};
} | 
{
    pages: ItemBookPage[];
} | 
{
    rawTitle: string;
    filteredTitle?: string;
    author: string;
    generation: varint;
    pages: ItemWrittenBookPage[];
    resolved: bool;
} | 
{
    // Unimplemented value
    material: unknown;
    // Unimplemented value
    pattern: unknown;
} | 
{
    hasHolder: bool;
    data: string ;
} | 
{
    hasHolder: bool;
    material: string ;
} | 
{
    hasHolder: bool;
    song: string ;
} | 
{
    globalPosition?: {
    dimension: string;
    position: position;
};
    tracked: bool;
} | 
{
    flightDuration: varint;
    explosions: ItemFireworkExplosion[];
} | 
{
    name?: string;
    uuid?: UUID;
    properties: {
    name: string;
    value: string;
    signature?: string;
};
} | 
{
    layers: BannerPatternLayer[];
} | 
{
    decorations: varint[];
} | 
{
    contents: Slot[];
} | 
{
    properties: {
    name: string;
    value: string;
};
} | 
{
    bees: {
    nbtData: anonymousNbt;
    ticksInHive: varint;
    minTicksInHive: varint;
};
};
}

interface ItemSoundEvent {
    soundName: string;
    fixedRange?: f32;
}

// Unimplemented value
type ItemSoundHolder = unknown;


interface ItemFireworkExplosion {
    shape: ItemFireworkExplosion_shape;
    colors: i32[];
    fadeColors: i32[];
    hasTrail: bool;
    hasTwinkle: bool;
}

interface ItemEffectDetail {
    amplifier: varint;
    duration: varint;
    ambient: bool;
    showParticles: bool;
    showIcon: bool;
    hiddenEffect?: ItemEffectDetail;
}

interface ItemPotionEffect {
    id: varint;
    details: ItemEffectDetail;
}

interface ItemBlockProperty {
    name: string;
    isExactMatch: bool;
    value:   | 
{
    exactValue: string;
} | 
{
    minValue: string;
    maxValue: string;
};
}

type ExactComponentMatcher = SlotComponent[];


interface DataComponentMatchers {
    exactMatchers: ExactComponentMatcher;
    partialMatchers: varint[];
}

interface ItemBlockPredicate {
    blockSet?: unknown;
    properties?: ItemBlockProperty[];
    nbt: anonOptionalNbt;
    components: DataComponentMatchers;
}

interface ItemBookPage {
    content: string;
    filteredContent?: string;
}

interface ItemWrittenBookPage {
    content: anonymousNbt;
    filteredContent: anonOptionalNbt;
}

interface ItemConsumeEffect {
    type: ItemConsumeEffect_type;
}

interface ArmorTrimMaterial {
    assetBase: string;
    overrideArmorAssets: {
    key: string;
    value: string;
};
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
    // Unimplemented value
    pattern: unknown;
    colorId: varint;
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
    components: {
    type: SlotComponentType;
    hash: i32;
};
    removeComponents: {
    type: SlotComponentType;
};
}

interface Particle {
    type: Particle_type;
    data: varint | i32 | Slot | f32 | undefined  | 
{
    red: f32;
    green: f32;
    blue: f32;
    scale: f32;
} | 
{
    fromRed: f32;
    fromGreen: f32;
    fromBlue: f32;
    scale: f32;
    toRed: f32;
    toGreen: f32;
    toBlue: f32;
} | 
{
    positionType: vibration_positionType;
    position: position  | 
{
    entityId: varint;
    entityEyeHeight: f32;
};
    ticks: varint;
} | 
{
    target: vec3f64;
    color: u8;
};
}

type ingredient = Slot[];


/**
 * This is a bitfield
 * Format: (name : bits a-b : signed)
 * x : 0-25 : true
 * z : 26-51 : true
 * y : 52-63 : true
*/
type position = number;


interface packedChunkPos {
    z: i32;
    x: i32;
}

type previousMessages = {
    id: varint;
    signature: undefined ;
};


interface entityMetadataEntry {
    key: u8;
    type: entityMetadataEntry_type;
    value: i8 | varint | varlong | f32 | string | anonymousNbt | Slot | bool | position | optvarint | Particle | vec3f | vec4f  | 
{
    pitch: f32;
    yaw: f32;
    roll: f32;
} | 
{
    villagerType: varint;
    villagerProfession: varint;
    level: varint;
};
}

interface EntityMetadataPaintingVariant {
    width: i32;
    height: i32;
    assetId: string;
    title?: anonymousNbt;
    author?: anonymousNbt;
}

// Unimplemented value
type entityMetadata = unknown;


type tags = {
    tagName: string;
    entries: varint[];
};


interface chunkBlockEntity {
    y: i16;
    type: varint;
    nbtData: anonOptionalNbt;
}

type chat_session = {
    uuid: UUID;
    publicKey: {
    expireTime: i64;
    keyBytes: Buffer;
    keySignature: Buffer;
};
};


interface game_profile {
    name: string;
    properties: {
    name: string;
    value: string;
    signature?: string;
};
}

interface command_node {
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-2 : false
     * has_custom_suggestions : 3-3 : false
     * has_redirect_node : 4-4 : false
     * has_command : 5-5 : false
     * command_node_type : 6-7 : false
    */
    flags: number;
    children: varint[];
    redirectNode: varint | undefined ;
    extraNodeData: undefined  | 
{
    name: string;
} | 
{
    name: string;
    parser: a2_parser;
    properties: undefined  | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: f32 | undefined ;
    max: f32 | undefined ;
} | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: f64 | undefined ;
    max: f64 | undefined ;
} | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: i32 | undefined ;
    max: i32 | undefined ;
} | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: i64 | undefined ;
    max: i64 | undefined ;
} | 
{
    min: i32;
} | 
{
    registry: string;
} | 
{
    registry: string;
} | 
{
    registry: string;
} | 
{
    registry: string;
} | 
{
    registry: string;
};
    suggestionType: string | undefined ;
};
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
    particleStatus: packet_common_settings_particleStatus;
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
    value?: ByteArray;
}

interface packet_common_select_known_packs {
    packs: {
    namespace: string;
    id: string;
    version: string;
};
}

interface packet_common_custom_report_details {
    details: {
    key: string;
    value: string;
};
}

interface packet_common_remove_resource_pack {
    uuid?: UUID;
}

interface packet_common_add_resource_pack {
    uuid: UUID;
    url: string;
    hash: string;
    forced: bool;
    promptMessage?: anonymousNbt;
}

interface packet_common_server_links {
    links: {
    hasKnownType: bool;
    knownType: ServerLinkType ;
    unknownType: anonymousNbt ;
    link: string;
};
}