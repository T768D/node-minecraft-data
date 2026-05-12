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
// Unimplemented value
type ByteArray = unknown;
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

interface vec3i16 {
    x: i16;
    y: i16;
    z: i16;
}

// Unimplemented value
type IDSet = unknown;
type ContainerID = u8;
interface SlotComponent {
    type: SlotComponentType;
    data: anonymousNbt | varint | bool | undefined | i32 | ItemFireworkExplosion | string  | 
{
    enchantments: {
    id: varint;
    level: varint;
}

    showTooltip: bool;
} | 
{
    predicates: ItemBlockPredicate[];
    showTooltip: bool;
} | 
{
    predicates: ItemBlockPredicate[];
    showTooltip: bool;
} | 
{
    attributes: {
    typeId: varint;
    uuid: UUID;
    name: string;
    value: f64;
    operation: attribute_modifiers_attributes_operation;
    slot: attribute_modifiers_attributes_slot;
}

    showTooltip: bool;
} | 
{
    nutrition: varint;
    saturationModifier: f32;
    canAlwaysEat: bool;
    secondsToEat: f32;
    usingConvertsTo: Slot;
    effects: {
    effect: varint;
    probability: f32;
}

} | 
{
    rules: {
    blocks: IDSet;
    speed?: f32;
    correctDropForBlocks?: bool;
}

    defaultMiningSpeed: f32;
    damagePerBlock: varint;
} | 
{
    enchantments: {
    id: varint;
    level: varint;
}

    showInTooltip: bool;
} | 
{
    color: i32;
    showTooltip: bool;
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
}

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
    showInTooltip: bool;
} | 
{
    globalPosition?: {
    dimension: string;
    position: position;
}

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
}

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
}

} | 
{
    bees: {
    nbtData: anonymousNbt;
    ticksInHive: varint;
    minTicksInHive: varint;
}

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

interface ItemBlockPredicate {
    blockSet?: unknown;
    properties?: ItemBlockProperty[];
    nbt: anonOptionalNbt;
}

interface ItemBookPage {
    content: string;
    filteredContent?: string;
}

interface ItemWrittenBookPage {
    content: anonymousNbt;
    filteredContent: anonOptionalNbt;
}

interface ArmorTrimMaterial {
    assetName: string;
    ingredientId: varint;
    overrideArmorAssets: {
    key: string;
    value: string;
}

    description: anonymousNbt;
}

interface ArmorTrimPattern {
    assetId: string;
    templateItemId: varint;
    description: anonymousNbt;
    decal: bool;
}

interface InstrumentData {
    soundEvent: ItemSoundHolder;
    useDuration: f32;
    range: f32;
    description: anonymousNbt;
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

interface Slot {
    itemCount: i8;
}

interface Particle {
    type: Particle_type;
    data: varint | i32 | Slot | f32  | 
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
}

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

interface EntityMetadataWolfVariant {
    wildTexture: string;
    tameTexture: string;
    angryTexture: string;
    biome: IDSet;
}

// Unimplemented value
type entityMetadata = unknown;
interface minecraft_simple_recipe_format {
    category: varint;
}

interface minecraft_smelting_format {
    group: string;
    category: varint;
    ingredient: ingredient;
    result: Slot;
    experience: f32;
    cookTime: varint;
}

type tags = {
    tagName: string;
    entries: varint[];
}

interface chunkBlockEntity {
    y: i16;
    type: varint;
    nbtData: anonOptionalNbt;
}

type chat_session = {
    uuid: UUID;
    publicKey: {
    expireTime: i64;
    // Unimplemented value
    keyBytes: unknown;
    // Unimplemented value
    keySignature: unknown;
}

}

interface game_profile {
    name: string;
    properties: {
    name: string;
    value: string;
    signature?: string;
}

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
}

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